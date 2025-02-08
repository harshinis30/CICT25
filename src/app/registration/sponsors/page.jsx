import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-[80vh] p-2'>
      <div className='flex flex-col items-center justify-center gap-4'>
		<h1 className='text-blue-800 font-bold text-4xl md:text-5xl'>Sponsors</h1>
		<p className='text-gray-700 lext-md md:text-lg text-center'>Sponsors are invited for CICT 2025. Please contact <Link className='hover:underline-offset-4 underline underline-offset-2' href={"mailto:cict@iiitdm.ac.in"}>cict@iiitdm.ac.in</Link></p>
      </div>
	  <div className='flex flex-col items-center justify-center gap-4'>
		<h1 className='text-blue-800 font-bold text-2xl md:text-3xl'>Technical Sponsor</h1>
		<img src="/logos/ieeemadras_logo_sharpened.png" alt="IEEE Madras Section Logo"  className='w-full h-auto'/>
	  </div>
	  <Link href={"#"}><Button className="w-full text-lg bg-blue-800 p-6 hover:bg-blue-900 transition-transform ease-in-out hover:scale-105 transition-duration-300">Learn More</Button></Link>
    </div>
  )
}

export default page