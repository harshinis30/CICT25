"use client"

import React from 'react'
import {
  Card,
  CardImage,
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
            <CardHeader>
              <CardImage src={patron.image} alt={patron.title} className="h-48 object-cover" />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-primary">{patron.title}</CardTitle>
              <CardDescription>{patron.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}