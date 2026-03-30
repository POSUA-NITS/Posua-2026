"use client";

import React from "react";
import UnionBodyCard from "./UnionBodyCard";
import TeamMemberCard from "./TeamMemberCard";

const PageHeader: React.FC = () => (
  <div className="flex flex-col items-center justify-center pb-4 relative w-full mt-4">
    {/* frame1-removebg-preview 5.png */}
    <img
      src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/frame1-removebg-preview_5_vfkf5e.webp"
      alt=""
      aria-hidden="true"
      className="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain mb-2 sm:mb-4"
    />
    <h1
      className="text-[#c43030] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide uppercase text-center"
      style={{ fontFamily: "'MoglanDemo', serif" }}
    >
      TEAM POSUA
    </h1>
  </div>
);

const TeamSectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 relative w-full group overflow-hidden">
      {/* frame1-removebg-preview 5.png */}
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/frame1-removebg-preview_5_vfkf5e.webp"
        alt=""
        aria-hidden="true"
        className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-auto object-contain mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110"
      />

      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-10 w-full relative px-2 sm:px-4">
        {/* doo.-removebg-preview 1.png */}
        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930429/doo.-removebg-preview_1_jsythx.webp"
          alt=""
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain transition-transform duration-300 group-hover:-translate-x-2"
        />

        <h2
          className="text-[#7a1a1a] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide transition-colors duration-300 group-hover:text-[#902020] text-center whitespace-nowrap"
          style={{ fontFamily: "'MoglanDemo', serif" }}
        >
          {title}
        </h2>

        {/* bohag_bihu-removebg-preview 1.png */}
        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930429/bohag_bihu-removebg-preview_1_kju2di.webp"
          alt=""
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full pt-[60px] sm:pt-[100px] md:pt-[120px] pb-[40px] sm:pb-[80px] md:pb-[100px] mt-10">
      <div className="absolute inset-x-0 top-0 bottom-0 z-0 overflow-hidden flex justify-center">
        <div
          className="w-[200%] sm:w-[150%] md:w-[120%] h-full rounded-t-[30%] overflow-hidden relative"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        >
          {/* boat.gif */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1774017642/boat_gi2qcv.gif"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-bottom opacity-60"
          />
          <div className="absolute inset-0 bg-[#add8e6]/10 pointer-events-none" />
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-6">
        <div className="flex justify-center sm:justify-start mb-8 sm:mb-14 relative z-30">
          {/* পছোৱা.png (Posua) */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930428/%E0%A6%AA%E0%A6%9B%E0%A7%8B%E0%A7%B1%E0%A6%BE_lcvtuh.webp"
            alt="Posua"
            className="w-[180px] sm:w-[250px] md:w-[350px] lg:w-[450px] h-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl text-center sm:text-left">
          <div className="flex flex-col gap-2 z-20 items-center sm:items-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] text-sm sm:text-base md:text-lg font-semibold hover:text-[#7a1a1a] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] text-sm sm:text-base md:text-lg font-semibold hover:text-[#7a1a1a] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] text-sm sm:text-base md:text-lg font-semibold hover:text-[#7a1a1a] transition-colors"
            >
              X
            </a>

            <div className="mt-4 flex flex-col items-center sm:items-start gap-2 w-full">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <label
                  htmlFor="footer-email"
                  className="text-[#333] text-sm sm:text-base md:text-lg font-semibold"
                >
                  Email*
                </label>
                <span className="text-[#6bb280] text-xs sm:text-sm md:text-base">
                  to
                </span>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="posua@nits.ac.in"
                  className="bg-transparent border-none text-[#6bb280] placeholder-[#6bb280] text-xs sm:text-sm md:text-base w-[130px] sm:w-[150px] outline-none text-center sm:text-left"
                />
              </div>
              <button
                type="button"
                className="bg-[#8cc63f] hover:bg-[#7ab036] text-[#1a1a1a] text-xs sm:text-sm md:text-base font-bold px-4 py-1.5 sm:px-5 rounded-[4px] shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer mt-1"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 z-20 items-center sm:items-start">
            <p className="text-[#333] text-sm sm:text-base md:text-lg font-semibold">
              NIT Silchar
            </p>
            <p className="text-[#333] text-sm sm:text-base md:text-lg font-semibold">
              NIT Road, Fakirtilla
            </p>
            <p className="text-[#333] text-sm sm:text-base md:text-lg font-semibold">
              Silchar, Assam, 788010
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 z-20 items-center sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[#333] text-sm sm:text-base md:text-lg font-semibold">
                John Doe
              </p>
              <p className="text-[#c44a4a] text-xs sm:text-sm md:text-base font-medium">
                +91 98975 89326
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[#333] text-sm sm:text-base md:text-lg font-semibold">
                Lisa Williams
              </p>
              <p className="text-[#c44a4a] text-xs sm:text-sm md:text-base font-medium">
                +91 95347 56282
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function TeamPage() {
  const unionBodyData = Array(6).fill({
    name: "John Doe",
    role: "Head",
    imageSrc: "",
  });
  const coreTeamData = Array(3).fill({
    name: "John Doe",
    role: "Head",
    imageSrc: "",
  });
  const techTeamData = [
    {
      name: "Barnil Sarma",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774860603/barnil_s2m0ku.webp",
    },
    {
      name: "Manash Pratim Goswami",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850083/Manash_Pratim_Goswami_-_Manash_Goswami_cgykcj.webp",
    },
    {
      name: "Jitamanyu Phukan",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850092/Jitamanyu_Phukan_la3jiu.webp",
    },
    {
      name: "Subrata Lodh",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850096/Subrata_Lodh_bhbm8u.webp",
    },
    {
      name: "KALLUL GOGOI",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850086/myself1_-_Kallul_Gogoi_-_Kallul_Gogoi_ycw58g.webp",
    },
    {
      name: "Nibir Deka",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850084/NibirDeka_2_2412007.jpeg_-_Nibir_Deka_la7woq.webp",
    },
    {
      name: "Dishank Choudhury",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850082/Dishank_Choudhury_xgs2eo.webp",
    },
    {
      name: "Sivangi Kashyap",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850083/Sivangi_Kashyap__Web_-_Sivangi_Kashyap_dsozk6.webp",
    },
    {
      name: "Rahul Kumar",
      role: "UI/UX Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850101/Rahul_Kumar_rl6irt.webp",
    },
    {
      name: "Mayur Kalita",
      role: "UI/UX Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850093/mayur_kalita_jrt7jj.webp",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white overflow-x-hidden relative flex flex-col items-center">
      <div className="hidden sm:block absolute top-[80px] md:top-[120px] left-0 right-0 h-[4px] sm:h-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-[20px] left-0 right-0 h-[4px] sm:h-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />

      {/* Mask group.png */}
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1774017380/Mask_group_mkjmcq.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[100px] sm:top-[140px] md:top-[180px] left-0 w-[150px] sm:w-[250px] md:w-[400px] lg:w-[650px] opacity-40 pointer-events-none z-[1] mix-blend-multiply"
      />

      {/* coral-removebg-preview 3.png */}
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930440/coral-removebg-preview_3_fb97q4.webp"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[600px] sm:bottom-[900px] lg:bottom-[1100px] left-[-2%] w-[120px] sm:w-[200px] md:w-[300px] lg:w-[400px] opacity-70 pointer-events-none z-[0] mix-blend-multiply"
      />

      {/* 8805-removebg-preview 2.png */}
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/8805-removebg-preview_2_xqqoph.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[800px] sm:top-[1100px] lg:top-[1400px] left-0 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[450px] opacity-65 pointer-events-none z-[0] mix-blend-multiply"
      />
      {/* 8805-removebg-preview 2 (1).png */}
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930438/8805-removebg-preview_2_1_h9ghzv.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[1000px] sm:top-[1400px] lg:top-[1600px] right-0 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[450px] opacity-65 pointer-events-none z-[0] mix-blend-multiply"
      />

      <div className="w-full max-w-[1150px] relative bg-transparent flex flex-col items-center pt-[60px] sm:pt-[100px] md:pt-[130px]">
        <div className="absolute top-[150px] sm:top-[200px] md:top-[280px] inset-x-0 flex justify-center pointer-events-none z-[0]">
          {/* VECTOR_ART__Chinmoy_Sharma-removebg-preview 1.png */}
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930436/VECTOR_ART__Chinmoy_Sharma-removebg-preview_1_mnnuny.webp"
            alt=""
            aria-hidden="true"
            className="w-[90%] sm:w-[80%] max-w-[800px] h-auto object-contain opacity-70 mix-blend-multiply"
          />
        </div>

        <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-[4px] sm:w-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />
        <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-[4px] sm:w-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />

        <div className="relative z-10 w-full mb-4 px-2">
          <PageHeader />
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-24 text-center mt-2 mb-8 sm:mb-10 z-10 relative max-w-[1000px]">
          <p
            className="text-[#1a1a1a] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-light tracking-wide mix-blend-multiply"
            style={{ fontFamily: "'MoglanDemo', serif" }}
          >
            With the arrival of spring and the departure of winter days, our
            Mother Nature expresses her joy of welcoming the calming
            rejuvenation via greenery and brightness all around her. Our Spring
            Fest, Posua is that venture which nurtures this celebration. This
            spree witnesses everyone coming together to work as a team, be it
            the students, the faculty members and the entire fraternity of NIT
            Silchar into its circle of gaiety and also ensures of breaking all
            the barriers among the crowd and bringing everyone together.
          </p>
        </div>

        <section className="relative w-full py-4 sm:py-6 z-10 mt-2 sm:mt-10">
          <div className="w-full relative px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center mb-8 sm:mb-20 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-between w-full relative z-10 gap-8 sm:gap-0 max-w-[1150px]">
              <div className="w-full sm:w-auto flex justify-start sm:-ml-4 md:-ml-8 transition-transform">
                <UnionBodyCard
                  name="John Doe"
                  role="Chief Patron"
                  imageSrc=""
                />
              </div>
              <div className="w-full sm:w-auto flex justify-end sm:-mr-4 md:-mr-8 transition-transform">
                <UnionBodyCard
                  name="John Doe"
                  role="Chief Patron"
                  imageSrc=""
                />
              </div>
            </div>
            <div className="flex justify-center w-full mt-4 sm:-mt-16 md:-mt-24 lg:-mt-32 relative z-20">
              <UnionBodyCard name="John Doe" role="Chief Patron" imageSrc="" />
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="Union Body" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 justify-items-center max-w-[1150px] w-full">
              {unionBodyData.map((member, i) => (
                <TeamMemberCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="Core Team" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 justify-items-center max-w-[1150px] w-full">
              {coreTeamData.map((member, i) => (
                <TeamMemberCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="Tech Team" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 justify-items-center max-w-[1150px] w-full">
              {techTeamData.map((member, i) => (
                <TeamMemberCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* <div className="w-full relative z-10 mt-8 sm:mt-10">
        <Footer />
      </div> */}
    </main>
  );
}
