import React from "react";
import rectangle from "../../../assets/hero/rex-bg.png";
import lady from "../../../assets/hero/lady.png";
import cross from "../../../assets/hero/cross.svg";
import rent from "../../../assets/hero/rent.svg";
import round_circle from "../../../assets/hero/round-circle.svg";
import investify from "../../../assets/hero/investify.svg";

const Image = () => {
  return (
    <>
      <div className="image relative flex items-center my-14 hidden md:flex lg:my-0">
        <div className="relative">
          {/* rectangle */}
          <img src={rectangle} alt="rectangle(long)-img" className="" />
          {/* left */}
          <img
            src={cross}
            alt="cross-svg"
            className="absolute -top-4 -left-20 z-10"
          />
          {/* middle */}
          <img
            src={rent}
            alt="rent-svg"
            className="absolute top-40 -left-32 z-10"
          />
          <img
            src={round_circle}
            alt="round-circle-svg"
            className="absolute top-20 left-[17rem] z-10"
          />
          {/* fine girl */}
          <img
            src={lady}
            alt="fine girl img"
            className="absolute top-6 right-16 z-5"
          />
          {/* bottom */}
          <img
            src={investify}
            alt="investify-svg"
            className="absolute bottom-32 -right-20 z-5"
          />
        </div>
      </div>
      <div className="image flex items-center my-14 flex md:hidden lg:my-0">
        <div className="relative">
        <img
            src={cross}
            alt="cross-svg"
            className="absolute -top-6 -left-2 z-10"
          />
          {/* middle */}
          <img
            src={rent}
            alt="rent-svg"
            className="absolute top-40 -left-14 z-10"
          />
          <img
            src={round_circle}
            alt="round-circle-svg"
            className="absolute top-[12rem] left-[21rem] z-10"
          />
          {/* fine girl */}
          <img src={lady} alt="fine girl img" />
          {/* bottom */}
          <img
            src={investify}
            alt="investify-svg"
            className="absolute bottom-10 -right-20 z-5"
          />
        </div>
      </div>
    </>
  );
};

export default Image;
