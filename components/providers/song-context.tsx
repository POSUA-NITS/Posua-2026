"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type SongContextValue = {
  startSong: () => void;
  toggleSong: () => void;
  pauseSong: () => void;
  isPlaying: boolean;
};

const SongContext = createContext<SongContextValue | undefined>(undefined);

const SONG_SRC = "/BackgroundAudio.mp3";
const SONG_START_TIME_SECONDS = 0;
const SONG_STATE_KEY = "posua_song_state";
export const GLOBAL_SONG_PLAY_EVENT = "posua:global-song-play";

type PersistedSongState = {
  currentTime: number;
  isPlaying: boolean;
  hasStarted: boolean;
};

let sharedAudio: HTMLAudioElement | null = null;
let sharedHasStarted = false;

function getSharedAudio() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!sharedAudio) {
    const audio = new Audio(SONG_SRC);
    audio.loop = true;
    audio.preload = "auto";
    sharedAudio = audio;
  }

  return sharedAudio;
}

function loadSongState(): PersistedSongState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawState = window.sessionStorage.getItem(SONG_STATE_KEY);
  if (!rawState) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawState) as PersistedSongState;
    return {
      currentTime: Number.isFinite(parsed.currentTime) ? parsed.currentTime : SONG_START_TIME_SECONDS,
      isPlaying: Boolean(parsed.isPlaying),
      hasStarted: Boolean(parsed.hasStarted),
    };
  } catch {
    return null;
  }
}

function saveSongState(state: PersistedSongState) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(SONG_STATE_KEY, JSON.stringify(state));
}

function notifyGlobalSongPlay() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(GLOBAL_SONG_PLAY_EVENT));
}

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(() => {
    const audio = getSharedAudio();
    return audio ? !audio.paused : false;
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = getSharedAudio();
    if (!audio) {
      return;
    }

    audioRef.current = audio;

    const stored = loadSongState();

    if (stored) {
      sharedHasStarted = stored.hasStarted;
      if (stored.hasStarted) {
        audio.currentTime = stored.currentTime;
      }

      if (stored.isPlaying) {
        void audio.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }

    const handlePlay = () => {
      setIsPlaying(true);
      saveSongState({
        currentTime: audio.currentTime,
        isPlaying: true,
        hasStarted: sharedHasStarted,
      });
    };

    const handlePause = () => {
      setIsPlaying(false);
      saveSongState({
        currentTime: audio.currentTime,
        isPlaying: false,
        hasStarted: sharedHasStarted,
      });
    };

    const handleTimeUpdate = () => {
      if (!sharedHasStarted) {
        return;
      }

      saveSongState({
        currentTime: audio.currentTime,
        isPlaying: !audio.paused,
        hasStarted: true,
      });
    };

    const handleBeforeUnload = () => {
      saveSongState({
        currentTime: audio.currentTime,
        isPlaying: !audio.paused,
        hasStarted: sharedHasStarted,
      });
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const startSong = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!sharedHasStarted) {
      audio.currentTime = SONG_START_TIME_SECONDS;
      sharedHasStarted = true;
    }

    void audio.play().then(() => {
      notifyGlobalSongPlay();
      setIsPlaying(true);
      saveSongState({
        currentTime: audio.currentTime,
        isPlaying: true,
        hasStarted: sharedHasStarted,
      });
    }).catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const toggleSong = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      if (!sharedHasStarted) {
        audio.currentTime = SONG_START_TIME_SECONDS;
        sharedHasStarted = true;
      }

      void audio
        .play()
        .then(() => {
          notifyGlobalSongPlay();
          setIsPlaying(true);
          saveSongState({
            currentTime: audio.currentTime,
            isPlaying: true,
            hasStarted: sharedHasStarted,
          });
        })
        .catch(() => {
          setIsPlaying(false);
        });
      return;
    }

    audio.pause();
    saveSongState({
      currentTime: audio.currentTime,
      isPlaying: false,
      hasStarted: sharedHasStarted,
    });
  }, []);

  const pauseSong = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
    }

    saveSongState({
      currentTime: audio.currentTime,
      isPlaying: false,
      hasStarted: sharedHasStarted,
    });
  }, []);

  const value = useMemo(
    () => ({
      startSong,
      toggleSong,
      pauseSong,
      isPlaying,
    }),
    [isPlaying, pauseSong, startSong, toggleSong]
  );

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
}

export function useSong() {
  const context = useContext(SongContext);

  if (!context) {
    throw new Error("useSong must be used inside SongProvider");
  }

  return context;
}
