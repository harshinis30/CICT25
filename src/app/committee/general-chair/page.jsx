"use client";

import React, { useState } from "react";


import { GeneralChair } from "@/app/data/general-chair";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function GeneralChairPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-20">General Chair</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        {GeneralChair.Members.map((member, index) => (
          <SocialMediaCard key={index} person={member} />
        ))}
      </div>
    </main>
  );
}


