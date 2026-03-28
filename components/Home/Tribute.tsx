"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GLOBAL_SONG_PLAY_EVENT, useSong } from "@/components/providers/song-context";

const LYRICS = [
  "মায়াবিনী ৰাতিৰ বুকুত",
  "দেখা পেলোঁ তোমাৰ ছবি",
  "ধৰা দিলা গোপনে আহি হিয়াৰ কোণত",
  "তুমি যে মোৰ শুকান মনত",
];

const WAVE_BARS = [6, 10, 18, 26, 34, 40, 44, 40, 34, 26, 18, 10, 6, 10, 18,
  26, 34, 40, 44, 40, 34, 28, 20, 14, 8, 12, 22, 32, 40, 44,
  38, 28, 18, 10, 6];

export default function TributePage() {
  const { pauseSong } = useSong();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    pauseSong();
    void audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => setIsPlaying(false);

  const skipBy = (secs: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + secs), audio.duration);
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const filledBars = Math.round((progress / 100) * WAVE_BARS.length);

  useEffect(() => {
    const handleGlobalSongPlay = () => {
      const tributeAudio = audioRef.current;
      if (!tributeAudio) {
        return;
      }

      if (!tributeAudio.paused) {
        tributeAudio.pause();
      }
      setIsPlaying(false);
    };

    window.addEventListener(GLOBAL_SONG_PLAY_EVENT, handleGlobalSongPlay);
    return () => {
      window.removeEventListener(GLOBAL_SONG_PLAY_EVENT, handleGlobalSongPlay);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center
                        min-h-[520px] md:min-h-[640px] lg:h-[600px]">

      <audio
        ref={audioRef}
        src="/home/mayabini.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* ORNAMENTAL CORNERS — hide on very small screens */}
      <div className="absolute -top-10 -left-10 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] opacity-80 z-0 rotate-45">
        <Image src="/home/leftCornerHome.png" alt="pattern-tl" fill className="object-contain object-top-left" />
      </div>
      <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] opacity-80 z-0 rotate-45">
        <Image src="/home/rightCornerHome.png" alt="pattern-br" fill className="object-contain object-bottom-right" />
      </div>

      {/* Music notes background — hidden on mobile to avoid clutter */}
      <div className="w-[120px] h-[140px] left-3 bottom-15 h-[120px] md:block absolute md:left-6 md:bottom-6 md:w-[420px] md:h-[380px] opacity-80 z-10 pointer-events-none">
        <Image src="/home/music.png" alt="musical notes" fill className="object-contain" />
      </div>

      {/* Mandala disc — hidden on mobile */}
      <div className="w-[130px] h-[130px] left-[50%]  md:block absolute right-[25%] top-[40%] md:w-[280px] md:h-[260px] opacity-70 z-0 pointer-events-none">
        <Image src="/home/musicBg.png" alt="mandala-bg" fill className="object-contain" />
        <Image src="/home/disc-roll.png" alt="music-roller" fill className="object-contain animate-spin" />
      </div>

      {/* CENTRAL CONTENT WRAPPER */}
      <div className="relative w-full max-w-6xl h-full flex flex-col items-center px-4">

        {/* TRIBUTE HEADER */}
        <div className="flex flex-col items-center z-30 pt-1 md:pt-8 mb-8 md:mb-12">
          <div className="w-[14rem] h-[5rem] sm:w-[18rem]  sm:h-[6rem] md:w-[24rem] md:h-[8rem] relative">
            <Image src="/home/tribute-font.png" alt="Tribute" fill className="object-contain" priority />
          </div>
        </div>

        {/* ORANGE GLOW ELLIPSE */}
        <div
          className="hidden md:block absolute bottom-0 left-[50%] -translate-x-1/2 w-full md:w-[680px] h-[300px] md:h-[500px] z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 60% at 50% 90%, #ff8b25d6 0%, #f4864040 40%, transparent 100%)" }}
        />

        {/* ARTIST IMAGE — smaller on mobile, centered */}
        <div className="absolute -top-20  md:bottom-0 left-[50%]  -translate-x-1/2
                        w-[420px] h-[420px]
                        sm:w-[460px] sm:h-[460px]
                        md:w-[600px] md:h-[600px]
                        lg:w-[680px] lg:h-[680px] z-20">
          <Image
            src="/home/zubeenDaa.png"
            alt="Zubeen Garg"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* RIGHT SIDE PANEL
            Mobile: centred below header, above artist overlap
            Desktop: absolute right side */}
        <div className="left-[4%]  bottom-[0%] relative lg:absolute lg:left-[70%] lg:top-[5%] z-30
                        flex flex-col items-center md:items-center
                        w-full lg:w-auto mt-4 md:mt-6 lg:mt-0">

          {/* Mayabini title image */}
          <div className=" relative h-[100px] sm:h-[100px] md:h-[180px] lg:h-[270px]
                          w-[220px] sm:w-[280px] md:w-[360px] mt-2 md:mt-13">
            <Image
              src="/home/mayabini.png"
              alt="মায়াবিনী"
              fill
              className="object-contain hidden md:block md:object-right-top"
            />
          </div>



          {/* WAVEFORM + PLAYER CARD */}

          <div className="flex mt-3 w-[92%] max-w-[340px] md:max-w-[360px] lg:w-[280px]
                          bg-transparent backdrop-blur-sm border border-[#d9a09a]
                          rounded-2xl shadow-lg px-3 pt-3 pb-2 flex-col items-center gap-2">
            {/* Time labels */}
            <div className="flex justify-between w-full">
              <span className="text-[10px] text-[#8a3a3a] font-mono">{fmt(currentTime)}</span>
              <span className="text-[10px] text-[#8a3a3a] font-mono">{fmt(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }}
                aria-label="Restart" className="text-[#6B1A1A] hover:text-[#8B2525] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
              </button>

              <button onClick={() => skipBy(-10)} aria-label="Back 10s"
                className="text-[#6B1A1A] hover:text-[#8B2525] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                </svg>
              </button>

              <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}
                className="w-9 h-9 rounded-full bg-[#6B1A1A] hover:bg-[#8B2525] active:scale-95 transition-all duration-150 flex items-center justify-center shadow-md">
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-[2px]">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <button onClick={() => skipBy(10)} aria-label="Forward 10s"
                className="text-[#6B1A1A] hover:text-[#8B2525] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 13c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2z" />
                </svg>
              </button>

              <button onClick={() => { if (audioRef.current) audioRef.current.loop = !audioRef.current.loop; }}
                aria-label="Toggle repeat" className="text-[#6B1A1A] hover:text-[#8B2525] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Vinyl bottom-left — hidden on mobile */}
      <div className="w-[85px] h-[85px] bottom-[10%] left-[10%] md:block absolute z-9 md:bottom-[-50px] md:left-[30%] md:w-[200px] md:h-[200px] opacity-60 rotate-12 pointer-events-none">
        <Image src="/home/musicBg.png" alt="vinyl" fill className="object-contain" />
        <Image src="/home/disc-roll.png" alt="music-roller" fill className="object-contain animate-spin" />
      </div>

      <style>{`
        @keyframes waveAnim {
          from { transform: scaleY(0.6); }
          to   { transform: scaleY(1.3); }
        }
      `}</style>
    </section>
  );
}
