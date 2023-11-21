import React from "react";
import arrowCircle from "../../../assets/saver/arrowcircle.svg";
const Saver = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-2">
        <div className="content bg-custom5 p-28 flex flex-col space-y-6">
          <h1 className="text-white font-bold text-5xl max-w-md">
            Meet the saver of the month
          </h1>
          <p className="max-w-md text-white">
            Every month, we shine a spotlight on one saver, asking them
            questions about their savings culture and how the product is
            specifically helping them shape how they spend and save for future
            responsibilities.
          </p>
          <div className="flex items-center space-x-2 text-white">
            <span>
              <img src={arrowCircle} alt="arrow circle" />
            </span>{" "}
            <span>Meet the Oyetade’s</span>
          </div>
        </div>
        <div className="image bg-cusimg w-full h-full aspect-auto"></div>
      </div>
    </section>
  );
};

export default Saver;
