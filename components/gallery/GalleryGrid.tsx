"use client";
import React, { useRef, useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import data from "./images.json";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  activeYear: string;
}

const GalleryGrid = ({ activeYear }: Props) => {
  const rawImages =
    activeYear === "2024"
      ? data.images1
      : activeYear === "2023"
      ? data.images2
      : activeYear== "2025"
      ? data.images4
      : data.images3;

  const images = rawImages.slice(0, 9);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getPos = (index: number) => ({
    row: Math.floor(index / 3),
    col: index % 3,
  });

  const activePos = expandedIndex !== null ? getPos(expandedIndex) : null;

  const easing = "cubic-bezier(0.34, 1.56, 0.64, 1)";

  const handleEnter = (index: number) => {
    if (expandedIndex === index) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setExpandedIndex(index);
    }, 120); 
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setExpandedIndex(null);
    }, 120);
  };

  const handleClick = (index: number) => {
    const highRes = images[index]?.url
      ?.replace("w_400", "w_800")
      .replace("q_auto", "q_auto:good");

    const img = new Image();
    img.src = highRes;

    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev! - 1
    );
  };

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") setSelectedIndex(null);
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, [selectedIndex]);


  return (
    <>
      <div className="flex items-center justify-center pt-4 sm:pt-5 lg:pt-6 pb-1 sm:pb-2 mt-6 sm:mt-8 lg:mt-10">
        <div
          className="flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-square transition-transform duration-[900ms] transform-gpu"
          style={{
            transform: expandedIndex !== null ? "scale(1.05)" : "scale(1)",
            transitionTimingFunction: easing,
            willChange: "transform",
          }}
        >
          {[0, 1, 2].map((rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row gap-2 sm:gap-3 lg:gap-4 transition-[flex] duration-[900ms]"
              style={{
                flex: activePos?.row === rowIndex ? 1.6 : 1,
                transitionTimingFunction: easing,
                willChange: "flex",
              }}
            >
              {[0, 1, 2].map((colIndex) => {
                const index = rowIndex * 3 + colIndex;
                const isActiveColumn = activePos?.col === colIndex;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(index)}
                    className="h-full transition-[flex,transform] duration-[900ms] transform-gpu"
                    style={{
                      flex: isActiveColumn ? 1.6 : 1,
                      transitionTimingFunction: easing,
                      willChange: "flex, transform",
                    }}
                  >
                    <GalleryCard image={images[index]?.url} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >

          {/* ⬅️ Prev */}
          <button
            onClick={(e) => {
            e.stopPropagation();
            handlePrev();
            }}
            className="
              absolute left-4 sm:left-6 lg:left-[calc(50%-380px)]
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-white/20 backdrop-blur-md
              text-white
              shadow-md
              hover:bg-white/40 hover:scale-110
              transition
              z-50
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* ➡️ Next */}
          <button
            onClick={(e) => {
            e.stopPropagation();
            handleNext();
            }}
            className="
              absolute right-4 sm:right-6 lg:right-[calc(50%-380px)]
              w-10 h-10 flex items-center justify-center
              rounded-full
             bg-white/20 backdrop-blur-md
             text-white
             shadow-md
             hover:bg-white/40 hover:scale-110
             transition
            z-50
            "
          >
            <ChevronRight size={22} />
          </button>


          <div
            className="w-[92vw] max-w-2xl aspect-square cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
    
              <GalleryCard
                expanded
                image={images[selectedIndex]?.url
                ?.replace("w_400", "w_800")
                .replace("q_auto", "q_auto:good")}
              />

              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-1 -right-1
                           w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
                           flex items-center justify-center
                           rounded-full 
                           bg-black/80
                           text-white 
                           border-2 border-white/40
                           shadow-lg
                           hover:scale-110 transition z-50"
              >
                <X size={20} />
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;