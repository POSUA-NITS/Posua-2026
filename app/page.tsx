"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Landing = () => {
  // 1. Refs for moving layers (Removed flowers from here)
  const mountainRef = useRef(null);
  const sunRef = useRef(null);
  const cloudRef = useRef(null);
  const treeRef = useRef(null);
  const bambooRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div 
      className="relative top-0 left-0 flex flex-col items-center justify-center w-screen overflow-hidden min-h-screen py-2"
      // Removed perspective: "1000px" as we are now in 2D
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
      <div className="absolute top-0 left-0 w-screen h-screen bg-[#ffffff14]">
        <div className="flex flex-col items-center h-full w-full justify-center">
          <img src="/logoposua.png" alt="logo" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Landing;