import React from "react";
import { homeInfoCard } from "../data/homeInfoCard";

function InfoCards(){
    const cards=homeInfoCard.map((info,index)=>{
        return(
            <div className="mt-10 mx-5 w-80" key={index}>
                <img className="bg-white w-28 aspect-square relative -bottom-10 left-10 rounded-xl overflow-hidden hover:scale-110 duration-200" src={info.img}/>
                <div className="border-solid rounded-sm border-2 border-[#EFEFEF2B] w-fit box-border pt-10 px-10 pb-5 text-white">
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