"use client";
import { skill } from "@/data/ProjectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import { BackgroundGradient } from "../ui/BackgroundGradient";

const Skills = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".skills__container",
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
    <div
      ref={container}
      id="skill"
      className="skills__container max-w-7xl mx-auto rounded-md font-oswald"
    >
      <div className="flex justify-center">
        {" "}
        <h2 className="primary__title text-4xl md:text-[55px] leading-[95px] text-center md:px-6 w-fit tracking-[2px] hover__underline text-purple mb-5">
          Skills & tools
        </h2>
      </div>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-5 md:gap-7">
        <div className="grid grid-cols-2 mt-5 md:auto-columns-[70px] md:grid-cols-4 lg:grid-cols-5 gap-5 w-full">
          {skill.map((item, index) => (
            <BackgroundGradient key={index}>
              <div
                className={` p-4 bg-black-100 rounded-3xl flex items-center justify-center shadow-md `}
              >
                <div>
                  <div className="animated_box_border  ">
                    <img
                      src={item.src}
                      className=" w-[60px] aspect-square z-10 object-cover  text-white"
                      alt=""
                    />
                  </div>
                  {/* text */}
                  <div className="font-oswald flex justify-center tracking-[2px] text-lg">
                    {item.name}
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
