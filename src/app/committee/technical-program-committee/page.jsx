"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../components/ui/card";

import { TechnicalProgramCommittee } from "../../data/technical-program-committee";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function TechnicalCommitteePage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl font-bold text-blue-900 text-center mb-10">Technical Program Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {TechnicalProgramCommittee.Members.map((member, index) => (
          <SocialMediaCard key={index} person={member} />
        ))}
      </div>
    </main>
  );
}
