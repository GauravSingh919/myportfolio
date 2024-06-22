"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center md:py-20"
    >
      <h1 className="font-semibold text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full h-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cinepolis.png"
          title="Cinepolis India"
          description="Experience the latest blockbuster movies at Cinépolis India, your go-to cinema for newly released films and the best of Bollywood, Hollywood and regional movies."
          url="https://www.cinepolisindia.com"
        />
        <ProjectCard
          src="/RonyIphone.png"
          title="Rony Buys iPhone"
          description="Sell Your Device In Few Clicks"
          url="https://www.cinepolisindia.com"
        />
        <ProjectCard
          src="/enpointe.png"
          title="Enpointe Website"
          description="Empower your business with our innovative cloud and digital technology services. Achieve new heights through scalable solutions, seamless integration, and expert guidance."
          url="https://www.cinepolisindia.com"
        />
      </div>
    </div>
  );
};

export default Projects;
