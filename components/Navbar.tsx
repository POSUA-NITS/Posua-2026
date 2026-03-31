"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
     { name: "Team", path: "/team" },
    //  { name: "Sponsors", path: "/sponsors" },
    { name: "Artist", path: "/artist" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrollingUp(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsVisible(true);
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const stickClass = isVisible ? "translate-y-0" : "-translate-y-full";
  const blurClass = isScrollingUp ? "backdrop-blur-md bg-white/60 border-b border-white/40 shadow-lg" : "bg-transparent";

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${stickClass} ${blurClass}`}>
      <div className="max-w-[1150px] mx-auto flex items-center justify-between px-6 py-4 font-gotham">
        {/* Logo */}
        <Link href="/" aria-label="Go to landing page" className="shrink-0">
          <Image
            src="/logoposua.png"
            alt="Posua Logo"
            width={180}
            height={90}
            priority
            className="h-12 w-auto sm:h-14 md:h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[18px] text-[#6b1c1c]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative pb-1 hover:text-red-600 transition"
            >
              {item.name}

              {pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-[#6b1c1c]"></span>
          <span className="w-6 h-[2px] bg-[#6b1c1c]"></span>
          <span className="w-6 h-[2px] bg-[#6b1c1c]"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white text-[#6b1c1c] text-lg shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="relative"
            >
              {item.name}

              {pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600"></span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
