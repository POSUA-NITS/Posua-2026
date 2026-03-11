"use client";
import React, { useState, useEffect } from "react";
import ArtistDesktop from "./ArtistDesktop";
import ArtistMobileView from "./ArtistMobileView";

export default function ArtistPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // Avoid SSR mismatch

  return isMobile ? <ArtistMobileView /> : <ArtistDesktop />;
}
