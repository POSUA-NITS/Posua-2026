"use client";
import React, { useRef, useState } from "react";
import GalleryCard from "./GalleryCard";

const GalleryGrid = () => {
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

    setHoveredIndex(index);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setExpandedIndex(null);

    timeoutRef.current = setTimeout(() => {
      setExpandedIndex(index);
    }, 180);
  };

  const handleLeave = () => {
    setHoveredIndex(null);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setExpandedIndex(null);
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="flex items-center justify-center pt-4 sm:pt-5 lg:pt-6 pb-1 sm:pb-2 mt-6 sm:mt-8 lg:mt-10">
        <div
          className="flex flex-col gap-2 sm:gap-3 lg:gap-4 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-square transition-transform duration-[950ms]"
          style={{
            transform: expandedIndex !== null ? "scale(1.05)" : "scale(1)",
            transitionTimingFunction: easing,
          }}
        >
          {[0, 1, 2].map((rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row gap-2 sm:gap-3 lg:gap-4 transition-all duration-[900ms]"
              style={{
                flex: activePos?.row === rowIndex ? 1.6 : 1,
                transitionTimingFunction: easing,
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
                    className="transition-all duration-[900ms] h-full will-change-[flex,transform]"
                    style={{
                      flex: isActiveColumn ? 1.6 : 1,
                      transitionTimingFunction: easing,
                    }}
                  >
                    <GalleryCard />
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
          <div
            className="w-[92vw] max-w-2xl aspect-square cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryCard expanded />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;