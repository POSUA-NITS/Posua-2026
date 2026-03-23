import Image from "next/image";
import React from "react";

interface Materials {
  image: string;
  text: string;
  reverse?: boolean;
  title: string;
}
const EventSection = ({ image, text, reverse, title }: Materials) => {
  return (
    <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-10 p-4 items-start">
      {/* Image */}
      <div className={`order-1 ${reverse ? "sm:order-2" : "sm:order-1"}`}>
        <Image
          src={image}
          alt="event"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Text */}
      <div className={`order-2 ${reverse ? "sm:order-1" : "sm:order-2"}`}>
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
