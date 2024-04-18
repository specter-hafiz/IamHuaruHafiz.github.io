"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState,useEffect , useRef } from "react";



export default function Cursor() {
  
  const [isExpand,setIsExpand] = useState(false)
  useGSAP(() => {
    gsap.to(".cursor", 
    { scale: isExpand ? 3 : 1,
       opacity: isExpand ? 0.5 : 1,
       yoyo: true, 
       duration: 0.1 
      });
  }, [isExpand]);

  const cursorRef = useRef<HTMLDivElement | null>(null); // Use useRef with null as initial value
  useEffect(() => {
    const cursor = cursorRef.current; // Access cursor element safely
    if (!cursor) return; // Handle potential null case gracefully
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    };
    const handleClick = () => {
      setIsExpand(true)
      setTimeout(() => {
        setIsExpand(false)
      }, 100);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      // Cleanup function: Remove event listeners when component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);


   
  return (
    <div ref={cursorRef}  className="cursor size-12 bg-white rounded-full fixed translate-x-[-50%] translate-y-[-50%] 
    pointer-events-none  mix-blend-difference  hidden md:block z-[100]"></div>
  )
}
