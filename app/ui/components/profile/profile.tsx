import Image from "next/image";
import React from "react";
import Circle from "./circle";

export default function Profile() {
  return (
    <div className="w-full xl:mt-[5rem] xl:w-[32rem] h-[26rem] bg-amber-300 rounded-[35px] rounded-br-[57px] rounded-tl-[57px]  relative overflow-hidden">
      <div className="w-full h-full lg:w-[70%] xl:w-full lg:right-1 xl:right-0  absolute z-10 flex flex-col items-center justify-end bottom-[-3.5rem]">
        <Circle/>
      </div>
      <div className="w-[90%] h-full lg:w-[60%] lg:right-1 xl:right-0 bottom-[-2.2rem] z-[20] xl:w-[95%] absolute overflow-hidden">
        <Image
          src="/images/profile.png"
          fill={true}
          alt="profile"
          className="object-cover"
        />
      </div>
    </div>
  );
}
