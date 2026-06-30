import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import CursorTrail from "@/components/CursorTrail";
import GrainOverlay from "@/components/GrainOverlay";
import MusicPlayer from "@/components/MusicPlayer";
import CatchGame from "@/components/CatchGame";
import PersonalNudge from "@/components/PersonalNudge";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar Singh",
  description: "Software engineer. Building things for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <Providers>
          <CursorTrail />
          <GrainOverlay />
          <Navbar />
          {children}
          <MusicPlayer />
          <CatchGame />
          <PersonalNudge />
        </Providers>
      </body>
    </html>
  );
}
