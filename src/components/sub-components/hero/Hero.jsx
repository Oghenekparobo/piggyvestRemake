import React from "react";
import apple from "../../../assets/hero/apple.svg";
import google from "../../../assets/hero/google.svg";
import Image from "./Image";

const Hero = () => {
  
  return (
    <section className="mt-36 flex flex-col justify-center items-center lg:justify-between lg:flex-row">
      {/* content */}
      <div className="content flex flex-col justify-center space-y-8">
        <h1 className="text-custom max-w-md font-bold text-2xl back__up md:text-5xl lg:text-6xl ">
          The Better Way to Save & Invest
        </h1>
        <p className="text-custom2 max-w-sm text-sm leading-[2rem] back__up_two md:text-xl">
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
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-6 md:flex-row">
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
      <Image />
    </section>
  );
};

export default Hero;
