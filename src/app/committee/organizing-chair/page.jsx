import React from 'react';
import ScrollFadeIn from '@/app/(components)/scroll-animation';
import SocialMediaCard from '@/app/(components)/SocialMediaCard';
import { OrganizingChairs } from '@/app/data/organizing_chairs';

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-4 mt-10 px-4">
      {/* Main Heading */}
      <div className="flex h-16 items-center font-sans text-5xl text-blue-800 font-bold mt-20">
        Organising Chair
      </div>
      
      {/* Mapping through OrganizingChairs */}
      {OrganizingChairs.OrganizingChairs.map((chairs, index) => (
        <div key={index} className="w-full mb-12">
          {/* Subheading Section */}
          <div className="flex text-4xl text-blue-800 font-sans mt-4 mb-6 justify-center items-center">
            {chairs.subheading}
          </div>
          
          {/* Members Flex Section */}
          <ScrollFadeIn>
            <div className="flex flex-wrap justify-center gap-8">
              {chairs.members.map((member, memberIndex) => (
                <SocialMediaCard key={memberIndex} person={member} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      ))}
    </div>
  );
}

export default page;
