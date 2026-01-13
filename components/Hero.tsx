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

          <div className="flex flex-col sm:flex-row items-end gap-4">
            <a href="#about">
              <MagicButton
                title="View my projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/MISBAHULLL"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200/50 rounded-xl border border-white/[0.1] transition-all duration-300 hover:scale-110 hover:border-purple/50 hover:shadow-[0_0_20px_rgba(148,41,255,0.3)]"
                title="GitHub"
              >
                <img src="/git.svg" alt="GitHub" width={24} height={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/misbahul-munir-da"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200/50 rounded-xl border border-white/[0.1] transition-all duration-300 hover:scale-110 hover:border-purple/50 hover:shadow-[0_0_20px_rgba(148,41,255,0.3)]"
                title="LinkedIn"
              >
                <img src="/link.svg" alt="LinkedIn" width={24} height={24} />
              </a>

              {/* CV Download */}
              <a
                href="https://drive.google.com/drive/folders/12slijGm0YgQKhwpILpiZq1GyfazRwHHT?usp=sharing" // Ganti dengan link Google Drive CV Anda
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target flex items-center gap-2 px-4 h-12 backdrop-filter backdrop-blur-lg bg-black-200/50 rounded-xl border border-white/[0.1] transition-all duration-300 hover:scale-105 hover:border-purple/50 hover:shadow-[0_0_20px_rgba(148,41,255,0.3)] text-white text-sm font-medium"
                title="Download CV"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
