"use client";

import React, { useState } from "react";


import { InternationalAdvisoryCommittee } from "@/app/data/international-advisory-committee";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function InternationalAdvisoryCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl text-blue-900 font-bold text-center mb-7">International Advisory Committee</h1>
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">Experts from India</h2>    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
        {InternationalAdvisoryCommittee.ExpertsFromIndia.map((Indian, index) => (
          <SocialMediaCard key={index} person={Indian} />
        ))}
      </div>
    </main>
  );
}


