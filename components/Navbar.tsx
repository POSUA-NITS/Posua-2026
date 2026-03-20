"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Artist", path: "/artist" },
  ];

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-[1150px] mx-auto flex items-center justify-between px-6 py-4 font-gotham">

        {/* Logo */}
        <img
          src="/photos/posualoader 1.png"
          alt="Posua Logo"
          className="h-16 w-auto"
        />

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