import React from "react";
import { homeOrganizerInfo } from "../data/homeOrganizerInfo";

function OrganizerCards(){
    const organizers=homeOrganizerInfo.map((college,index)=>{
        return(
            <div className="bg-white text-[#13287D]" key={index}>
                <div className="bg-gray-500">

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
        <div className="flex flex-col md:flex-row gap-10">
            {organizers}
        </div>
    )
}

export default OrganizerCards