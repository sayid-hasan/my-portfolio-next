"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "@/data/ProjectsData";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const RecentProjects = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".projects-container",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="py-20 projects-container" id="projects" ref={container}>
      <h1 className="heading">
        A small portion of my works <br />
        <span className="text-purple">Recent Projects</span>
      </h1>
      {/* cards container */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 relative  gap-5 mt-10 p-4">
        {projects.map(({ title, image, data, stack, id }) => (
          <ProjectCard
            key={id}
            title={title}
            image={image}
            data={data}
            stack={stack}
            id={id}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
