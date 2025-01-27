"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../../../components/ui/card";

import { Patrons } from "../../data/committee";

export default function PatronsPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Patrons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Patrons.Patrons.map((patron, index) => (
          <Card key={index} className="shadow-md">
            <div className="relative group overflow-hidden">
              <img
                src={patron.image}
                alt={patron.title}
                className="w-full h-auto aspect-[4/3] object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 bg-white/80 transition-opacity duration-500"
              >
                <div className="flex space-x-4">
                  <a
                    href={patron.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10"
                  >
                    <img
                      src="/logos/facebook.jpg"
                      alt="Facebook Logo"
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href={patron.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10"
                  >
                    <img
                      src="/logos/twitter.jpg"
                      alt="Twitter Logo"
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href={patron.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10"
                  >
                    <img
                      src="/logos/instagram.jpg"
                      alt="Instagram Logo"
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
            <CardContent className="text-center mt-4">
              <CardTitle className="text-primary mb-2">{patron.title}</CardTitle>
              <CardDescription>{patron.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
