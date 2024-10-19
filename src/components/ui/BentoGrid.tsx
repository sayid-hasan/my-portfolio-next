"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-1  md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  description,
  className,

  id,
  title,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string | React.ReactNode;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("syedhasanmohammad@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1  rounded-3xl relative font-oswald group/bento hover:shadow-xl transition-all duration-200 shadow-input dark:shadow-none     justify-between flex flex-col space-y-4 border border-white/[0.1] overflow-hidden ",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%",
      }}
    >
      <div
        className={`${
          id === 6 &&
          "flex flex-col gap-1  justify-center items-center box-border"
        } h-full `}
      >
        {/* id 1 AND 5 */}
        <div className="w-full h-full absolute top-0 left-0 ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            ></img>
          )}
        </div>
        {/* ID == 5 and if spare img is available*/}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full`}
            ></img>
          )}
        </div>
        {/* for id ==6  animated  bg from acertinity ui */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="flex justify-center items-center z-10 absolute top-0 left-0 text-white-100 font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        {/*inside content card */}
        <div
          className={cn(
            titleClassName,
            "transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          {/* descript */}
          <div className="font-sans group-hover/bento:translate-x-2 transition duration-200  font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300 tracking-[2px]">
            {description}
          </div>
          {/* title */}
          <div
            className={`font-sans font-bold group-hover/bento:translate-x-2 text-lg md:text-2xl lg:text-2xl max-w-96 z-10 tracking-[1px] transition duration-200  ${
              id === 4 && "md:absolute top-5 "
            } ${id === 6 && "md:text-xl  relative lg:top-5 md:top-3 "}`}
          >
            {title}
          </div>
          {/* id 2 globe */}
          {id === 2 && <GlobeDemo></GlobeDemo>}
          {/* id 3 techstack */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-5 w-fit absolute -right-3 lg:-right-2  group-hover/bento:translate-x-2 transition duration-200">
              <div className="flex flex-col gap-3 lg:gap-5">
                {["React.Js", "Next.Js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3
                               text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["Node.Js", "MongoDB", "AWS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3
                               text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* /* for id 6 to copy our email to viewer */}
          {id === 6 && (
            <div className="mt-5  relative  md:mt-0 md:mb-5 group-hover/bento:translate-x-2 transition duration-200 ">
              <div className="absolute bottom-10 right-0 ">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherclasses="!bg-[#161a31]   "
                handleClick={handleCopy}
              ></MagicButton>
            </div>
          )}
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200"></div>
    </div>
  );
};
