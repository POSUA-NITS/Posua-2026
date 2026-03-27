"use client";

import React, { useState, useRef, useEffect } from "react";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const count = React.Children.count(children);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    // FIX: Wrap the initial state setting in a function to satisfy the linter
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    handleResize(); // Call it once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Screen1 = windowWidth >= 1350;
  const Screen2 = windowWidth >= 1024 && windowWidth < 1350;
  const bigScreen = windowWidth >= 625 && windowWidth < 1024;
  const VISIBLE_CARDS = windowWidth >= 625 ? 5 : 3;

  useEffect(() => {
    if (carouselRef.current && children) {
      const firstCard = carouselRef.current.querySelector('[data-card="true"]') as HTMLElement;
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    }
  }, [children, windowWidth]);

  useEffect(() => {
    if (popupVisible) return;
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % count);
    }, 1500);
    return () => clearInterval(interval);
  }, [count, active, popupVisible]);

  const handleCardClick = (cardIndex: number) => {
    if (cardIndex === active) {
      setPopupVisible((prev) => !prev);
    } else {
      setActive(cardIndex);
    }
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-[30rem] lg:w-[48rem] lg:h-[30rem] flex justify-center items-center" ref={carouselRef}>
          {Array.from({ length: VISIBLE_CARDS }, (_, index) => {
            const cardIndex = (active + index - Math.floor(VISIBLE_CARDS / 2) + count) % count;
            const offset = index - Math.floor(VISIBLE_CARDS / 2);
            const absOffset = Math.abs(offset);
            let scale = 1;

            if (absOffset > 0) {
              scale = 1 - absOffset * 0.1;
              scale = Math.max(0.8, scale);
            }

            const translationFactor = Screen1 ? 0.7 : Screen2 ? 0.6 : bigScreen ? 0.5 : 0.45;

            return (
              <div
                key={cardIndex}
                data-card="true"
                onClick={() => handleCardClick(cardIndex)}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer flex justify-center items-center"
                style={{
                  transform: `translateX(calc(${offset * cardWidth * translationFactor}px - ${offset * cardWidth * (1 - scale)}px)) scale(${scale})`,
                  zIndex: count - absOffset,
                  opacity: absOffset > MAX_VISIBILITY ? 0 : 1,
                  pointerEvents: absOffset > MAX_VISIBILITY ? "none" : "auto",
                  display: "block",
                }}
              >
                {childrenArray[cardIndex]}
              </div>
            );
          })}
        </div>
      </div>
      {popupVisible && (
        <div 
          className="fixed inset-0 bg-black/60 z-[1000] flex justify-center items-center" 
          onClick={() => setPopupVisible(false)}
        >
          <div 
            className="flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {childrenArray[active]}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;