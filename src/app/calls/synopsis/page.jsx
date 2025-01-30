import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center p-5'>
        <div className='mb-10'>
          <h1 className='lg:text-5xl text-4xl font-bold text-[#13287D]'>Call for Synopsis in Symposiums</h1>
        </div>
        <div className='flex md:flex-row flex-col w-full lg:w-3/4 mx-auto items-start md:text-lg lg:text-xl gap-4'>
          <div className='flex flex-col md:w-1/2 text-left'>
            <div className='my-4'>
              <h3 className='text-2xl mb-5 font-semibold text-[#13287D]'>PhD Symposium</h3>
              <p className='text-gray-500'>Ph.D. Thesis successfully defended during 1st Oct 2023 To 30th September 2024 are eligible to be considered.</p>
            </div>
            <div className='my-4'>
              <h3 className='text-2xl mb-5 font-semibold text-[#13287D]'>Published Indian Patent</h3>
              <p className='text-gray-500'>The owner of the Indian Patents published during 1st Oct 2023 to 1st Oct 2024 are eligible to apply.</p>
            </div>
            <div className='my-4'>
              <h3 className='text-2xl mb-5 font-semibold text-[#13287D]'>M.Tech Symposium</h3>
              <p className='text-gray-500'>The candidates whose thesis (Or The Project) Is accepted towards completion of MTech Degree in Jan-June 2024 semester are eligible to apply.</p>
            </div>
            <div className='my-4'>
              <h3 className='text-2xl mb-5 font-semibold text-[#13287D]'>B.Tech Symposium</h3>
              <p className='text-gray-500'>The Candidates whose major project accepted towards completion of BTech Degree in Jan-June 2024 semester are eligible to apply.</p>
            </div>
            <div className='my-4'>
              <h3 className='text-2xl mb-5 font-semibold text-[#13287D]'>Startups</h3>
              <p className='text-gray-500'>The Start Ups established during 1st Oct 2021 To 30th Sept 2024 are eligible to apply.</p>
            </div>
            <div className='flex flex-col text-gray-500 border-black border-2 rounded-xl py-5 pl-5 pr-5 my-10 max-w-max'>
              <div className='my-1 w-auto'>Call for Synopsis released on: .........TBD</div>
              <div className='my-1'>Submission Deadline: .............TBD</div>
              <div className='my-1'>Notification of Shortlisted Synopsis for Presentation:..........TBD</div>
              <div className='my-1'>Final Submission and Mandatory Registration:......TBD</div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:h-[900px] h-[500px] flex items-start">
            <Image 
              src="/callforsynopsis/image.png" 
              alt="call for paper" 
              fill 
              className="object-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
