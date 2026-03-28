"use client";

import { usePathname } from "next/navigation";
import { SongProvider } from "@/components/providers/song-context";
import SongToggleButton from "@/components/SongToggleButton";
import PreLoader from "@/components/PreLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

type LayoutChromeProps = {
  children: React.ReactNode;
};

export default function LayoutChrome({ children }: LayoutChromeProps) {
  const pathname = usePathname();
  const hideChrome = pathname === "/" || pathname === "/preloader";

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SongProvider>
        <PreLoader>
          {!hideChrome && <Navbar />}
          {children}
          <SongToggleButton />
          {!hideChrome && <Footer />}
        </PreLoader>
      </SongProvider>
    </div>
  );
}
