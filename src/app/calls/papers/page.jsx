import React from 'react';
import { regularTrack, specialTrack } from '../../data/call_for_paper_info';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center p-5'>
        <div className='mb-10'>
          <h1 className='text-5xl font-bold text-[#13287D]'>Call for Papers</h1>
        </div>
        <div className='flex md:flex-row flex-col w-full lg:w-3/4 gap-4 mx-auto items-start md:text-lg lg:text-xl'>
          <div className='flex flex-col md:w-1/2 text-left'>
            <div>
              <h3 className='text-xl font-semibold text-[#13287D]'>Regular Track</h3>
              <ul className='list-disc list-inside text-gray-500 my-6'>
                {regularTrack.map((item, index) => (
                  <li className='my-1' key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold mt-4 text-[#13287D]'>Special Track</h3>
              <ul className='list-disc list-inside text-gray-500 my-6'>
                {specialTrack.map((item, index) => (
                  <li className='my-1' key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col text-gray-500 border-black border-2 rounded-xl py-5 pl-5 pr-5 my-10 max-w-max'>
              <div className='my-1 w-auto'>Call for Paper (CFP) released on: .........TBD</div>
              <div className='my-1'>Submission Deadline: .............TBD</div>
              <div className='my-1'>Acceptance Notification:..........TBD</div>
              <div className='my-1'>Camera Ready submission and Mandatory Registration:......TBD</div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 lg:h-[1100px] h-[500px] flex items-start">
            <Image 
              src="/callforpaper/image.png" 
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
