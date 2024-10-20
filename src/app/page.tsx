import ContactMe from "@/components/Contact/ContactMe";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const navItems = [{ name: "Home", link: "/", icon: <FaHome></FaHome> }];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center sm:px-10 px-5 flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full mb-10">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <Grid />
        <RecentProjects />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
