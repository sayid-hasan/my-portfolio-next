"use client";
import React, { useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaDownload,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profilePic from "../assets/images/Component 1.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// socila links
const social = [
  {
    name: "Facebook",
    icon: <FaFacebook></FaFacebook>,
    url: "https://www.facebook.com/sayid.hasan.560",
  },
  {
    name: "Email",
    icon: <FaEnvelope></FaEnvelope>,
    url: "mailto:syedhasanmohammad@gmail.com",
  },
  {
    name: "Github ",
    icon: <FaGithub></FaGithub>,
    url: "https://github.com/sayid-hasan",
  },
  {
    name: "LinkDn",
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/mohammed-syed-hasan",
  },
];
const Hero = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          duration: 1,
          opacity: 0.5,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
          transformOrigin: "center",
        }
      );

      const timeline = gsap.timeline();
      timeline
        .from(".subtitle", { opacity: 0 })

        .from(".description", { opacity: 0 })
        .from(".btn__group", {
          x: -40,
          opacity: 0,
          stagger: 0.25,
          duration: 1,
        });
    },
    { scope: container }
  );
  return (
    <div className="pb-20 pt-36 " ref={container}>
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
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-10 relative my-20 ">
        {/* text */}
        <div className="max-w-[89vw] md:max-w-2xl text-left lg:max-w-[60vw] flex flex-col items-center justify-center ">
          {/* sub heading */}
          <div className="uppercase  subtitle tracking-[2px] text-sm lg:text-left w-full text-blue-100 lg:max-w-full max-w-80 text-center font-oswald">
            Full Stack Web Developer
          </div>
          {/* NAME */}
          <TextGenerateEffect
            words="Hello There ! I'm Sayid Hasan"
            className="text-center lg:text-left text-[40px]  md:text-5xl lg:text-6xl font-oswald "
          ></TextGenerateEffect>
          {/* description */}
          <p className="tracking-wider description text-sm mb-4 mt-3 md:text-base lg:text-lg text-center md:text-left">
            I’m a passionate web developer based in the UAE, specializing in
            Full Stack (MERN). Dedicated to build innovative, user-focused
            websites that bring your ideas to life.
          </p>
          {/* Download cv and projects button */}
          <div className="flex justify-between lg:w-full items-center gap-5">
            <div className="text-left flex   md:flex-row gap-5">
              <a href="#project">
                <MagicButton
                  title={"show my work"}
                  icon={<FaLocationArrow />}
                  position="left"
                ></MagicButton>
              </a>
              <a
                href="https://docs.google.com/document/d/1krGrvW1JpOpXv7olJlCQBev0IY28UBf8zjeBOVaRR6Q/export?format=pdf"
                download="syed_Hasan_CV.pdf"
                target="_blank"
              >
                <MagicButton
                  title={"Download CV"}
                  icon={<FaDownload />}
                  position="left"
                ></MagicButton>
              </a>
            </div>
          </div>
          {/* social */}
          <div className=" flex justify-center gap-5  md:justify-start items-center py-3 mt-4 lg:w-full">
            {social.map((item, ind) => (
              <div key={ind} className="btn__group">
                {" "}
                <Link
                  href={item.url}
                  className=" w-12 h-12 border-[1px] border-[#8750f7] rounded-full flex justify-center items-center text-[#8750f7] text-lg hover:bg-[#8750f7] hover:text-white  social__button "
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* image/photo */}
        <div className="profile__photo__container md:w-1/2 relative  flex justify-center items-center  ">
          <motion.div>
            <motion.div className="w-[298px] h-[298px] md:w-[498px] md:h-[498px] mix-blend-lighten rounded-[50%] overflow-hidden ">
              <Image src={profilePic} className="object-contain z-20" alt="" />
            </motion.div>
            {/* CIRCLE */}
            <motion.svg
              className="w-[300px] md:w-[506px] h-[300px] md:h-[506px] absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              "
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#8750f7"
                strokeWidth={"4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.circle>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
