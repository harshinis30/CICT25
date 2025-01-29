import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "How many papers are allowed in single registration?",
      answer: "Registration of two papers is allowed at a single registration fee. Each additional paper will require a separate registration."
    },
    {
      question: "Some Hotels Nearby IIITDM Kancheepuram",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Hotel ABC (4 Star) - 7 km from campus</li>
          <li>Hotel DEF (3 Star) - 5 km from campus</li>
          <li>Hotel XYZ(3 Star) - 6 km from campus</li>
          <li>Hotel PQR (3 Star) - 5.5 km from campus</li>
        </ul>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-emerald-600 font-medium mb-2">CICT 2024 Registration</p>
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-blue-900 font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;