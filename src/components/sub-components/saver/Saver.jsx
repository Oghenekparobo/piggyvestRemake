import React from "react";
import arrowCircle from "../../../assets/saver/arrowcircle.svg";

const Saver = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="content bg-custom5 p-14 flex flex-col space-y-6 justify-center items-center lg:items-start lg:justify-start lg:p-28 w-full">
          <h1 className="text-white font-bold max-w-md text-center text-5xl lg:text-start">
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
        <div className="image bg-cusimg w-full h-96 aspect-auto bg-cover bg-no-repeat lg:h-full "></div>
      </div>
    </section>
  );
};

export default Saver;
