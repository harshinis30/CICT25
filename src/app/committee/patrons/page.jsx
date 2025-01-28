"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../components/ui/card";

import { Patrons } from "../../data/patrons";

export default function PatronsPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Patrons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Patrons.Patrons.map((patron, index) => (
          <SocialMediaCard key={index} patron={patron} />
        ))}
      </div>
    </main>
  );
}

function SocialMediaCard({ patron }) {
  const [showIcons, setShowIcons] = useState(false);

  const handleImageClick = () => {
    setShowIcons(!showIcons); // Toggle icons for mobile view
  };

  return (
    <Card className="shadow-md">
      <div 
        className="relative group overflow-hidden"
        onClick={handleImageClick} // Mobile interaction
      >
        <img
          src={patron.image}
          alt={patron.title}
          className="w-full h-auto aspect-[4/3] object-contain transform group-hover:scale-110 transition-transform duration-500"
        />

        <div
          className={`
            absolute inset-0 flex flex-col items-center justify-center space-y-4 
            bg-white/80 transition-opacity duration-500
            ${showIcons ? "opacity-100" : "opacity-0"} 
            md:opacity-0 md:group-hover:opacity-100
          `}
        >
          <div className="flex space-x-4">
            <a
              href={patron.socialLinks.facebook}
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
              href={patron.socialLinks.twitter}
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
              href={patron.socialLinks.instagram}
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
        <CardTitle className="text-primary">{patron.title}</CardTitle>
        <CardDescription>{patron.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

