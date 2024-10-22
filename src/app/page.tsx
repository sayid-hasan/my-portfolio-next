"use client";
import ContactMe from "@/components/Contact/ContactMe";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

import { BiSolidContact } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { EducationTimeline } from "@/components/Education/EducationTimeline";

const navItems = [
  { name: "Home", link: "/", icon: <FaHome></FaHome> },
  { name: "About", link: "/#about", icon: <FcAbout /> },

  { name: "Skill", link: "/#skill", icon: <GrTechnology /> },
  {
    name: "Projects",
    link: "/#projects",
    icon: <GoProjectSymlink />,
  },

  {
    name: "Contact",
    link: "/#contact",
    icon: <BiSolidContact></BiSolidContact>,
  },
];

export default function Home() {
  const isClient = typeof window !== "undefined";

  if (!isClient) return null;

  return (
    <main
      id="main"
      className="relative bg-black-100 flex justify-center items-center sm:px-10 px-5 flex-col overflow-hidden mx-auto"
    >
      <div className="max-w-7xl w-full mb-10">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <Grid />
        <RecentProjects />
        <Skills />
        <EducationTimeline></EducationTimeline>

        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
