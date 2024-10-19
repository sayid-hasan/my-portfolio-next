import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

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
        "grid md:auto-rows-[12rem] grid-cols-1  md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto ",
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
  return (
    <div
      className={cn(
        "row-span-1  rounded-3xl relative font-oswald group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 border-red-500 overflow-hidden ",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%",
      }}
    >
      <div className={`${id === 6} && "flex  justify-center h-full `}>
        {/* id 1 AND FIVE */}
        <div className="w-full h-full absolute top-0 left-0 ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            ></img>
          )}
        </div>
        {/* ID == FIVE and if spare img is available*/}
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
            <div className="flex justify-center items-center z-10 absolute text-white-100 font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        {/* title */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300 tracking-[2px]">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 tracking-[1px] ${
              id === 4 && "md:absolute"
            }`}
          >
            {title}
          </div>
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200"></div>
    </div>
  );
};
