"use client";

import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ProfileCard from "./ProfileCard";

// Dynamic import untuk komponen 3D (Lanyard)
const Lanyard = dynamic(() => import("./Lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400">
      Loading 3D badge...
    </div>
  ),
});

const Hero = () => {
  const handleContactClick = () => {
    // Scroll ke section contact
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-20 pt-36 relative">

      {/* Main Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 relative my-20 z-10">
        {/* Kiri: ProfileCard + Lanyard 3D */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <ProfileCard
            name="Misbahul Munir"
            title="Data & Web Development"
            handle="misbahulmunir"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl="/fotoPorto.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            className="scale-75 lg:scale-90"
          />

          {/* Container untuk Lanyard 3D */}
          <div className="w-[350px] h-[500px] lg:w-[400px] lg:h-[550px] -mt-8 relative overflow-visible">
            <Lanyard 
              position={[0, 0, 30]} 
              fov={15} 
              gravity={[0, -40, 0]} 
              transparent={true} 
            />
          </div>
        </div>

        {/* Kanan: Text / Copywriting */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center lg:items-start justify-center">
          <p className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
            Data Analyst & Web Developer
          </p>

          <TextGenerateEffect
            words="Transforming Data into Powerful Web Experiences"
            className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Misbahul Munir, a data analyst and web developer based
            in Indonesia — combining data insights with modern web technologies
            to build meaningful digital solutions.
          </p>

          <a href="#about">
            <MagicButton
              title="View my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
