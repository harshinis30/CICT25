"use client"
import { useEffect, useState } from "react";

const ScrollFadeIn = ({children}) =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
            const element = document.getElementById("scroll-element");
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.75) {
                setIsVisible(true);
              }
            } 
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <div
        id="scroll-element"
        className={`transition-all duration-700 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {children}
      </div>
    );
}

export default ScrollFadeIn;