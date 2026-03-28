"use client";

import React, { useEffect, useState } from "react";

type PreLoaderProps = {
  children: React.ReactNode;
  minDurationMs?: number;
};

export default function PreLoader({ children, minDurationMs = 3000 }: PreLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(() => {
    if (typeof document === "undefined") {
      return false;
    }

    return document.readyState === "complete";
  });

  useEffect(() => {
    let hasUnmounted = false;
    const progressIntervalMs = 30;
    const progressStep = 90 / (minDurationMs / progressIntervalMs);

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          if (isPageLoaded) {
            return 100;
          }
          return 90;
        }

        const next = prev + progressStep;
        return next >= 90 ? 90 : next;
      });
    }, progressIntervalMs);

    const initialLoadedState = document.readyState === "complete";

    const handleWindowLoad = () => {
      if (!hasUnmounted) {
        setIsPageLoaded(true);
      }
    };

    if (!initialLoadedState) {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      hasUnmounted = true;
      window.clearInterval(progressInterval);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [isPageLoaded, minDurationMs]);

  useEffect(() => {
    if (!isPageLoaded || progress < 90) {
      return;
    }

    const finalDelayTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.clearTimeout(finalDelayTimer);
    };
  }, [isPageLoaded, progress]);

  const blurPx = progress >= 90 ? 0 : 10 * (1 - progress / 90);

  return (
    <>
      <div className={isLoading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>

      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #87CEEB 5%,#ddddee 22.5%,#ffffff 37.5%,transparent 65%)",
            }}
          >
            <div className="absolute top-0 left-[10rem] w-[15rem] h-full">
              <img src="/sun.svg" alt="sun" className="w-[14rem] h-[14rem] object-cover" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <img
              src="/preloader-final.svg"
              alt="Preloader"
              className="w-[90%] md:w-[70%] lg:w-[50%] h-auto transition-[filter] duration-200"
              style={{ filter: `blur(${blurPx.toFixed(2)}px)` }}
            />
            <p className="mt-4 text-[#550E11] tracking-[0.2em] uppercase text-sm">Loading...</p>
            <p className="mt-2 font-cutefairy text-[#CB2229] text-xl md:text-4xl lg:text-4xl">{Math.round(progress)}%</p>
          </div>
        </div>
      )}
    </>
  );
}
