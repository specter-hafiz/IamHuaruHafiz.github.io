"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function Projects() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".projects-text", {
      scrollTrigger: {
        trigger: ".projects-text",
        start: "top 90%",
        end: "top 5%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
    });
  });

  return (
    <div className="w-full pt-24 ">
      <h1 className="w-full text-2xl xl:text-3xl font-medium projects-text translate-y-10 opacity-0">
        Projects
      </h1>
      <div className="w-full mt-12 flex flex-col items-center lg:flex-row  gap-2">
        <div className="w-full lg:w-[50%] h-[22rem] md:h-[30rem]  rounded-[10%] relative overflow-hidden flex items-center justify-center">
          <Image
            src="/images/photo_2024-04-28_07-05-03.jpg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            fill={true}
            alt="project"
            className="object"
          />
          <div
            className="w-[98%] md:w-[99%] absolute min-h-[30%] bg-gradient-to-b from-transparent to-white/60 backdrop-blur-[5px] bottom-1
         md:rounded-b-[50px] rounded-[35px] p-4 ">
            <div className="w-full flex justify-between ">
             <h1 className="font-medium text-xl">Calcript</h1>
              <div className="size-10 cursor-pointer bg-dark_violet/70 backdrop-blur-1 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/arrow.svg"
                  width={30}
                  height={24}
                  alt="arrow"
                />
              </div>
            </div>
            <p className="text-white/60 font-medium text-sm md:text-lg my-1">An intuitive Flutter calculator app designed <br /> for seamless mathematical calculations</p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-[22rem] md:h-[30rem]  rounded-[10%] relative overflow-hidden flex items-center justify-center p-2">
          <Image
            src="/images/photo_2024-04-28_07-05-09.jpg"
            fill={true}
            alt="project"
            className=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="w-[98%] md:w-[99%] absolute  min-h-[30%] bg-gradient-to-b from-transparent to-white/60 backdrop-blur-[5px] bottom-1
         md:rounded-b-[50px] rounded-[35px] p-4 ">
            <div className="w-full flex justify-between ">
             <h1 className="font-medium lg:text-xl">Dweather</h1>
              <div className="size-10 cursor-pointer bg-dark_violet/70 backdrop-blur-1 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/arrow.svg"
                  width={30}
                  height={24}
                  alt="arrow"
                />
              </div>
            </div>
            <p className="text-white/60 font-medium text-sm md:text-lg my-1">Flutter-based Wearther app delivering sleek and <br className="hidden lg:block"/> accurate weather forecasts at your fingertips.</p>
          </div>
          </div>
        </div>
      </div>
  );
}
