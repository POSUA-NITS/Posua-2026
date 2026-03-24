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
          <img src="/jaapi-removebg-preview.png" alt="Jaapi" className="jaapi object-cover w-[40rem] h-[40rem]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000038] flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center absolute top-[20%] left-[10%] w-[80%] h-[60%]">
            <div className="absolute top-0 left-0 w-[40%] h-[80%]">
              <img src="/rangghar.png" alt="Rangghar" className="absolute bottom-0 left-0 object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 flex flex-row items-end justify-center w-full h-fit z-20 px-[5%]">
                {/* 3. Wrap GIFs to control individual size relative to Rangghar */}
                <div className="w-[25%] h-auto">
                  <img src="/nasoni1.gif" alt="Kokal bhangi bhangi" className="w-full h-full object-contain" />
                </div>
                <div className="w-[25%] h-auto">
                  <img src="/nasoni2.gif" alt="aijyoi kolija" className="w-full h-full object-contain" />
                </div>
                <div className="w-[28%] h-auto">
                  <img src="/dhulia.gif" alt="Dhulia" className="w-full h-full object-contain" />
                </div>
                <div className="w-[28%] h-auto">
                  <img src="/pepa.gif" alt="pepa" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[60%] h-[80%] flex flex-col items-start justify-center px-[5%]">
              <h1 className="text-5xl font-bold text-[#000000] mb-4">Welcome to Posua 2026</h1>
              <p className="text-lg text-[#000000]">
                Experience the vibrant culture of Assam at Posua 2026! Join us for a celebration of music, dance, and tradition in the heart of Assam. Don't miss out on this unforgettable event!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;