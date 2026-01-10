"use client";

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
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
};

export default RecentProjects;

