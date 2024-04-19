import Image from "next/image";
import Link from "next/link";

export default function Info() {

    const social:Array<{name:string,link:string,icon:string}> = [
        {
            name:'twitter',
            link:'https://x.com/_HuaruHafiz/',
            icon:"/icons/twitter.svg"
        },
        {
            name:'linkedin',
            link:'https://www.linkedin.com/in/hafiz-huaru-/',
            icon:"/icons/linkedin.svg"
        },
        {
            name:'github',
            link:'https://github.com/IamHuaruHafiz',
            icon:"/icons/github.svg"
        }

    ]




  return (
    <div className="w-full h-full absolute top-0 p-6 lg:p-12 z-20">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-4">
        <div className="w-full flex gap-6 items-center">
          <div className="size-12 relative overflow-hidden">
            <Image
              src="/images/card-hello-memoji.png"
              fill={true}
              alt="emoji"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">Hi,I'm Hafiz.</h1>
            <p className="text-md font-[400] text-white/50">Mobile Developer</p>
          </div>
        </div>
        <div className="w-full lg:w-auto flex gap-4">
          {social.map((item)=>(
            <Link href={item.link} key={item.name} className="box size-12 rounded-[10px] border-[1px] border-yellow-200/10 backdrop-blur-[4px] flex items-center justify-center cursor-pointer pointer-events-auto">
            <Image src={item.icon} width={24} height={24} alt="twitter"/>
         </Link>
          ))}
        </div>
      </div>
      <div className="w-full mt-5 md:mt-8 ">
        <h1 className="text-[2rem] md:text-[2.4rem] lg:text-[3rem] leading-tight  font-[500] hero-text">Driven by passion, crafting <br className="sm:block hidden"/> marvels
        <br id="small_device" className="hidden"/> in technology.</h1>
        <p className="my-6 text-md md:text-[1.2rem] font-[500] text-white/50">I enjoy learning new things and try to overcome new <br className="md:block hidden"/> challenges while analyzing how improved through them.</p>
      </div>
    </div>
  );
}
