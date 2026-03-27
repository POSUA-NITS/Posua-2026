"use client";

import { useSong } from "@/components/providers/song-context";
import { FaPause, FaPlay } from "react-icons/fa";

const SongToggleButton = () => {
  const { isPlaying, toggleSong } = useSong();

  return (
    <button
      type="button"
      onClick={toggleSong}
      aria-label={isPlaying ? "Pause song" : "Play song"}
      className="fixed bottom-4 right-4 z-[9999] h-12 w-12 rounded-full bg-[#CB2229] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      {isPlaying ? (
        <FaPause aria-hidden="true" className="mx-auto h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <FaPlay aria-hidden="true" className="mx-auto h-4 w-4 pl-[1px] sm:h-5 sm:w-5" />
      )}
    </button>
  );
};

export default SongToggleButton;
