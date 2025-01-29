"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { speakers } from "@/app/data/speakers";

const Page = () => {
  const speakerRefs = useRef({});

  const scrollToDetails = (id) => {
    if (speakerRefs.current[id]) {
      speakerRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Keynote Speakers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {speakers.map((speaker) => (
          <Card
            key={speaker.id}
            className="p-4 shadow-lg rounded-2xl bg-[#f7fafc] hover:shadow-2xl transition"
          >
            <CardContent className="flex flex-col items-center">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                width={170}
                height={130}
                className="rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-900">
                {speaker.name}
              </h3>
              <Button
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={() => scrollToDetails(speaker.id)}
              >
                More Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 space-y-10 w-2/3 m-auto">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            ref={(el) => (speakerRefs.current[speaker.id] = el)}
            className="flex flex-col md:flex-row items-center p-6 bg-white shadow-md rounded-lg"
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-left md:pl-6">
              <h3 className="text-3xl font-bold text-blue-800">
                {speaker.name}
              </h3>
              <p className="text-gray-700 mt-2">
                <strong>About:</strong> {speaker.bio.about}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Title of Talk(CICT 2025):</strong>{" "}
                {speaker.bio.titleOfTalk}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Abstract of Talk(CICT 2025):</strong>{" "}
                {speaker.bio.abstract}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Research Interest:</strong>{" "}
                {speaker.bio.researchInterest.join(", ")}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Coordinator:</strong> {speaker.bio.coordinator}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
