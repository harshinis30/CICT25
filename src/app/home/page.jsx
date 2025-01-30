"use client";

import React from "react";
import './home.css';
import InfoCards from "./InfoCards";
import { homeAboutCICT } from "../data/homeAboutCICT";
import { homeUsefulButtons } from "../data/homeUsefulButtons"
import OrganizerCards from "./OrganizerCards";

const previousOrganizersList=()=>{
    const organizerList=homeAboutCICT.previousOrganizers.map((organizers,index)=>{
        return(
            <li key={index}>
                <a href={organizers.link} target="_blank">{organizers.name}</a>
            </li>
        )
    });
    return(
        <>
            {organizerList}
        </>
    )
}

const buttonList=()=>{
    const buttons=homeUsefulButtons.map((button,index)=>{
        return(
            <button 
                key={index}
                className="
                    bg-[#61CE70] text-black font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                    hover:bg-[#279E64] hover:text-white duration-200
                "
            >
                {button.name}
            </button>
        )
    })
    return(
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center mt-28">
            {buttons}
        </div>
    )
}

const Home=()=>{
    return(
    <>
    <div className="md:flex bg-[#E6F7FF] w-full h-fit px-4 py-10 md:p-0">
        <div className="flex flex-col w-fit bg-[#E6F7FF] py-8 mx-8 md:w-1/2 md:mx-20 md:my-24">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <img className="w-2/6 md:w-1/6 slight-tilt duration-500" src="/temp/iiitdm_logo.webp"/>
                <div className="text-2xl font-bold">
                    Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram
                </div>
            </div>
            <div className="text-6xl font-black text-[#13287D] my-4">
                IEEE CICT 2025
            </div>
            {/* <button className="bg-[#0800F4] w-fit px-8 py-4 text-white font-bold rounded-md my-4">
                CERTIFICATES
            </button> */}
            <div className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officia, nisi optio debitis odit fugit nobis architecto sapiente fugiat. Sint possimus veniam nemo placeat accusamus repellendus! Voluptates nisi consectetur laboriosam, officia soluta deleniti. Vero earum voluptatum aperiam illum corporis cumque a nisi dicta! Rerum officia minus mollitia? Doloribus aliquid iusto, voluptate, labore ea libero, quidem sed pariatur dolores perspiciatis sequi amet ratione minus quasi illum. Quas consequatur unde, eum tempora praesentium veritatis voluptatum est. Unde, nisi perspiciatis eum eius consectetur dicta quas, fugiat aut provident perferendis culpa facere temporibus veritatis aliquid? Dignissimos ab quas, deserunt minus minima quasi incidunt esse laborum magni iste possimus fugit voluptatibus perferendis eaque mollitia? Optio harum reiciendis adipisci libero, sequi dolores deleniti animi, quo, magnam neque ea corporis facilis mollitia veritatis! Labore distinctio, eius dolor provident, natus quisquam dicta veritatis assumenda, quia minus maxime! Quasi, nesciunt. Adipisci deserunt sint vitae aut iure nulla quos nihil vero. Nemo quod magnam deserunt unde doloremque et necessitatibus. Nam vero tempora eveniet dignissimos est laborum quaerat at tenetur vel repudiandae, placeat quod minus iusto blanditiis consectetur voluptatibus facilis, ut officiis excepturi, incidunt adipisci? Amet repudiandae earum, veniam ipsam dolorem accusamus atque quibusdam in harum animi dignissimos, cumque dolor a fugit nemo ad et quidem possimus ab unde veritatis asperiores sed quos facere! Soluta, quae tempore odio, exercitationem, itaque odit doloribus quam similique quis ad vel? Placeat, ipsam quasi inventore delectus deleniti id fuga error at aliquid dicta sequi odit dolorum esse consectetur voluptatibus expedita consequatur recusandae quam hic provident alias necessitatibus assumenda. Velit, ipsum. Mollitia repellendus suscipit, inventore perferendis cum consequuntur ab excepturi incidunt voluptatibus! Nobis quod rem voluptatem cum eligendi at quam enim porro dolor atque impedit sint, vero reiciendis expedita est nulla quas sunt fugiat quasi libero officia consequatur. Sit nemo magni, ut culpa dolore, veritatis enim officiis necessitatibus fugit consequuntur officia aspernatur ea, dolorem expedita maxime sunt deleniti nostrum! Dolores molestias unde eum fuga reiciendis. Dignissimos expedita magnam quidem omnis eum facilis, explicabo, ipsam officiis aliquid culpa ratione! Soluta, architecto? Quidem corrupti dolor corporis. Neque, quo excepturi magnam nostrum perferendis, sunt animi sint consequatur rerum possimus mollitia. Vel totam corrupti impedit exercitationem quam officiis suscipit ab natus! Ipsum sapiente molestias possimus eligendi soluta eveniet, qui, quisquam cumque nulla doloremque in sint dolorem modi laudantium pariatur nihil obcaecati consequatur ducimus alias mollitia sed odio distinctio. Aliquid ratione odio quisquam, quae blanditiis adipisci architecto tenetur deserunt voluptate sint.
            </div>
            <div className="flex flex-col md:flex-row">
                <button className="
                    bg-[#279E64] text-white font-bold rounded-full px-8 py-4 border-solid border-2 border-[#279E64] md:mr-8 my-5 text-center
                    hover:bg-transparent hover:text-[#279E64] duration-200 pop
                ">
                    CALL FOR PAPER
                </button>
                <button className="
                    bg-transparent text-[#13287D] font-bold rounded-full px-8 py-4 border-solid border-2 border-[#13287D] my-5 text-center
                    hover:bg-[#13287D] hover:text-white duration-200 pop
                ">
                    CALL FOR SYNOPSIS
                </button>
            </div>
        </div>
        <img className="md:w-1/2 w-full" src='/temp/some.jpg'/>
    </div>

    <div className="pb-24 bg-[#13287D]">
        <InfoCards/>
    </div>
    
    <div className="mx-5 my-20">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-20">
            <img className="rounded-lg" src='/temp/some.jpg'/>
            <div className="flex flex-col gap-5">
                <span className="text-[#279E64] font-bold text-xl">
                    About CICT 2025
                </span>
                <span className="text-[#13287D] font-extrabold text-3xl">
                    IEEE CICT 2025 IIITDM Kancheepuram
                </span>
                <p className="text-xl text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis adipisci unde, quasi officiis explicabo. Debitis, animi impedit accusantium beatae veniam fuga dolor ratione quis! Obcaecati explicabo consequuntur quam nesciunt, culpa officiis delectus expedita perspiciatis deserunt excepturi quis dolore ipsam.
                </p>
                <div className="text-[#13287D] font-bold">
                    Previous Edition of CICT:
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
                    {previousOrganizersList()}
                </ul>
            </div>
        </div>
        {buttonList()}
    </div>

    <div className="flex flex-col items-center bg-[#279E64] rounded-xl pb-40">
        <img className="w-2/6 md:w-1/12 slight-tilt duration-500" src="/logos/iiitdm_white.png"/>
        <div className="text-center text-white text-3xl font-bold">
            Organizing Institutes<br/>
            CICT 2025
        </div>
        <div className="text-center text-white text-xl font-bold mt-10 mb-2">
            Organizers & Co-Organizers
        </div>
    </div>
    <OrganizerCards/>
    <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.458581912919!2d80.13489620547216!3d12.839539742543696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Kancheepuram!5e0!3m2!1sen!2sin!4v1738208729609!5m2!1sen!2sin" 
            className="w-full h-96 border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
    <div className="flex justify-center">
        <div className="max-w-[70rem] relative -top-28 mt-10 mx-10 grid grid-cols-2 md:grid-cols-3 rounded-xl overflow-hidden bg-white">
            <div className="flex pt-5 pb-14 px-20 bg-yellow-400 justify-center col-span-2 md:col-span-1">
                <img className="w-32 aspect-square" src="temp/some.jpg"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-r-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#279E64] pr-2 shake">
                    &#9993;
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <p>Main Email: cict@iiitdm.ac.in</p>
                    <p>Inquiries: cict@iiitdm.ac.in</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-l-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#279E64] shake pr-2">
                    &#9743;
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <p>Office Telephone: </p>
                    <p>Mobile: </p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home
