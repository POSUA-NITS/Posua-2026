import React from "react";
import Image from "next/image";
import EventSection from "../../components/Events/EventSection";
import Hero from "../../components/Events/Hero";
const Event = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center gap-10">
      <Hero />
      {/* Sections */}
      <div
        className="w-full grid grid-cols-1 gap-10 p-10 relative"
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
          image="/assets/images/event_section/manthan.png"
          title="Rongili"
          text="From graceful classical moves to electrifying contemporary beats, watch talented dancers set the stage on fire with passion and artistry. Let the music take over as we celebrate culture, creativity, and the joy of movement!"
          reverse
        />
        <Image
          src="/assets/images/event_section/flower.png"
          alt="Flower Left"
          width={500}
          height={400}
          className="absolute -left-10 top-[55%] -translate-y-1/2 z-10 hidden xl:block pointer-events-none"
          unoptimized
        />
        <EventSection
          image="/assets/images/event_section/manthan.png"
          title="Patkaair lpare"
          text="Challenge yourself with exciting questions on history, pop culture, science, and more. Compete with the brightest minds, win exciting prizes, and prove you've got what it takes to be the ultimate quiz champion!"
        />
        <Image
          src="/assets/images/event_section/flower.png"
          alt="Flower Right"
          width={500}
          height={400}
          className="absolute -right-10 top-[65%] -translate-y-1/2 z-10 rotate-180 hidden xl:block pointer-events-none"
          unoptimized
        />

        <EventSection
          image="/assets/images/event_section/manthan.png"
          title={"Manthan"}
          text="The highlight of Spring Fest, this electrifying night brings a leading star to captivate the audience with a mesmerizing performance. Over the years, renowned artists have graced our stage, making it a night to remember. Get ready for an unforgettable musical journey!"
          reverse
        />
      </div>
    </div>
  );
};

export default Event;
