"use client";

import React, { useState } from "react";


import { CFIIITSSteeringCommittee } from "@/app/data/cfiiits-steering-committee";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function CFIIITSSteeringCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-20">CFIIITs Steering Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {CFIIITSSteeringCommittee.Members.map((member, index) => (
          <SocialMediaCard key={index} person={member} />
        ))}
      </div>
    </main>
  );
}


