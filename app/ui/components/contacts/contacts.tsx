"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".contact-text", {
      scrollTrigger: {
        trigger: ".contact-text",
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
    <div className="w-full  mt-24">
      <h1 className="w-full text-2xl xl:text-3xl font-medium contact-text translate-y-10 opacity-0 my-4">
        Contacts
      </h1>
      <div className="w-full flex items-center flex-col xl:flex-row mt-10 gap-4">
        <div className="w-full lg:w-[70%] h-[28rem] lg:h-[24rem] relative overflow-hidden rounded-[45px] border-2 border-amber-900/15">
          <div className="w-full h-full absolute">
            <Image
              src="/images/card-skills-background (1).png"
              fill={true}
              alt="contact-bg"
            />
          </div>
          <div className="w-full h-full absolute p-8 flex  flex-col lg:flex-row">
            <div className=" w-full lg:w-[35%]">
              <h2 className="text-white/55 font-medium ">
                I'm constantly improving myself
              </h2>
              <h1 className="text-2xl lg:text-3xl font-medium my-2 ">
                Currently, I am <br className="lg:block hidden" /> learning
                Flutter.
              </h1>
              <h3 className="my-5 text-white/50 xl:mt-7">
                I am also learning TypeScript via my open source repos. Other
                than that, I also constantly practice web design.
              </h3>
            </div>
            <div className="w-full lg:w-[60%] h-full relative ">
              <h1 className="lg:text-center text-2xl font-medium">Stack</h1>
              <div className="flex items-center justify-center flex-wrap my-2">
                <Image
                  src="/icons/firebase.svg"
                  width={70}
                  height={70}
                  alt="firebase"
                />
                <Image
                  src="/icons/flutter.svg"
                  width={70}
                  height={70}
                  alt="flutter"
                />
                <Image src="/icons/git.svg" width={70} height={70} alt="git" />
                <Image
                  src="/icons/mysql.svg"
                  width={70}
                  height={70}
                  alt="mysql"
                />
                <Image
                  src="/icons/bloc.svg"
                  width={70}
                  height={70}
                  alt="bloc"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] h-[24rem]  rounded-[45px] relative flex flex-col items-center  contact-box overflow-hidden">
          <div className="w-[80%] pt-10 z-20">
            <h2 className="text-2xl lg:text-3xl  font-medium">Contact me</h2>
            <p className="my-2 text-sm text-white/70">
              Make a contact via <br /> email or twitter DMs.
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <Link
                href="mailto:adarkwagodfred7075@icloud.com"
                className="w-[4.5rem] h-[4rem] rounded-lg contact-small-box flex items-center justify-center cursor-pointer">
                <Image
                  src="/icons/alt.svg"
                  width={24}
                  height={24}
                  alt="email"
                />
              </Link>
              <Link
                href="https://x.com/_HuaruHafiz/"
                className="w-[4.5rem] h-[4rem] rounded-lg contact-small-box flex items-center justify-center cursor-pointer">
                <Image
                  src="/icons/twitter.svg"
                  width={24}
                  height={24}
                  alt="twitter"
                />
              </Link>
            </div>
          </div>
          <div className="w-[120%] h-full absolute bottom-[-4.5rem] lg:left-1 z-10">
            <Image
              src="/images/profile-svg.png"
              fill={true}
              alt="profile contact"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
