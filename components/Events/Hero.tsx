"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-x-hidden bg-white">
      <div className="relative z-30 flex flex-col items-center pb-2">
        <Image
          src="/assets/images/header.png"
          alt="decorative header"
          width={220}
          height={110}
          className="mx-auto "
          unoptimized
        />
        <h1 className="font-moglan sm:text-7xl text-6xl text-[#CB2229] -mt-20">
          Events
        </h1>
      </div>

      <div className="relative w-full">
        <div className="hidden sm:grid grid-cols-[1fr_4fr_1fr] items-start w-full">
          <div className="flex justify-start overflow-hidden">
            <Image
              src="/assets/images/event_section/hero_left.png"
              alt="left"
              width={800}
              height={1000}
              className="w-full h-auto object-cover opacity-50 -ml-25 max-w-none"
              unoptimized
            />
          </div>

          <div className="px-2">
            <Image
              src="/assets/images/event_section/hero.png"
              alt="hero"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover -mt-16"
              priority
              unoptimized
            />
          </div>

          <div className="flex justify-end overflow-hidden">
            <Image
              src="/assets/images/event_section/hero_right.png"
              alt="right"
              width={800}
              height={1000}
              className="w-full h-auto object-cover opacity-50 -mr-25 max-w-none"
              unoptimized
            />
          </div>
        </div>

        <div className="flex sm:hidden flex-col gap-4 px-4 pb-10 overflow-hidden">
          <Image
            src="/assets/images/event_section/hero.png"
            alt="hero"
            width={1000}
            height={800}
            className="w-full h-auto"
            priority
            unoptimized
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <Image
                src="/assets/images/event_section/hero_left.png"
                alt="left"
                width={400}
                height={600}
                className="w-full h-auto opacity-50"
                unoptimized
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/assets/images/event_section/hero_right.png"
                alt="right"
                width={400}
                height={600}
                className="w-full h-auto opacity-50"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
