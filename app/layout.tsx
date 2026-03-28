import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import LayoutChrome from "@/components/LayoutChrome";
import "./globals.css";
const moglan = localFont({
  src: "../public/fonts/Moglan_DEMO.ttf",
  variable: "--font-moglan",
});

const avita = localFont({
  src: "../public/fonts/Avita-Medium.otf",
  variable: "--font-avita",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posua 2026",
  description: " Posua, the whisper of spring that breathes life into our land,a melody carried by the winds of tradition.",
  icons: {
    icon: "/logoposua.png",
    shortcut: "/logoposua.png",
    apple: "/logoposua.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>

      <body

        className={`${geistSans.variable} ${geistMono.variable} ${moglan.variable} ${avita.variable} antialiased`}
        suppressHydrationWarning
      >
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
