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
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      cursor.style.left = posX + 'px';
      cursor.style.top = posY + 'px';
    };

    const handleClick = () => {
      setIsExpand(true);
      setTimeout(() => {
        setIsExpand(false);
      }, 100);
    };

    const handleScroll = () => {
      // No need to update cursor position on scroll with this approach
      // Cursor position will be automatically adjusted relative to the viewport
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


   
  return (
    <div ref={cursorRef}  className="cursor size-12 bg-white rounded-full fixed translate-x-[-50%] translate-y-[-50%] 
    pointer-events-none  mix-blend-difference  hidden md:block z-[100]"></div>
  )
}
