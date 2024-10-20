"use client";
import Link from "next/link";
import React, { useState } from "react";

import "./projectcard.css";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  data,
  stack,
}: {
  id: number;
  title: string;
  image: string;

  data: {
    description: string;
    demoLink: string;
    githubLink: string;
  };
  stack: Array<{
    name: string;
    icon: JSX.Element;
    iconColor: string;
  }>;
}) => {
  const [openStackExpandbar, setOpenStackExpandbar] = useState(false);
  return (
    <div className="project__card p-0 rounded-md bg-[#b4b9bc19] border-[1px] border-solid border-[#83868726] overflow-hidden flex items-stretch flex-col justify-between transition-all duration-300  font-oswald">
      <div className="picture">
        <img src={image} alt={title} />
      </div>
      <div className="project__card__details flex-1 text-left p-4 flex justify-between flex-col">
        <div className="details__top border-none">
          <h2 className="title">{title}</h2>
        </div>
        <div className="details__middle p-4  border-b-[1px] border-solid border-[#83868726] h-[160px] overflow-x-hidden overflow-y-auto ">
          <p className="description text-sm">{data?.description}</p>
        </div>
        <div className="details__bottom py-4 px-0 flex-1 flex flex-col justify-between">
          <div className="stack__container flex-1 flex justify-start gap-4">
            <div className="stack__left border-[#83868726] border-[1px] px-2 py-1 rounded-md bg-[#b4b9bc19] flex items-center ">
              Stack
            </div>
            <div className="stack__right flex-1">
              <div className="stack__box__container ">
                {stack.map((list, ind) => {
                  if (ind < 4) {
                    return (
                      <>
                        <div className="stack__box flex flex-col justify-center items-center">
                          <div className="stack__icon__container flex flex-col items-center">
                            <span className="stack__icon text-2xl text-center text-[#8750fd]">
                              {list?.icon}
                            </span>
                            <span className="stack__name text-center">
                              {list?.name}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
              {stack.length > 4 ? (
                <>
                  <div className="stack__view__more  ">
                    <div
                      className="more__btn"
                      onClick={() => setOpenStackExpandbar(!openStackExpandbar)}
                    >
                      more
                    </div>
                    <div
                      className={`stack__expand__box ${
                        openStackExpandbar ? "open__stack__expand__box" : ""
                      }`}
                    >
                      <h3 className="title">More Stack Used</h3>
                      <div className="stack__box__container">
                        {stack.map((list, ind) => {
                          if (ind >= 4) {
                            return (
                              <>
                                <div className="stack__box flex flex-col justify-center items-center">
                                  <div className="stack__icon__container flex flex-col items-center">
                                    <span className="stack__icon text-2xl text-center text-[#8750fd]">
                                      {list?.icon}
                                    </span>
                                    <span className="stack__name text-center">
                                      {list?.name}
                                    </span>
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="button__container mt-4 flex items-center justify-between">
            <Link
              href={data?.demoLink}
              target="_blank"
              className="btn rounded-full border-none outline-none transition-all duration-1000 bg-gradient-to-tr from-[#1c1405c5] to-[#8750f7] hover:bg-gradient-to-bl w-20 flex justify-center items-center"
            >
              Demo
            </Link>
            <Link
              href={data?.githubLink}
              className="btn__share border-[1px] border-transparent transition-all duration-300 w-[2.5rem] flex justify-center items-center aspect-square rounded-full hover:bg-[#b4b9bc19] hover:border-[#83868726]"
            >
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
