"use client";

import { Suspense } from "react";
import { projects } from "@/data";
import ProjectFilter from "./ProjectFilter";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      
      <div className="mt-10">
        {/* Suspense boundary required for useSearchParams in Next.js 14 */}
        <Suspense fallback={<div className="text-center text-white/50">Loading projects...</div>}>
          <ProjectFilter projects={projects} />
        </Suspense>
      </div>
    </div>
  );
};

export default RecentProjects;

