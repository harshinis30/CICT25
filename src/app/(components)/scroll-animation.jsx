"use client";
import { useEffect, useState, useRef } from "react";

const ScrollFadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // Use ref to target each instance

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2; 
        const viewportCenter = window.innerHeight / 2; 

        if (Math.abs(elementCenter - viewportCenter) <= rect.height) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
