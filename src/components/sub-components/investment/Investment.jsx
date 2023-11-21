import React from "react";
import right from "../../../assets/security/ArrowRight.svg";
import circle from "../../../assets/investment/circleInvest.png";
import dot from "../../../assets/investment/dotinvest.svg";
import phone from "../../../assets/investment/phone.png";

const Investment = () => {
  return (
    <section>
      <div className="flex items-center flex-col justify-between py-20 lg:flex-row">
        <div className="images relative ">
          <img
            src={circle}
            alt="circle"
            className="absolute -left-36 top-36 z-0 w-full hidden md:flex"
          />

          <img
            src={phone}
            alt="phone"
            className="relative w-[300px] h-auto z-5"
          />

          <img src={dot} alt="dot" className="absolute top-16 -right-10 z-0 hidden md:flex" />
        </div>

        <div className="content flex flex-col justify-center space-y-6 py-10 lg:py-0">
          <div className="text-center lg:text-start">
            <button
              disabled="disabled"
              className="text-sm text-custom3 bg-custom4 font-bold px-4 py-1 rounded-full md:text-md"
            >
              Up To 25% Returns
            </button>
          </div>

          <div className="">
            <h1 className="text-xl font-bold   text-custom md:max-w-md text-center md:text-5xl lg:text-start">
              Access investment{" "}
              <span className="lg:leading-[4rem]">opportunities</span>
            </h1>
          </div>

          <div className="">
            <p className="text-custom4 text-center lg:text-start">
              Invest securely and confidently on the go.
            </p>
            <p className="text-custom4 max-w-lg text-center lg:text-start">
              Grow your money confidently by investing in pre-vetted investment
              opportunities.
            </p>
          </div>

          <div className="">
            <a href="#" className="flex items-center justify-center text-xl space-x-2 lg:justify-start">
              <span className="text-blue-600">
                Learn more about Investments
              </span>
              <span className="relative">
                <img src={right} alt="arrow right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
