"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial animation for header and title
      const entranceTL = gsap.timeline();

      entranceTL
        .fromTo(
          headerRef.current,
          { opacity: 0, y: -60, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          },
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power4.out",
          },
          "-=0.8",
        );

      // Main hero image
      if (heroImageRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Left and Right side images
      if (leftImageRef.current) {
        gsap.fromTo(
          leftImageRef.current,
          { opacity: 0, x: -60, y: 30 },
          {
            opacity: 0.5,
            x: 0,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (rightImageRef.current) {
        gsap.fromTo(
          rightImageRef.current,
          { opacity: 0, x: 60, y: 30 },
          {
            opacity: 0.5,
            x: 0,
            y: 0,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2.5,
        onUpdate: (self) => {
          if (leftImageRef.current) {
            gsap.to(leftImageRef.current, {
              yPercent: self.progress * -18,
              overwrite: true,
            });
          }
          if (rightImageRef.current) {
            gsap.to(rightImageRef.current, {
              yPercent: self.progress * 18,
              overwrite: true,
            });
          }
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-x-hidden bg-white"
    >
      <div className="relative z-30 flex flex-col items-center pb-2">
        <div ref={headerRef}>
          <Image
            src="/assets/images/header.png"
            alt="decorative header"
            width={220}
            height={110}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h1
          ref={titleRef}
          className="font-moglan sm:text-7xl text-6xl text-[#CB2229] -mt-20"
        >
          Events
        </h1>
      </div>

      <div className="relative w-full">
        {/* Desktop Version */}
        <div className="hidden sm:grid grid-cols-[1fr_4fr_1fr] items-start w-full">
          <div
            ref={leftImageRef}
            className="flex justify-start overflow-hidden"
          >
            <Image
              src="/assets/images/event_section/hero_left.png"
              alt="left"
              width={800}
              height={1000}
              className="w-full h-auto object-cover opacity-50 -ml-25 max-w-none"
              unoptimized
            />
          </div>

          <div ref={heroImageRef} className="px-2">
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

          <div ref={rightImageRef} className="flex justify-end overflow-hidden">
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

        {/* Mobile Version */}
        <div className="flex sm:hidden flex-col gap-4 px-4 pb-10 overflow-hidden">
          <div ref={heroImageRef}>
            <Image
              src="/assets/images/event_section/hero.png"
              alt="hero"
              width={1000}
              height={800}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div ref={leftImageRef} className="overflow-hidden">
              <Image
                src="/assets/images/event_section/hero_left.png"
                alt="left"
                width={400}
                height={600}
                className="w-full h-auto opacity-50"
                unoptimized
              />
            </div>
            <div ref={rightImageRef} className="overflow-hidden">
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
