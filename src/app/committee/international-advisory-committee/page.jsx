"use client";

import React, { useState } from "react";
import ScrollFadeIn from "@/app/(components)/scroll-animation";

import { InternationalAdvisoryCommittee } from "@/app/data/international-advisory-committee";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function InternationalAdvisoryCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl text-blue-900 font-bold text-center mb-7">International Advisory Committee</h1>  
      <ScrollFadeIn>
      <div className="flex flex-wrap justify-center gap-8">
        {InternationalAdvisoryCommittee.ExpertsFromIndia.map((Indian, index) => (
          <SocialMediaCard key={index} person={Indian} />
        ))}
      </div>
      </ScrollFadeIn>
    </main>
  );
}


