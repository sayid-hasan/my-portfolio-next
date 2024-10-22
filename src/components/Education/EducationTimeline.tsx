import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/EducationTimeline";

export function EducationTimeline() {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Achieved a perfect GPA of 5.0 in SSC (Secondary School Certificate,
            Science Major) – Class of 2018
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/SSC-certificate.png" download="SSC-certificate.png">
              {" "}
              <Image
                src="/SSC-certificate.png"
                alt="SSC certificate"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="/SSC-transcript.png" download="SSC-transcript.png">
              {" "}
              <Image
                src="/SSC-transcript.png"
                alt="SSC transcript"
                width={500}
                height={500}
                className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated with distinction, earning a GPA of 5.0 in HSC (Higher
            Secondary Certificate, Science Major)
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a href="/HSC-certificate.png" download="HSC-certificate.png">
              {" "}
              <Image
                src="/HSC-certificate.png"
                alt="HSC certificate"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="/HSC-transcript.png" download="HSC-transcript.png">
              <Image
                src="/HSC-transcript.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>
              Embarking on a Journey in Programming and Web Development (2023 -
              Present)
            </strong>
            : Currently enhancing skills in programming and web development
            while working at Elite Mart Electrical Equipment since 2021. Earned
            Programming Hero Level 1 certification (April 2024) and preparing
            for the Level 2 course
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="/programing-hero-lv1.jpg"
              download="programing-hero-lv1.jpg"
            >
              <Image
                src="/programing-hero-lv1.jpg"
                alt="Level 1 course certificate"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="education" className="w-fit relative my-10">
      <Timeline data={data} />
    </div>
  );
}
