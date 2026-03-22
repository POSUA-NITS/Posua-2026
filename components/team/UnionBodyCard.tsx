"use client";

import React, { useState } from "react";

interface UnionBodyCardProps {
  name: string;
  role?: string;
  imageSrc?: string;
}

export default function UnionBodyCard({
  name,
  role,
  imageSrc,
}: UnionBodyCardProps) {
  const [isTouched, setIsTouched] = useState(false);
  // placeholder.png
  const imgSrc =
    imageSrc ||
    "https://res.cloudinary.com/dffm4zxpc/image/upload/v1773929259/main-sample.webp";

  return (
    <div
      className="relative group w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] flex flex-col items-center mb-8 sm:mb-12 mx-auto cursor-pointer"
      onClick={() => setIsTouched(!isTouched)}
    >
      <div className="relative w-full flex items-center justify-center z-0">
        {/* Guwahati_Dibrugarh_Assamese_Bihu_Jaapi_PNG_-_Free_Download-removebg-preview 2.png (Jaapi Background) */}
        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930434/Guwahati_Dibrugarh_Assamese_Bihu_Jaapi_PNG_-_Free_Download-removebg-preview_2_e1wihp.webp"
          alt="Jaapi Background"
          className="w-full h-auto z-0 pointer-events-none drop-shadow-sm"
        />

        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none transition-transform duration-500 ease-in-out ${
            isTouched
              ? "translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 md:translate-x-6 md:translate-y-6"
              : "group-hover:translate-x-2 group-hover:translate-y-2 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 md:group-hover:translate-x-6 md:group-hover:translate-y-6"
          }`}
        >
          {/* 1 81.png */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930428/1_81_sd7beu.webp"
            alt=""
            className="absolute bottom-0 left-[8%] sm:left-[10%] md:left-[12%] w-[45%] sm:w-[50%] object-contain drop-shadow z-0"
          />
          {/* 1 82.png */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930434/1_82_fd96dr.webp"
            alt=""
            className="absolute bottom-0 right-[8%] sm:right-[10%] md:right-[12%] w-[45%] sm:w-[50%] object-contain drop-shadow z-0"
          />

          <div className="relative w-[60%] sm:w-[60%] aspect-square rounded-full bg-white shadow-lg overflow-hidden z-10 flex items-center justify-center pointer-events-auto translate-y-[-3%] translate-x-[-2%]">
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-full object-cover text-transparent"
            />
          </div>

          <div className="absolute -bottom-2 sm:-bottom-2 md:-bottom-4 z-20 w-[160px] sm:w-[220px] md:w-[250px] h-[50px] sm:h-[70px] md:h-[80px] bg-[#751515] rounded-[40px] shadow-lg flex flex-col items-center justify-center pointer-events-auto">
            <p
              className={`text-white text-lg sm:text-2xl md:text-3xl font-normal leading-none tracking-wide transition-all duration-500 text-center ${
                isTouched
                  ? "-translate-y-1 sm:-translate-y-2"
                  : "group-hover:-translate-y-1 sm:group-hover:-translate-y-2"
              }`}
              style={{ fontFamily: "'MoglanDemo', serif" }}
            >
              {name}
            </p>

            <div className="absolute bottom-1 sm:bottom-2 w-full flex justify-center pointer-events-none">
              <p
                className={`text-[#e2dedb] text-[8px] sm:text-[10px] md:text-xs font-light tracking-widest uppercase transition-opacity duration-300 delay-200 text-center px-2 ${
                  isTouched
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
                style={{ fontFamily: "'MoglanDemo', serif" }}
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
