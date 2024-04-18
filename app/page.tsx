import Image from "next/image";
import Hero from "./ui/components/hero/hero";
import Profile from "./ui/components/profile/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[6.5rem] sm:px-10 md:px-16 lg:px-[4rem] xl:px-[2rem] px-4 max-w-screen-xl mx-auto pb-10">
      <div className='w-full'>
      <h1 className="text-xl  text-center md:text-left md:text-2xl font-medium">Hafiz Muhammed Umar, <br className="md:hidden"/> <span className='text-cream_white/50'>Mobile Developer</span></h1>
      </div>
      <div className="w-full flex items-center flex-col xl:flex-row gap-4">
      <Hero/>
      <Profile/>
      </div>
    </main>
  );
}
