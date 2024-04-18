"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"

export default function Nav() {

  const [IsClose,setIsClose] = useState(false)

  useGSAP(()=>{
    gsap.to(".menu .span-1",{
       width: IsClose ? "2rem" : "2.3rem",
      rotate: IsClose ? 45 : 0,
      y: IsClose ? 5 : 0,
      ease: "power1.out",
      duration: 0.1,
      yoyo: true
    })
    gsap.to(".menu .span-2",{
      width: IsClose ? "2rem" : "1.5rem",
      rotate: IsClose ? -45 : 0,
      y: IsClose ? -4 : 0,
      ease: "power1.out",
      duration: 0.1,
      yoyo: true
    })

    
   gsap.to(".navlinks",{
    height: IsClose ? "100vh" : 0,
    borderBottomLeftRadius: IsClose ? '0' : '70%',
    borderBottomRightRadius: IsClose ? '0' : '70%',
    duration: 0.3,
   })

   gsap.to('.navlinks ul',{
    visibility: IsClose ? 'visible' : 'hidden',
   })
 
  },[IsClose])

  
  return (
  <>
     <div className="w-full flex  p-4 justify-end ">
        <div onClick={()=>setIsClose(!IsClose)}  className="size-14 p-2  navbar rounded-full flex items-center justify-center cursor-pointer fixed z-[99]">
          <div className="flex flex-col items-end gap-2 menu">
            <span className="span-1 w-[2.3rem] h-[2px] bg-white rounded-lg"></span>
            <span className="span-2 w-[1.5rem] h-[2px] bg-white rounded-lg"></span>
          </div>
        </div>
    </div>
    <div className="navlinks w-full navbar fixed z-[50] top-0  px-10 backdrop-blur-[40px]">
      <ul className="w-full">
        <li>Hello</li>
      </ul>
    </div>
  </>
  )
}
