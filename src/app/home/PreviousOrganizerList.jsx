import React from "react";
import { homeAboutCICT } from "../data/homeAboutCICT";

export const PreviousOrganizersList=()=>{
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

export default PreviousOrganizersList