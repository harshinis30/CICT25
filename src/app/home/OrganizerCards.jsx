import React from "react";
import { homeOrganizerInfo } from "../data/homeOrganizerInfo";

function OrganizerCards(){
    const organizers=homeOrganizerInfo.map((college,index)=>{
        return(
            <div className="w-60 flex flex-col shadow-2xl items-center bg-white text-[#13287D] py-5 px-5 rounded-xl" key={index}>
                <div 
                    className="flex justify-center items-center bg-gray-200 box-content aspect-square"
                >
                    <img className="w-fit" src={college.logo}/>
                </div>
                <div className="text-xl font-bold">
                    {college.name}
                </div>
                <div className="text-center">
                    {college.title}
                </div>
            </div>
        )
    })
    return(
        <div className="relative -bottom-32 flex flex-col justify-around flex-wrap md:flex-row gap-10">
            {organizers}
        </div>
    )
}

export default OrganizerCards