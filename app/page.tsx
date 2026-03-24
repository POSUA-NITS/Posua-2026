"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Landing = () => {
  // 1. Refs for moving layers (Removed flowers from here)
  const [hasMounted, setHasMounted] = React.useState(false);
  const mountainRef = useRef(null);
  const sunRef = useRef(null);
  const cloudRef = useRef(null);
  const treeRef = useRef(null);
  const bambooRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const landingToAbout = () => {
    const tl = gsap.timeline();

    tl.to(landingRef.current, {
      x: "-100vw",
      duration: 1.5,
      ease: "power2.inOut",
    }, 0) // '0' ensures it starts at the beginning of the timeline
      .to(aboutRef.current, {
        x: "-100vw",
        duration: 1.5,
        ease: "power2.inOut",
      }, 0); // '0' makes this start at the same time as the first one
  };
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useEffect(() => {
    if (!hasMounted) return;
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 1024px)", () => {
      // Scale up slightly to hide edges during 2D translation
      gsap.set(
        [
          mountainRef.current,
          sunRef.current,
          cloudRef.current,
          treeRef.current,
          bambooRef.current,
        ],
        { scale: 1.1 }
      );

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;

        // Normalize mouse coordinates (-1 to 1)
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;

        const animConfig = {
          ease: "power2.out",
          duration: 1.2, // Smooth damping
        };

        // 2. Pure 2D Translation (No rotation)
        // Background (Moves slowly)
        gsap.to(sunRef.current, { ...animConfig, x: x * -15, y: y * -10 });
        gsap.to(mountainRef.current, { ...animConfig, x: x * -25, y: y * -15 });

        // Midground
        gsap.to(cloudRef.current, { ...animConfig, x: x * -45, y: y * -25 });

        // Foreground (Moves faster to create depth)
        gsap.to(bambooRef.current, { ...animConfig, x: x * -60, y: y * -35 });
        gsap.to(treeRef.current, { ...animConfig, x: x * -90, y: y * -45 });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, [hasMounted]);
  if (!hasMounted) {
    return <div className="w-screen h-screen bg-white" />;
  }
  return (
    <div className="relative top-0 left-0 w-screen h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen overflow-hidden min-h-screen py-2"
        // Removed perspective: "1000px" as we are now in 2D
        ref={landingRef}
      >
        {/* Background Mountain */}
        <div className="absolute bottom-0 left-0 w-full h-full" ref={mountainRef}>
          <img src="/mountain1.svg" alt="mountain" className="w-full h-full object-cover" />
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #87CEEB 5%,#ddddee 22.5%,#ffffff 37.5%,transparent 65%)",
          }}
        >
          {/* Sun */}
          <div className="absolute top-0 left-[10rem] w-[15rem] h-full" ref={sunRef}>
            <img src="/sun.svg" alt="sun" className="w-[14rem] h-[14rem] object-cover" />
          </div>

          {/* Cloud */}
          <div className="absolute top-0 right-0 w-fit h-fit" ref={cloudRef}>
            <img src="/cloud.png" alt="cloud" className="w-[30rem] h-[30rem] object-cover" />
          </div>

          {/* Static Top-Left Flower (Ref removed) */}
          <div className="absolute top-[10rem] left-0">
            <img src="/flowerleft.png" alt="flower" className="w-[8rem] h-[8rem] object-cover" />
          </div>
        </div>

        {/* Static Bottom-Right Flower (Ref removed) */}
        <div className="absolute bottom-0 right-0">
          <img src="/flowerleft.png" alt="flower" className="w-[8rem] -scale-x-100 h-[8rem] object-cover" />
        </div>

        {/* Foreground Tree */}
        <div className="absolute -top-[5vh] -right-[8vw]" ref={treeRef}>
          <img src="/tree2.svg" alt="tree" className="h-[38rem] object-cover" />
        </div>

        {/* Midground Bamboo */}
        <div
          className="flex flex-row items-center justify-around absolute -bottom-[50vh] left-0 w-full h-full"
          ref={bambooRef}
          style={{
            backgroundImage: "url('/bamboo.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Static UI Overlay */}
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#ffffff14] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-full w-full justify-center">
            <img src="/logoposua.png" alt="logo" className="object-cover" />
          </div>
        </div>
        <button
          onClick={landingToAbout}
          className="relative top-[10rem] enterbutton bg-[#ff0000] hover:bg-[#ffff00] text-[#ffff00] text-xl hover:text-[#ff0000] font-bold py-2 px-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors duration-300 animate-float"
        >
          Enter
        </button>
      </div>
      <div
        ref={aboutRef}
        className="absolute top-0 left-[100vw] w-screen h-screen flex items-center justify-center text-4xl font-bold text-[#000000]"
        style={{ backgroundImage: "url('/forest.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* <div className="absolute -top-[5rem] -right-[5rem] h-fit w-fit">
          <img src="/kothal.png" alt="kothal" className="object-cover w-[32rem] h-[32rem]" />
        </div> */}
        <div className="flex flex-col items-center justify-center h-full w-full">
          <img src="/jaapi-removebg-preview.png" alt="Jaapi" className="jaapi object-cover w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000038] flex flex-col md:flex-row items-center justify-center">
          {/* 1. Main Container: Fixed height on desktop, auto height on mobile to allow stacking */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000038] flex items-center justify-center p-4 overflow-y-auto md:overflow-hidden">

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl lg:h-[60%]">

              {/* 2. Visuals Section (Rangghar + GIFs) */}
              {/* On mobile: width is full. On desktop: width is 40% */}
              <div className="relative w-full md:w-[45%] aspect-video md:h-full">
                <img
                  src="/rangghar.png"
                  alt="Rangghar"
                  className="absolute bottom-0 left-0 object-contain w-full h-full z-10"
                />

                {/* Humans at the base */}
                <div className="absolute bottom-[1rem] left-0 flex flex-row items-end justify-center w-full h-fit z-20 px-[5%]">
                  <div className="w-[20%] h-auto">
                    <img src="/nasoni1.gif" alt="nasoni" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-[20%] h-auto">
                    <img src="/nasoni2.gif" alt="nasoni" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-[23%] h-auto">
                    <img src="/dhulia.gif" alt="dhulia" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-[23%] h-auto">
                    <img src="/pepa.gif" alt="pepa" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* 3. Content Section (Text Box) */}
              {/* On mobile: standard block. On desktop: relative/absolute positioning */}
              <div className="w-full md:w-[45%] flex flex-col items-center justify-center p-6 md:p-[3rem] border-4 md:border-8 border-[#FF6B6B] bg-[#ffffff] text-[#550E11] shadow-2xl">
                <div className="flex items-center justify-center mb-4">
                  <img src="/texttopabout.svg" className="h-auto w-full max-w-[250px]" alt="Welcome" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-moglan">About Us</h1>

                <p className="text-base md:text-lg font-alexbrush text-center leading-relaxed">
                  Posua, the whisper of spring that breathes life into our land,
                  a melody carried by the winds of tradition. It binds us in the
                  warmth of brotherhood, painting the air with the hues of our heritage.
                  A tribute to our roots, a celebration of identity—Posua is where culture finds its voice.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;