"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useReducer, useState } from "react"
import ScrollToPlugin from "gsap/ScrollToPlugin"


interface ScrollState {
  id:number,target:string,isScroll:boolean
}

const initialScrollElement:Array<ScrollState> = [
  {
    id:0,
    target:'home',
    isScroll:false
  },
  {
    id:1,
    target:'projects',
    isScroll:false
  },
  {
    id:2,
    target:'contact',
    isScroll:false
  }
]

export default function Nav() {

  const [IsClose,setIsClose] = useState(false)


  const [scrollTo, dispatch] = useReducer(scrollReducer, initialScrollElement);

  function scrollReducer(state: ScrollState[], action: any) {
    switch (action.type) {
      case 'home':
      case 'projects':
      case 'contact': {
        setIsClose(false)
        return state.map(scrollState => ({
          ...scrollState,
          isScroll: scrollState.target === action.type
        }));
      }
      default:
        return state;
    }
  }
  

  function scrollToAction(target:string){
    dispatch({
      type:target,
    })
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
    scrollTo.forEach(target => {
      if (target.isScroll) {
        gsap.to(window, {
          scrollTo: {
            y: `.${target.target}-text`,
            offsetY:70
          }
        });
      }
    });
  }, [scrollTo]);
  

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
    opacity: IsClose ? 1 : 0,
    borderBottomLeftRadius: IsClose ? '0' : '70%',
    borderBottomRightRadius: IsClose ? '0' : '70%',
    duration: 0.3,
   })

   gsap.to('.navlinks ul',{
    visibility: IsClose ? 'visible' : 'hidden',
   })

   gsap.to('.navlinks ul li',{
     y:IsClose ? 0: 10,
     opacity:IsClose ? 1 :0,
     duration:0.3,
     delay:0.3,
     stagger:0.2
   })
 
  },[IsClose])





  
  return (
  <nav className="w-full mx-auto ">
     <div className="w-full flex  p-4 justify-end ">
        <div onClick={()=>setIsClose(!IsClose)}  className="size-14 p-2  navbar menu-bar rounded-full flex items-center justify-center cursor-pointer fixed z-[99]">
          <div className="flex flex-col items-end gap-2 menu">
            <span className="span-1 w-[2.3rem] h-[2px] bg-white rounded-lg"></span>
            <span className="span-2 w-[1.5rem] h-[2px] bg-white rounded-lg"></span>
          </div>
        </div>
    </div>
    <div  id="nav-blur" className="navlinks w-screen h-[100vh] navbar fixed z-[70] top-0 left-0 right-0 px-10 backdrop-blur-2xl opacity-0 ">
      <ul className="w-full 2xl:max-w-screen-xl mx-auto pt-24 px-4 lg:px-10">
        <li onClick={()=>scrollToAction('home')} className="nav-text-1  opacity-0 text-2xl lg:text-3xxl font-medium cursor-pointer ">Home</li>
        <li onClick={()=>scrollToAction('projects')} className="nav-text-2  opacity-0 text-2xl lg:text-3xxl font-medium cursor-pointer">Projects</li>
        <li onClick={()=>scrollToAction('contact')} className="nav-text-3  opacity-0 text-2xl lg:text-3xxl font-medium cursor-pointer">Contact</li>
      </ul>
    </div>
  </nav>
  )
}
