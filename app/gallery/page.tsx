"use client";

import { useState } from "react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryFilter from "@/components/gallery/GalleryFilter";

export default function GalleryPage() {
  const [activeYear, setActiveYear] = useState("2025");

  return (
    <main
      className="
      relative min-h-screen
      bg-[url('/bg/gallerybg.png')]
      bg-cover
      bg-top
      bg-no-repeat
      "
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 pt-24 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16">

        <h1
          className="text-[64px] sm:text-[80px] md:text-[96px] lg:text-[128px] leading-[100%] tracking-[-0.04em] text-[#CF585E]"
          style={{ fontFamily: "MoglanDemo" }}
        >
          Photo Gallery
        </h1>

        <GalleryGrid activeYear={activeYear} />

        <GalleryFilter
          activeYear={activeYear}
          setActiveYear={setActiveYear}
        />

      </div>
    </main>
  );
}