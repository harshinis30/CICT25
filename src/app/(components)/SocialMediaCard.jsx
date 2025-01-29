"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./../../components/ui/card";

function SocialMediaCard({ patron }) {
    const [showIcons, setShowIcons] = useState(true);
  
    const handleImageClick = () => {
      setShowIcons(!showIcons); // Toggle icons for mobile view
      
    };
  
    return (
      <Card className="shadow-md">
        <div 
          className="relative group overflow-hidden"
          onMouseEnter={handleImageClick} // Mobile interaction
          onMouseLeave={handleImageClick} // Mobile interaction
          onClick={handleImageClick} // Mobile interaction
        >
          <img
            src={person.image}
            alt={person.title}
            className="w-full h-auto aspect-[4/3] object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
  
          <div
            className={`
              ${showIcons ? "hidden" : " absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-white/80 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"} 
            `}
          >
            <div className="flex space-x-4">
              <a
                href={person.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black"
              >
                <div className="rounded-full border-1 border-black flex justify-center items-center h-full">
                <img
                  src="/logos/facebook.png"
                  alt="Facebook Logo"
                  className="w-7 h-7 object-contain hover:scale-110 transition-transform duration-300 rounded-full"
                />
                </div>
              </a>
  
              <a
                href={person.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black"
              >
                <div className="rounded-full border-1 border-black flex justify-center items-center h-full">
                <img
                  src="/logos/twitter.png"
                  alt="Twitter Logo"
                  className="w-6 h-6 object-contain hover:scale-110 transition-transform duration-300 rounded-full"
                />
                </div>
              </a>
  
              <a
                href={person.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-1 border-black"
              >
                <div className="rounded-full border-2 border-black flex justify-center items-center h-full">
                <img
                  src="/logos/instagram.png"
                  alt="Instagram Logo"
                  className="w-6 h-6 object-contain hover:scale-110 transition-transform duration-300 rounded-full"
                />
                </div>
              </a>
            </div>
          </div>
        </div>
              
  
        {/* Card Content */}
        <CardContent className="text-center mt-4">
          <CardTitle className="text-primary">{person.title}</CardTitle>
          <CardDescription>{person.description}</CardDescription>
        </CardContent>
      </Card>
    );
  }

export default SocialMediaCard