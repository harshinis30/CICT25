import React from "react";

const Card = ({ title, description, fee, foreignFee, icon }) => {
  return (
    <div className="max-w-sm bg-gray-50 rounded-lg shadow-md p-8">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center text-blue-900 underline mb-6 break-words">
        {title}
      </h3>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        {/* Using a basic icon representation since we can't import SVG directly */}
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      <p className="text-base font-semibold text-zinc-500 text-center mb-8 px-6 leading-7 tracking-wide whitespace-normal break-words">
        {description}
      </p>

      {/* Fee */}
      <div className="text-center break-words">
        <h4 className="text-4xl font-bold text-blue-900 mb-2 whitespace-normal">
          {fee}
        </h4>
        {foreignFee && (
          <p className="text-lg font-semibold text-zinc-600 whitespace-normal">
            {foreignFee}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
