import React from "react";
import { savingsList } from "../../../data";
const Card = () => {
  return (
    <>
      {savingsList.map((savings, index) => (
        <div
          key={index}
          className="bg-custom3 card flex flex-col justify-between  w-50 p-8 rounded-2xl  max-w-[406px] mx-auto"
        > 
          <div className="up flex flex-col space-y-4">
            <img
              src={savings.icon}
              alt={savings.heading}
              className="h-14
               w-14"
            />

            {/* heading */}

            <h1 className="text-custom text-2xl font-bold">
              {savings.heading}
            </h1>

            {/* sub-heading */}
            <p className="text-custom2 max-w-[17rem]">{savings.sub_heading}</p>
          </div>
          <div className="bottom flex items-center space-x-2">
            <span className="bg-teal-100 h-6 w-6 p-1 rounded-full flex items-center justify-center">
              <img src={savings.semi_icon} alt={savings.heading} />
            </span>
            <span> {savings.title}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
