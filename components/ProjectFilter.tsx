"use client";

import React, { useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { PinContainer } from "./ui/Pin";

// Project type
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  category: string;
  githubLink?: string;  // Link ke repository GitHub
  liveLink?: string;    // Link ke live site
}

interface ProjectFilterProps {
  projects: Project[];
}

const ITEMS_PER_PAGE = 4;
const CATEGORIES = ["All", "Web Development", "Data & ML", "Blockchain"];

// Category colors matching project theme
const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  "All": { 
    bg: "rgba(203, 172, 249, 0.1)", 
    border: "#CBACF9", 
    text: "#CBACF9" 
  },
  "Web Development": { 
    bg: "rgba(59, 130, 246, 0.1)", 
    border: "#3B82F6", 
    text: "#3B82F6" 
  },
  "Data & ML": { 
    bg: "rgba(16, 185, 129, 0.1)", 
    border: "#10B981", 
    text: "#10B981" 
  },
  "Blockchain": { 
    bg: "rgba(245, 158, 11, 0.1)", 
    border: "#F59E0B", 
    text: "#F59E0B" 
  },
};

const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Animate cards out and in
  const animateTransition = useCallback((callback: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const items = itemsRef.current?.querySelectorAll(".project-item");
    if (!items || items.length === 0) {
      callback();
      setIsAnimating(false);
      return;
    }

    // Animate out
    gsap.to(items, {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        callback();
        // Animate in after state update
        requestAnimationFrame(() => {
          const newItems = itemsRef.current?.querySelectorAll(".project-item");
          if (newItems && newItems.length > 0) {
            gsap.fromTo(
              newItems,
              { opacity: 0, scale: 0.9, y: 20 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "power2.out",
                onComplete: () => setIsAnimating(false),
              }
            );
          } else {
            setIsAnimating(false);
          }
        });
      },
    });
  }, [isAnimating]);

  // Handle filter change
  const handleFilterChange = (category: string) => {
    if (category === activeFilter || isAnimating) return;

    animateTransition(() => {
      setActiveFilter(category);
      setCurrentPage(0);
    });
  };

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages || isAnimating) return;

    animateTransition(() => {
      setCurrentPage(newPage);
    });
  };

  return (
    <div ref={containerRef} className="w-full relative z-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((category) => {
          const isActive = activeFilter === category;
          const colors = categoryColors[category];
          
          return (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className="cursor-target relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2"
              style={{
                backgroundColor: isActive ? colors.bg : "transparent",
                borderColor: isActive ? colors.border : "rgba(255,255,255,0.2)",
                color: isActive ? colors.text : "rgba(255,255,255,0.7)",
                boxShadow: isActive ? `0 0 20px ${colors.border}40` : "none",
              }}
            >
              {category}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.border}20, transparent)`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div
        ref={itemsRef}
        className="flex flex-wrap items-center justify-center p-4 gap-16"
      >
        {paginatedProjects.map((item) => (
          <div
            key={item.id}
            className="project-item lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            data-category={item.category}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 group/card">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
                
                {/* GitHub Overlay - muncul saat hover */}
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 lg:rounded-3xl"
                  >
                    <div className="flex flex-col items-center gap-3 transform scale-90 group-hover/card:scale-100 transition-transform duration-300">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-purple hover:bg-purple/20 transition-all">
                        <img src="/git.svg" alt="GitHub" className="w-8 h-8 lg:w-10 lg:h-10" />
                      </div>
                      <span className="text-white text-sm lg:text-base font-medium">View on GitHub</span>
                    </div>
                  </a>
                )}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-2">
                  {/* Tech Stack Icons */}
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Site Link */}
                {item.liveLink ? (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:opacity-80 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                ) : (
                  <div className="flex justify-center items-center opacity-50">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Coming Soon
                    </p>
                  </div>
                )}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-20">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="cursor-target flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: currentPage === 0 ? "rgba(255,255,255,0.1)" : "#CBACF9",
              color: currentPage === 0 ? "rgba(255,255,255,0.3)" : "#CBACF9",
              backgroundColor: currentPage === 0 ? "transparent" : "rgba(203, 172, 249, 0.1)",
            }}
          >
            <FaChevronLeft size={12} />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className="cursor-target w-10 h-10 rounded-full font-medium text-sm transition-all duration-300"
                style={{
                  backgroundColor: currentPage === i ? "#CBACF9" : "rgba(255,255,255,0.1)",
                  color: currentPage === i ? "#000" : "rgba(255,255,255,0.7)",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="cursor-target flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              borderColor: currentPage === totalPages - 1 ? "rgba(255,255,255,0.1)" : "#CBACF9",
              color: currentPage === totalPages - 1 ? "rgba(255,255,255,0.3)" : "#CBACF9",
              backgroundColor: currentPage === totalPages - 1 ? "transparent" : "rgba(203, 172, 249, 0.1)",
            }}
          >
            Next
            <FaChevronRight size={12} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
