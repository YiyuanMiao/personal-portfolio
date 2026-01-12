"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIChat from "@/components/AIChat";
import PhotoBook from "@/components/PhotoBook";
import SongPlayer from "@/components/SongPlayer";
import NavBar from "@/components/NavBar";
import Load from "@/components/sub/Load";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [id, setID] = useState("0");
  const compsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setID(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 30% in viewport before we call the function
    );

    const compsArr = Array.from(compsRef.current.children); // detect when elements enter or leave viewport
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <div className="bg-azuwhite">
      <Load />
      <NavBar id={id} />
      <div
        ref={compsRef}
        className="ml-[70px] flex flex-col gap-y-10 md:gap-y-20 overflow-x-hidden"
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <PhotoBook />
        <SongPlayer />
        <AIChat />
      </div>
    </div>
  );
}
