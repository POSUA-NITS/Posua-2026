import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #00C8F0 0%, #5FDDFA 18%, #B8F0FE 38%, #E8F9FF 52%, #ffffff 65%)",
      }}
    >
      {/* Cloud top-right — smaller on mobile */}
      <div className="absolute top-0 right-0 w-[200px] h-[120px] sm:w-[300px] sm:h-[180px] md:w-[420px] md:h-[240px] pointer-events-none z-0">
        <Image src="/cloud.png" alt="cloud" fill className="object-contain object-top-right" priority />
      </div>

      {/* Sun glow left */}
      <div
        className="absolute top-[6%] left-[-4%] w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.5) 60%, transparent 80%)",
          filter: "blur(6px)",
        }}
      />


      {/* Centre logo */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-20 pb-8 px-4">
        <div className="relative w-[280px] h-[240px] sm:w-[340px] sm:h-[290px] md:w-[420px] md:h-[360px] max-w-[90vw]">
          <Image
            src="/home/posua-home.png"
            alt="Posua Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
