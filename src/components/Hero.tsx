import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* SPOTLIGHT */}
      <Spotlight
        className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen "
        fill="white"
      ></Spotlight>
      <Spotlight
        className="top-10 left-full w-[50vw] h-[80vh] "
        fill="purple"
      ></Spotlight>
      <Spotlight
        className="top-28 left-80 w-[50vw] h-[80vh]"
        fill="blue"
      ></Spotlight>
      {/* GRID BG */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* content */}
      <div className="flex justify-center relative my-20 ">
        {/* text */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          {/* sub heading */}
          <h2 className="uppercase tracking-[2px] text-sm text-left text-blue-100 max-w-80 font-oswald">
            Full Stack Web Developer
          </h2>
          {/* NAME */}
          <TextGenerateEffect
            words="Hello There ! I'm Sayid Hasan"
            className="text-left text-[40px]  md:text-5xl lg:text-6xl font-oswald "
          ></TextGenerateEffect>
          {/* description */}
          <p className="tracking-wider text-sm mb-4 mt-3 md:text-base lg:text-lg">
            I’m a passionate web developer based in the UAE, specializing in
            Full Stack (MERN). Dedicated to build innovative, user-focused
            websites that bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
