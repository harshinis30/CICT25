import React from 'react'
import ScrollFadeIn from '@/app/(components)/scroll-animation'

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-4 mt-10 px-4">
      <ScrollFadeIn>
        <div className="flex h-16 items-center font-sans text-5xl text-blue-800 mt-20">
          To Be Updated soon ...
        </div>
      </ScrollFadeIn>
    </div>
  )
}

export default page