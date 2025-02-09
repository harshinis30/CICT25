"use client";

import React, { useState } from "react";
import ScrollFadeIn from "@/app/(components)/scroll-animation";

import { InternationalAdvisoryCommittee } from "@/app/data/international-advisory-committee";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function InternationalAdvisoryCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl text-blue-900 font-bold text-center mb-7">Advisory committee</h1>  
      <ScrollFadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-around gap-8">
        {InternationalAdvisoryCommittee.ExpertsFromIndia.map((Indian, index) => (
          <SocialMediaCard key={index} person={Indian} />
        ))}
      </div>
      </ScrollFadeIn>
    </main>
  );
}


