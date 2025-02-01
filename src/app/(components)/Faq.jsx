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
      question: "How many papers are allowed in a single registration?",
      answer:
        "Registration of two papers is allowed at a single registration fee. Each additional paper will require a separate registration.",
    },
    {
      question: "Some Hotels Nearby IIITDM Kancheepuram",
      answer: (
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {[
            {
              name: "The Leela Palace, Chennai",
              address: "MRC Nagar, R.A Puram, Chennai City Center, Chennai – 600028",
              distance: "39 Km",
            },
            {
              name: "Hotel ITC Grand Chola, Chennai",
              address: "No. 63, Mount Road, Guindy, Chennai, Tamil Nadu 600032",
              distance: "45 Km",
            },
            {
              name: "Hotel Hyatt Regency, Chennai",
              address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018",
              distance: "50 Km",
            },
            {
              name: "Hotel SRR Grand",
              address: "133 GST Road, Otteri, Vandalur, Chennai",
              distance: "15 Km",
            },
            {
              name: "Hotel Ginger",
              address: "No 10, OMR Toll Plaza, Navalur, Chennai, Tamil Nadu – 600130",
              distance: "18 Km",
            },
            {
              name: "Hotel Kalyan Grand",
              address: "#247, GST Road, Vandalur, Chennai – 600048",
              distance: "9.6 Km",
            },
            {
              name: "Hotel Southern Residency",
              address: "130, Kelambakam-Kovalam Road, Kittu Nagar, Kelambakkam, Chennai – 603 103",
              distance: "N/A",
            },
            {
              name: "Novotel Chennai OMR",
              address: "IT Expressway, Opp. Elcot SEZ, Sholinganallur, Chennai, Tamil Nadu 600119",
              distance: "17 Km",
            },
          ].map((hotel, index) => (
            <li key={index} className="border-b pb-2">
              <span className="font-semibold">{hotel.name}</span>
              <p className="text-sm">{hotel.address}</p>
              <p className="text-sm text-gray-500">Distance from venue: {hotel.distance}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      question: "Some Attractions Nearby IIITDM Kancheepuram",
      answer: (
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {[
            {
              name: "Kancheepuram",
              description:
                "A temple town known as the 'City of Thousand Temples' and 'Silk City'. Famous for its silk sarees and temples like the Varadaraja Perumal Temple, Kailasanathar Temple, and Ekambareswarar Temple.",
              distance: "75 km from Chennai Central",
              fee: "Varies depending on the temple",
            },
            {
              name: "Mahabalipuram",
              description:
                "A UNESCO World Heritage Site featuring ancient rock-cut temples, monolithic sculptures, and bas-reliefs. Notable attractions include the Shore Temple, Arjuna’s Penance, and the Panch Rathas.",
              distance: "58 km from Chennai Central",
              fee: "INR 40 (Indians), INR 600 (Foreigners)",
            },
            {
              name: "Marina Beach",
              description:
                "India’s largest beach with palm trees, a classic sunrise view, and activities like horse rides, beach games, and kite flying.",
              distance: "Within Chennai city",
              fee: "Free",
            },
            {
              name: "Dakshina Chitra",
              description:
                "A living-history museum showcasing South Indian culture with traditional houses, art, folk performances, and architecture.",
              distance: "SH 49, Muttukadu, Tamil Nadu",
              fee: "INR 175 (Adults), INR 60 (Children 5-12 yrs), INR 100 (Children 13-18 yrs), INR 350 (Foreigners)",
            },
            {
              name: "Santhome Church",
              description:
                "A sparkling white church built on the tomb of St. Thomas, featuring stained glass windows, a museum, and a high cross with a sloping red roof.",
              distance: "17.5 km from Chennai Airport",
              fee: "Free",
            },
          ].map((place, index) => (
            <li key={index} className="border-b pb-2">
              <span className="font-semibold">{place.name}</span>
              <p className="text-sm">{place.description}</p>
              <p className="text-sm text-gray-500">Distance: {place.distance}</p>
              <p className="text-sm text-gray-500">Entry Fee: {place.fee}</p>
            </li>
          ))}
        </ul>
      ),
    },
  ];
  
  

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-emerald-600 font-medium mb-2">CICT 2025 Registration</p>
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