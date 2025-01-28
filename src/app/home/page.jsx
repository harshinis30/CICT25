"use client";

import React from "react";
import './home.css';

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
            <button className="bg-[#0800F4] w-fit px-8 py-4 text-white font-bold rounded-md my-4">
                CERTIFICATES
            </button>
            <div>
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

    <div className="bg-[#13287D]">

    </div>
    </>
    )
}

export default Home
