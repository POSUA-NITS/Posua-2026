import React from "react";

interface Props {
  expanded?: boolean;
  image?: string;
}

export default function GalleryCard({ expanded = false, image }: Props) {
  return (
    <div
      className={`
      w-full h-full
      bg-[#2F2B20]
      flex items-center justify-center
      transition-all duration-300 ease-out
      shadow-[12px_12px_22px_rgba(0,0,0,0.25)]
      hover:shadow-[22px_22px_40px_rgba(0,0,0,0.35)]
      cursor-pointer
      ${expanded ? "p-3" : "p-1.5 sm:p-2 lg:p-3"}
      `}
    >
      {/* White Layer */}
      <div
        className={`
        w-full h-full
        bg-white
        border border-[#2B271D]
        flex items-center justify-center
        shadow-[inset_4px_4px_4.8px_rgba(0,0,0,0.5),inset_-4px_-4px_5px_rgba(0,0,0,0.5)]
        ${expanded ? "p-6" : "p-2 sm:p-3 lg:p-6"}
        `}
      >
        {/* Image or Placeholder */}
        {image ? (
          <img
            src={image}
            alt="Gallery"
            className="w-full h-full object-cover border border-[#88857B]"
          />
        ) : (
          <div
            className="
            w-full h-full
            bg-[#C7C1B3]
            border border-[#88857B]
            shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25),inset_-4px_-4px_4px_rgba(0,0,0,0.25)]
            "
          />
        )}
      </div>
    </div>
  );
}