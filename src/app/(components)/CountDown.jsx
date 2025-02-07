"use client";

import { useState, useEffect } from "react";

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timebubbles=Object.keys(timeLeft).map((key,index)=>{
    return(
        <div key={index} className="flex flex-row items-center justify-center bg-gradient-to-br from-purple-400 to-blue-700 rounded-lg w-14 md:w-20 py-1">
            <div className="text-xl text-white font-bold">
                {timeLeft[key]}
            </div>
            <div className="text-sm text-white">
                {key[0].toUpperCase()}
            </div>
        </div>
    )
  })

  return (
    <>
    <div className="text-xl font-bold">
        Time until Conference
    </div>
    <div className="flex items-center justify-start gap-5">
        {timebubbles}
    </div>
    </>
  );
};

export default CountDown;