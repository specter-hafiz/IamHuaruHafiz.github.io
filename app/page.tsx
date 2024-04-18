import Image from "next/image";
import Hero from "./ui/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[6.5rem] sm:px-10 md:px-16 lg:px-24 px-4 ">
      <div className='w-full'>
      <h1 className="text-xl  text-center md:text-left md:text-2xl font-medium">Hafix Muhammed Umar, <span className='text-cream_white/50'>Mobile Developer</span></h1>
      </div>
      <Hero/>
    </main>
  );
}
