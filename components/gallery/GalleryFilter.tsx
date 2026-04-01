"use client";

interface Props {
  activeYear: string;
  setActiveYear: (year: string) => void;
}

export default function GalleryFilter({ activeYear, setActiveYear }: Props) {
  const years = ["2025", "2024", "2023", "2022"];

  return (
    <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8 mb-1">
      
      <div className="flex gap-4 sm:gap-6 lg:gap-10 items-center h-[52px] sm:h-[58px] lg:h-[64px]">

        {years.map((year) => {
          const isActive = year === activeYear;

          return (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`
                min-w-[72px] sm:min-w-[80px] lg:w-[91px]
                h-[38px] sm:h-[42px] lg:h-[48px]
                rounded-full
                px-[12px] sm:px-[14px] lg:px-[17px]
                py-[5px] sm:py-[6px] lg:py-[7px]
                flex items-center justify-center
                text-xs sm:text-sm lg:text-sm font-medium
                transition
                ${isActive 
                  ? "bg-[#D54E54] text-white" 
                  : "bg-[#FFD586]/80 text-black"}
              `}
            >
              {year}
            </button>
          );
        })}

      </div>

    </div>
  );
}