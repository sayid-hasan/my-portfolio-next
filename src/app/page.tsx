import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const navItems = [{ name: "Home", link: "/", icon: <FaHome></FaHome> }];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center sm:px-10 px-5 flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
      </div>
    </main>
  );
}
