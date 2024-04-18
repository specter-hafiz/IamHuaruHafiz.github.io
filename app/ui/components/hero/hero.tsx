import Image from "next/image";
import Info from "./info";


export default function Hero() {
  return (
    <div className="mt-14  md:mt-[4rem] lg:mt-[5rem] w-full flex flex-col items-center lg:flex-row over">
      <div className="w-full xl:w-[50rem] h-[28rem] md:h-[26rem] hero bg-brown_dark relative overflow-hidden rounded-tl-[35px] rounded-br-[35px] rounded-[55px]">
        <div className="w-full h-[60rem] absolute z-[10] top-[-5rem] bottom-0 bg-brown_dark/50 backdrop-blur-[12px] rotate-[180deg] pointer-events-none">
          <Image
            src="/images/card-hello-background.png"
            fill={true}
            className="absolute top-[30%] blur-[1px] z-1"
            alt="hero"
          />
        </div>
       <Info/>
      </div>
    </div>
  );
}
