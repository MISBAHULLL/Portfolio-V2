"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Dynamic import untuk LightPillar (WebGL) - full screen background
const LightPillar = dynamic(() => import("@/components/ui/LightPillar"), {
  ssr: false,
});

// Dynamic import untuk TargetCursor (GSAP) - custom cursor
const TargetCursor = dynamic(() => import("@/components/ui/TargetCursor"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Custom Target Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      {/* Full Screen Light Pillar Background */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-0 bg-[#0a0015]">
        <LightPillar
          topColor="#9429ff"
          bottomColor="#ff9e9e"
          pillarWidth={4.0}
          pillarHeight={0.3}
          pillarRotation={25}
          glowAmount={0.004}
          intensity={0.8}
          mixBlendMode="color-dodge"
        />
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;


