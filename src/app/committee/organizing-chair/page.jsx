import React from 'react'
import ScrollFadeIn from '@/app/(components)/scroll-animation'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">stuff</h1>
      </div>

      <ScrollFadeIn>
        <div className="h-96 flex items-center justify-center bg-blue-500 rounded-lg shadow-lg mx-10">
          <h2 className="text-3xl font-semibold">I appear on scroll!</h2>
        </div>
      </ScrollFadeIn>

      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl">more stuff</h1>
      </div>
    </div>
  );
}

export default page