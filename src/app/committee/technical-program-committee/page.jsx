"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../components/ui/card";

import { TechnicalProgramCommittee } from "../../data/technical-program-committee";

export default function TechnicalCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Technical Program Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {TechnicalProgramCommittee.Members.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </main>
  );
}

function ProfileCard({ member }) {
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
          src={member.image}
          alt={member.name}
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
              href={member.socialLinks.facebook}
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
              href={member.socialLinks.twitter}
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
              href={member.socialLinks.instagram}
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
        <CardTitle className="text-primary">{member.name}</CardTitle>
        <CardDescription>{member.affiliation}</CardDescription>
      </CardContent>
    </Card>
  );
}
