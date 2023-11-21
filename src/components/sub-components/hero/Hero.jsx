import React from "react";
import apple from "../../../assets/hero/apple.svg";
import google from "../../../assets/hero/google.svg";
import rectangle from "../../../assets/hero/rex-bg.png";
import lady from "../../../assets/hero/lady.png";
import cross from "../../../assets/hero/cross.svg";
import rent from "../../../assets/hero/rent.svg";
import round_circle from "../../../assets/hero/round-circle.svg";
import investify from "../../../assets/hero/investify.svg";

const Hero = () => {
  return (
    <section className="mt-36 flex flex-col justify-center md:items-center lg:justify-evenly lg:flex-row">
      {/* content */}
      <div className="content flex flex-col justify-center space-y-8">
        <h1 className="text-custom max-w-md font-bold text-2xl md:text-5xl lg:text-6xl">
          The Better Way to Save & Invest
        </h1>
        <p className="text-custom2 max-w-sm text-sm leading-[2rem] md:text-xl">
          PiggyVest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        {/* btns */}
        <div className="btns">
          <div className="flex flex-col justify-center space-y-8 items-center lg:justify-start lg:items-start">
            <a href="#">
              <button className="bg-custom text-white rounded-xl p-3 capitalize">
                create free account
              </button>
            </a>
            <div className="flex items-center space-x-6">
              <a href="#">
                <button className="flex space-x-2 border border-gray-200 rounded-xl py-4 px-6 capitalize">
                  <span>
                    <img src={apple} alt="apple-img" />
                  </span>
                  <span>Get on Iphone</span>
                </button>
              </a>
              <a href="#">
                <button className="flex space-x-2 border border-gray-200 rounded-xl py-4 px-6 capitalize">
                  <span>
                    <img src={google} alt="google-img" />
                  </span>
                  <span>Get on Iphone</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="image relative flex items-center my-14 lg:my-0">
        <div className="">
           {/* rectangle */}
        <img src={rectangle} alt="rectangle(long)-img" />
        {/* left */}
        <img src={cross} alt="cross-svg" className="absolute -top-4 -left-20 z-10"/>
        {/* middle */}
        <img src={rent} alt="rent-svg" className="absolute top-40 -left-32 z-10" />
        <img src={round_circle} alt="round-circle-svg" className="absolute top-20 left-[17rem] z-10" />
        {/* fine girl */}
        <img src={lady} alt="fine girl img" className="absolute top-6 right-16  z-5" />
        {/* bottom */}
        <img src={investify} alt="investify-svg" className="absolute bottom-32 -right-20 z-5" />
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
