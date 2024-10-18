import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center sm:px-10 px-5 flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Hero></Hero>
      </div>
    </main>
  );
}
