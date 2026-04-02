"use client";
import React, { useRef } from "react";
import Image from "next/image";
import EventSection from "../../components/Events/EventSection";
import Hero from "../../components/Events/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Event = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const flowerLeftRef = useRef<HTMLImageElement>(null);
  const flowerRightRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Background subtle parallax
      if (sectionsRef.current) {
        gsap.to(sectionsRef.current, {
          backgroundPositionY: "35%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionsRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      }

      // Flower Left Animation
      if (flowerLeftRef.current) {
        gsap.fromTo(
          flowerLeftRef.current,
          { opacity: 0, scale: 0.6, y: 80 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowerLeftRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Flower Right Animation
      if (flowerRightRef.current) {
        gsap.fromTo(
          flowerRightRef.current,
          { opacity: 0, scale: 0.6, y: 80 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowerRightRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-10"
    >
      <Hero />

      {/* Sections Container */}
      <div
        ref={sectionsRef}
        className="w-full h-auto grid grid-cols-1 gap-10 p-10 relative"
        style={{
          backgroundImage: "url('/assets/images/event_section/bg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <EventSection
          image="/assets/images/event_section/manthan.png"
          title="Manthan"
          text="The highlight of Spring Fest, this electrifying night brings a leading star to captivate the audience with a mesmerizing performance. Over the years, renowned artists have graced our stage, making it a night to remember. Get ready for an unforgettable musical journey!"
        />

        <EventSection
          image="/assets/images/event_section/rongili.png"
          title="Rongili"
          text="From graceful classical moves to electrifying contemporary beats, watch talented dancers set the stage on fire with passion and artistry. Let the music take over as we celebrate culture, creativity, and the joy of movement!"
          reverse
        />

        <Image
          ref={flowerLeftRef}
          src="/assets/images/event_section/flower.png"
          alt="Flower Left"
          width={500}
          height={400}
          className="absolute -left-10 top-[55%] -translate-y-1/2 z-10 hidden xl:block pointer-events-none"
          unoptimized
        />

        <EventSection
          image="/assets/images/event_section/patkai.png"
          title="Patkaair lpare"
          text="Challenge yourself with exciting questions on history, pop culture, science, and more. Compete with the brightest minds, win exciting prizes, and prove you've got what it takes to be the ultimate quiz champion!"
        />

        <Image
          ref={flowerRightRef}
          src="/assets/images/event_section/flower.png"
          alt="Flower Right"
          width={500}
          height={400}
          className="absolute -right-10 top-[65%] -translate-y-1/2 z-10 rotate-180 hidden xl:block pointer-events-none"
          unoptimized
        />

        <EventSection
          image="/assets/images/event_section/kristi.png"
          title="Kristi"
          text="The festival of Krishti gives a unique chance to see the beauty of time and to feel the complex cultural mix of the people who have lived in this land for ages, creating a splendid society that shows the combination of these different cultures. No matter where we live along the Barak or Brahmaputra rivers, we are all connected by a lovely fabric made of the golden threads of our cultural legacy."
          reverse
        />
        <EventSection
          image="/assets/images/event_section/bordoisila.png"
          title="Bordoisila"
          text="The NITS campus gets alive with captivating performances by the stunning 'Gabhorus', adorned in exquisite golden silk. It resembles the seasonal wind rushing back to her familial abode, bustling with fervor. "
        />
        <EventSection
          image="/assets/images/event_section/abhijatri.png"
          title="Abhijatri"
          text="The true measure of our society's strength lies in our ability to embrace diversity and foster unity. Over the years, 'Bor-Axom' has embraced numerous communities and tribes, enriching the tapestry of the Greater Assamese Culture.  "
          reverse
        />
      </div>
    </div>
  );
};

export default Event;
