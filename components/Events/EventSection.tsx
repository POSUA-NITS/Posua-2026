"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Materials {
  image: string;
  text: string;
  reverse?: boolean;
  title: string;
}

const EventSection = ({ image, text, reverse, title }: Materials) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Image Animation
      tl.fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
      );
      tl.fromTo(
        textContainerRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.7",
      );
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 items-start"
    >
      {/* Image Container */}
      <div
        ref={imageContainerRef}
        className={`order-1 ${reverse ? "sm:order-2" : "sm:order-1"}`}
      >
        <Image
          src={image}
          alt="event"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
          unoptimized
        />
      </div>

      {/* Text Container */}
      <div
        ref={textContainerRef}
        className={`order-2 ${reverse ? "sm:order-1" : "sm:order-2"}`}
      >
        <Image
          src="/assets/images/header.png"
          alt="decorative"
          height={200}
          width={200}
          unoptimized
          className="mx-auto -mt-15 -mb-20"
        />
        <h2 className="font-moglan text-4xl font-bold text-center text-[#CB2229] mb-4">
          {title}
        </h2>

        <p className="font-avita text-2xl mt-5 leading-relaxed text-center text-[#CB2229]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default EventSection;
