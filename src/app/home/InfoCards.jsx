import React from "react";
import { homeInfoCard } from "../data/homeInfoCard";

function InfoCards(){
    const cards=homeInfoCard.map((info,index)=>{
        return(
            <div className="mt-20 mx-5 w-80 border-solid flex flex-col items-center rounded-sm border-2 border-[#EFEFEF2B]" key={index}>
                <img className="bg-white p-5 w-28 aspect-square relative self-start -top-10 left-10 -mb-10 rounded-xl overflow-hidden hover:scale-110 duration-200" src={info.img}/>
                <div className="w-fit box-border px-10 pb-5 text-white">
                    <div className="text-2xl font-extrabold my-5">
                        {info.title}
                    </div>
                    <div className="my-5">
                        {info.description}
                    </div>
                    <a className="font-bold hover:text-[#279E64] duration-200" href={info.link}>
                        Read More &rarr;
                    </a>
                </div>
            </div>
        )
    })
    
    return(
        <div className="flex flex-wrap">
            {cards}
        </div>
    )
}

export default InfoCards