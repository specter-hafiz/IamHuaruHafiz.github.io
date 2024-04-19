"use client"

import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react"


export default function Circle() {
   
    useGSAP(()=>{
     gsap.to('.circle',{
        scale:1.1,
        opacity:0.8,
        repeat:-1,
        duration:5,
        stagger:0.4,
        yoyo:true,
     })
    })

  return (
    <div className="w-[28rem] h-[43rem] bg-white/10 blur-[1px] circle rounded-full flex items-center justify-center">
    <div className="w-[24rem] h-[22rem] bg-white/30 blur-[1px] circle rounded-full flex items-center justify-center">
      <div className="w-[20rem] h-[18rem] bg-white/50 blur-[1px] circle rounded-full flex items-center justify-center">
      <div className="w-[16rem] h-[14rem] bg-white blur-[1px] circle rounded-full flex items-center justify-center"></div>
      </div>
    </div>
  </div>
  )
}
