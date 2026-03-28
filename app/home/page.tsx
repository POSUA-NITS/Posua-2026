"use client";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import TributePage from "@/components/Home/Tribute";
import InvitationSection from "@/components/Home/InvitationSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TributePage />
      <InvitationSection />
    </main>
  );
};

export default HomePage;
