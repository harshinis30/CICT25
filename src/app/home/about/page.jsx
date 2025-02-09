import React from 'react'

import PreviousOrganizersList from '../PreviousOrganizerList'

const About = () => {
  return (
    <div className="mx-32 my-20 flex flex-col gap-5">
      <span className="text-[#13287D] text-center font-extrabold text-3xl">
        Conference on Information and Communication Technology(CICT)
      </span>
      <div className="text-lg text-gray-900">
      The 9th edition of the IEEE Conference on Information and Communication Technology (CICT) is a prestigious annual conference organized by the Centrally Funded Technical Institutions (CFTIs) and the Indian Institutes of Information Technology (IIITs). It provides a global forum for scholars, industry professionals, researchers, and students to showcase their most recent findings and technological innovations in the Information and Communication Technology (ICT) domain. IEEE CICT 2025 will be hosted by the Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Kancheepuram. The theme for the conference in 2025 is Artificial Intelligence (AI) and ICT.


      </div>
      <div className="flex items-center justify-around">
        <div className="text-[#13287D] font-bold">
            <p>Previous Edition of CICT</p>
            <a href="https://ieeexplore.ieee.org/xpl/conhome/1823245/all-proceedings" target="_blank">
                <button className="
                    bg-[#61CE70] text-black font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                    hover:bg-[#279E64] hover:text-white duration-200
                ">
                    ieeeXplore Link
                </button>
            </a>
        </div>
        <ul className="text-black text-lg list-disc marker:text-[#61CE70] marker:text-2xl pl-8">
            <PreviousOrganizersList/>
        </ul>
      </div>
    </div>
  )
}

export default About