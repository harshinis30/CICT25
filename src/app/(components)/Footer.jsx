import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Footer = () => {
    return (
        <div className="bg-blue-900 flex flex-col text-white bottom-0 mt-auto p-4">
            <div className='w-full flex justify-center items-center xl:pl-24 h-auto'>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center p-10 gap-16 lg:gap-12">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/3 w-4/5 text-center lg:text-left">
                        <h1 className="font-semibold text-2xl">CICT 2025</h1>
                        <p className="mb-4">
                            Conference on Information Communication Technology 2025 {"(CICT 2025)"}
                        </p>
                        <div className="flex items-start lg:items-center gap-4">

                            <p className="text-[15px] lg:text-sm">
                                Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram,
                                Chennai, Tamil Nadu, India-600127
                            </p>
                        </div>
                        <Button className="mt-4 w-3/5 h-12 bg-orange-400 rounded-full text-black text-md font-semibold transition-transform hover:scale-105 ease-in-out transition-duration-300">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cict@iiitdm.ac.in" target='_blank' rel="noopener noreferrer">
                                Contact Us  
                            </a>
                        </Button>
                    </div>

                    {/* Middle Section */}
                    <div className="flex flex-col justify-start items-start lg:w-1/3 w-auto lg:pl-14 xl:pl-32 text-center lg:text-left">
                        <h1 className="font-semibold text-xl mb-4">Organizers</h1>
                        {[
                            ['IIITDM Kancheepuram', "https://www.iiitdm.ac.in"],
                            ['IIIT Allahabad', "https://www.iiita.ac.in"],
                            ['ABV-IIITM Gwalior', "https://www.iiitm.ac.in"],
                            ['PDPM IIITDM Jabalpur', "https://www.iiitdmj.ac.in"],
                            ['IIITDM Kurnool', "https://www.iiitk.ac.in"],
                        ].map((org, index) => (
                            <Link
                                key={index}
                                href={org[1]}
                                target="_blank"
                                className="flex items-center mb-2 hover:text-green-500 hover:text-opacity-60 transition-colors duration-300 ease-in-out"
                            >
                                <svg
                                    className="w-5 h-5 text-white mr-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m9 5 7 7-7 7"
                                    />
                                </svg>
                                <p className=''>
                                    {org[0]}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-center justify-start lg:items-start lg:w-1/3 w-full lg:pl-10 xl:pl-20 text-center lg:text-left">
                        <h1 className="font-semibold text-xl mb-4">ieeeXplore Links</h1>
                        {[
                            ['IIIT Allahabad: CICT 2024', "#"],
                            ['IIITDM Jabalpur: CICT 2023', "#"],
                            ['ABV-IIITM Gwalior: CICT 2022', "#"],
                            ['IIITDM Kurnool: CICT 2021', "#"],
                            ['IIITDM Kancheepuram: CICT 2020', "#"],
                            ['IIIT Allahabad: CICT 2019', "#"],
                            ['IIITDM Jabalpur: CICT 2018', "#"],
                            ['ABV-IIITM Gwalior: CICT 2017', "#"],
                        ].map((link, index) => (
                            <Link key={index} href={link[1]} target="_blank" className="mb-2 hover:text-green-500 hover:text-opacity-60 transition-colors duration-300 ease-in-out">
                                {link[0]}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* make a divider between the above content and the below */}
            <div className="w-4/5 lg:my-10 my-6 bg-white h-[1px] opacity-30 self-center"></div>
            <div className='w-4/5 justify-evenly items-center flex flex-col lg:flex-row self-center'>
                <p className="text-center py-4">
                    &copy; CICT 2025. All rights reserved. IIITDM Kancheepuram.
                </p>
                <div className='flex justify-center items-center gap-4 pb-4'>
                    <Link href={"#"} className='p-2 bg-black bg-opacity-30 rounded-full flex justify-center items-center hover:scale-110 hover:bg-green-400 hover:bg-opacity-50 transition-transform duration-300 ease-in-out'>
                        <svg className="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 22 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    <Link href={"#"} className='p-[9px] bg-black bg-opacity-30 rounded-full flex justify-center items-center hover:scale-110 hover:bg-green-400 hover:bg-opacity-50 transition-transform duration-300 ease-in-out'>
                        <svg className="w-[22px] h-[22px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg>
                    </Link>

                    <Link href={"#"} className='p-2 bg-black bg-opacity-30 rounded-full flex justify-center items-center hover:scale-110 hover:bg-green-400 hover:bg-opacity-50 transition-transform duration-300 ease-in-out'>
                        <svg className="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                        </svg>

                    </Link>

                    <Link href={"#"} className='p-2 bg-black bg-opacity-30 rounded-full flex justify-center items-center hover:scale-110 hover:bg-green-400 hover:bg-opacity-50 transition-transform duration-300 ease-in-out'>
                        <svg className="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                        </svg>

                    </Link>

                    <Link href={"#"} className='p-2 bg-black bg-opacity-30 rounded-full flex justify-center items-center hover:scale-110 hover:bg-green-400 hover:bg-opacity-50 transition-transform duration-300 ease-in-out'>
                        <svg className="w-[24px] h-[24px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
