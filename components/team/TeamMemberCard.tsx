"use client";

import React, { useState } from "react";

interface TeamMember {
  name: string;
  role?: string;
  imageSrc?: string;
}

export default function TeamMemberCard({ name, role, imageSrc }: TeamMember) {
  const [isTouched, setIsTouched] = useState(false);
  // Assamese girl 2.png
  const imgSrc =
    imageSrc ||
    "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774018266/Assamese_girl_2_qjpmt4.webp";

  return (
    <div
      className="relative flex flex-col items-center group cursor-pointer w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] pb-10 sm:pb-16 md:pb-[80px] mx-auto"
      onClick={() => setIsTouched(!isTouched)}
    >
      <div className="relative w-full flex justify-center items-center">
        {/* Group 2608596.png (Bamboo frame) */}
        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930432/Group_2608596_vembhv.webp"
          alt="Bamboo frame"
          className="w-full h-auto relative z-0 pointer-events-none drop-shadow-sm"
        />
        <div className="absolute top-[10%] bottom-[10%] left-[12%] right-[12%] flex justify-center items-center z-10">
          <div className="w-[60%] h-[75%] relative overflow-hidden rounded-sm bg-[#f4ece8] shadow-inner">
            <img
              src={imgSrc}
              alt={name}
              className={`w-full h-full object-cover transition-transform duration-700 ease-in-out transform ${
                isTouched ? "scale-[1.10]" : "group-hover:scale-[1.10]"
              }`}
            />
          </div>
        </div>
        <div className="absolute z-20 w-[95%] sm:w-[320px] md:w-[340px] h-[100px] sm:h-[120px] md:h-[140px] top-[85%] -translate-y-[20%] flex flex-col items-center justify-center">
          {/* woood-removebg-preview 1.png (Wooden plaque) */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930430/woood-removebg-preview_1_ll8ajw.webp"
            alt="Wooden plaque"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 drop-shadow-lg"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
            <p
              className={`text-white text-lg sm:text-xl md:text-xl font-serif tracking-wide transition-all duration-500 ease-in-out transform drop-shadow-md text-center ${
                isTouched
                  ? "-translate-y-3 sm:-translate-y-4"
                  : "group-hover:-translate-y-3 sm:group-hover:-translate-y-4"
              }`}
            >
              {name}
            </p>

            <div className="absolute bottom-6 sm:bottom-6 md:bottom-8 flex justify-center w-full pointer-events-none">
              <p
                className={`text-[#f4ece8] text-sm sm:text-lg md:text-xl capitalize transition-opacity duration-500 drop-shadow-md text-center ${
                  isTouched
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
                style={{ fontFamily: "cursive" }}
              >
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
