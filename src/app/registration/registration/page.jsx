import React from "react";
import ScrollFadeIn from "@/app/(components)/scroll-animation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import feesItems from "@/app/data/feesItems";
import Card from "@/app/(components)/FeesCard";
import FAQSection from "@/app/(components)/Faq";

const Page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-6 px-6">
      <div className="text-5xl text-blue-800 font-bold mt-20 text-center">
        Registration for IEEE CICT-2025 will be open soon ...
      </div>

      {/* Registration Policy Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 p-2 items-center">
        <div className="max-w-4xl w-full text-gray-800">
          <h2 className="text-pink-600 font-bold text-center text-lg">
            REGISTRATION POLICY FOR IEEE CICT-2025
          </h2>
          <ul className="list-disc list-outside mt-4 space-y-2 text-lg max-w-3xl">
            <li>
              In order to publish your paper in the CICT-2025 Conference
              Proceedings and to be eligible for publication in IEEE Xplore, at
              least one author of an accepted paper is required to register as
              well as present the paper in the conference.
            </li>
            <li>
              The paper must be presented by an author of that paper at the
              conference unless the TPC Chair grants permission in advance for a
              substitute presenter who is qualified both to present and answer
              questions.
            </li>
            <li>
              Registration of two papers is allowed at a single registration
              fee.
            </li>
            <li>
              A registration kit will be provided only to offline participants.
            </li>
            <li>
              One registration kit will be provided against a single
              registration. If co-authors want a separate registration kit, they
              have to register separately.
            </li>
            <li>
              Non-refundable registration fees must be paid prior to uploading
              the final IEEE formatted, publication-ready version of the paper.
            </li>
            <li>
              Receipt of the Registration Fee will be provided to the registered
              authors only.
            </li>
            <li>
              The registration of paper for presentation at CICT-2025 is a
              two-step process as described below:
            </li>
          </ul>
        </div>

        {/* Important Notice Section */}
        <div className="max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-lg lg:h-72">
          <h3 className="text-yellow-400 font-bold text-xl">
            IMPORTANT NOTICE
          </h3>
          <p className="mt-2 text-lg italic">
            Twin-sharing accommodation (Limited Availability) is available for
            participants only. Due to high registration numbers, family housing
            is not available. For accompanying participants, we recommend
            booking an accommodation at a nearby hotel.
          </p>
          <p className="mt-2 text-yellow-300 italic">
            (
            <a href="#" className="underline">
              Please refer FAQ for some nearby hotels
            </a>
            ).
          </p>
        </div>
      </div>

      {/* Important Notice Regarding Accommodation */}
      <div className="max-w-4xl w-full bg-green-100 p-6 rounded-lg shadow-lg mt-6">
        <h4 className="text-center text-md lg:text-xl font-semibold">
          Important Notice Regarding Accommodation & Food Charges
        </h4>

        {/* Room Charges Section */}
        <div className="mt-4">
          <h5 className="text-blue-700 font-bold underline">Room Charges:</h5>
          <p className="text-black mt-2">
            A.C. Rooms in VH1: Rs 500 (Inclusive of all taxes) per person per
            night
          </p>
          <p className="text-black">
            Rooms in VH3: Rs. 800 (Inclusive of all taxes) per person per night
          </p>
        </div>

        {/* Food Charges Section */}
        <div className="mt-4">
          <h5 className="text-blue-700 font-bold underline">Food Charges:</h5>
          <p className="text-black mt-2">
            The persons accompanying with registered participant need to pay
            extra charges for food at the time of registration. The details are
            as follows:
          </p>
          <ul className="text-black mt-2 space-y-1">
            <li>6/12/2024 – Breakfast+Lunch+Dinner = Rs. 800 per person</li>
            <li>
              7/12/2024 – Breakfast+Lunch+Gala Dinner = Rs. 1200 per person
            </li>
            <li>8/12/2024 – Breakfast+Lunch+Dinner = Rs. 800 per person</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 mt-10">
        {/* Step 1 Registration Section */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
          {/* Left - Step 1 Image (Order 1 on mobile, Order 2 on desktop) */}
          <div className="flex-1 order-1 lg:order-2">
            <Image
              src="/assets/images/registration/iiitdm2.png"
              alt="Campus Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right - Step 1 Content (Order 2 on mobile, Order 1 on desktop) */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">STEP 1</h2>
            <p className="text-blue-500 mb-4">
              Step 1 Registration Deadline: TBA
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                Complete the Step 1 Registration process by filling out the
                attached Google Form, providing your basic details and necessary
                information for conference registration.
              </li>
              <li>
                Prior to completing and submitting the Step 1 Google Form,
                kindly ensure payment of the conference registration fee
                corresponding to your category.
              </li>
            </ul>
            <a
              className="text-blue-500 hover:underline font-semibold mb-4 inline-block"
              href="#fees"
            >
              Check the Registration Fees
            </a>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-lg">
                Register (Step 1)
              </Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-lg">
                Pay Online
              </Button>
            </div>
            <a
              className="text-blue-500 hover:underline font-semibold mb-4 inline-block mt-4"
              href="#bank-details"
            >
              Instructions for International / Foreign Payments
            </a>
          </div>
        </div>

        {/* Step 2 Registration Section */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
          {/* Left - Step 2 Image (Order 1 on mobile, Order 2 on desktop) */}
          <div className="flex-1 order-1">
            <Image
              src="/assets/images/registration/iiitdm2.png"
              alt="Campus Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right - Step 2 Content (Order 2 on mobile, Order 1 on desktop) */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">STEP 2</h2>
            <p className="text-gray-600 italic mb-4">
              (After Completing Step 1 Registration Process)
            </p>
            <p className="text-blue-500 mb-4">
              Step 2 Registration Deadline: 22nd November 2024
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                Only after completing Step 1 registration, proceed to fill out
                the Step 2 form.
              </li>
              <li>
                Provide details including length of stay, places to visit, and
                other relevant info.
              </li>
              <li>
                Please fill out the form accurately to help us organize the
                conference efficiently.
              </li>
            </ul>
            <Button className="w-full lg:w-auto bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 rounded-lg">
              Register (Step 2)
            </Button>
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div
        className="max-w-4xl w-full mt-10 bg-blue-100 p-6 rounded-lg shadow-lg"
        id="bank-details"
      >
        <h3 className="text-lg font-semibold text-blue-700">
          The bank account details for foreign payment:
        </h3>
        <ul className="text-gray-800 mt-3 space-y-1">
          <li>
            <strong>Name of the Bank:</strong> State Bank of India
          </li>
          <li>
            <strong>Bank Account Name:</strong> Indian Institute of Information
            Technology Design and Manufacturing Kancheepuram
          </li>
          <li>
            <strong>Bank Account Number:</strong> TBD
          </li>
          <li>
            <strong>Branch Code:</strong> TBD
          </li>
          <li>
            <strong>MICR Code:</strong> TBD
          </li>
          <li>
            <strong>IFS Code:</strong> TBD
          </li>
          <li>
            <strong>SWIFT Code:</strong> <span className="font-bold">TBD</span>
          </li>
          <li>
            <strong>Address:</strong> TBD
          </li>
          <li>
            <strong>Phone:</strong> TBD
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:cict25.iiitdm.ac.in"
              className="text-red-600 underline"
            >
              cict25.iiitdm.ac.in
            </a>
          </li>
        </ul>
      </div>

      {/* Registration Fees Section */}
      <div id="fees" className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 md:space-y-4">
          <ScrollFadeIn>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-800 font-bold mt-12 md:mt-20 text-center">
              CICT 25
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-800 font-bold text-center">
              Registration Fees
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="text-base sm:text-lg md:text-xl text-green-800 font-semibold p-2 text-center">
              Charges include GST
            </div>
          </ScrollFadeIn>
        </div>
        <ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
            {feesItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                fee={item.fee}
                foreignFee={item.foreignFee}
                icon={item.icon}
              />
            ))}
          </div>
        </ScrollFadeIn>
      </div>

      {/* FAQ Section */}
      <ScrollFadeIn>
        <div className="flex flex-col lg:flex-row justify-evenly gap-24 items-center">
        <Image
              src="/assets/images/registration/iiitdm2.png"
              alt="Campus Image"
              width={800}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
        <FAQSection />
        </div>
      </ScrollFadeIn>
    </div>
  );
};

export default Page;
