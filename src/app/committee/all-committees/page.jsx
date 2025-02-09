"use client";

import React from "react";

import { Patrons } from "@/app/data/patrons";
import { GeneralChair } from "@/app/data/general-chair";
import { InternationalAdvisoryCommittee } from "@/app/data/international-advisory-committee";
import { CFIIITSSteeringCommittee } from "@/app/data/cfiiits-steering-committee";
import { TechnicalProgramCommittee } from "@/app/data/technical-program-committee";
import { OrganizingChairs } from "@/app/data/organizing-chairs";

const CommitteeSection = ({ title, members }) => (
  <div className="gap-8">
    <h2 className="text-2xl font-bold text-blue-900 mb-2">{title}</h2>
    <ul className="list-disc list-inside">
      {members && members.map((member, index) => (
        <li key={index} className="text-base text-gray-600">
          {member.title}
        </li>
      ))}
    </ul>
    <div className="mb-8"></div>
  </div>
);

export default function AllCommitteesPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl text-blue-900 font-bold text-center mb-7">Committees and List of Experts</h1>
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">CICT-2025: Ninth IEEE,IIITDM Kancheepuram</h2>
      <CommitteeSection title="Patrons" members={Patrons.Patrons} />
      <CommitteeSection title="General Chair" members={GeneralChair.Members} />
      <CommitteeSection title="International Advisory Committee" members={InternationalAdvisoryCommittee.ExpertsFromIndia} />
      <CommitteeSection title="CFIIITS Steering Committee" members={CFIIITSSteeringCommittee.Members} />
      <CommitteeSection title="Technical Program Committee" members={TechnicalProgramCommittee.Members} />
      {/* Have to fix the below */}
      {/*Fixed. You are welcome*/}
      <CommitteeSection title="Organizing Chairs" members={OrganizingChairs.OrganizingChairs[0].members} /> 
    </main>
  );
}
