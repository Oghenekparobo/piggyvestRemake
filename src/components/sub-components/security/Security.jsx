import React from "react";
import shield from "../../../assets/security/shield-done.svg";
import right from "../../../assets/security/ArrowRight.svg";

const Security = () => {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8 lg:py-10  lg:space-y-0 lg:space-x-10 lg:flex-row">
        <div className="img">
          <img src={shield} alt="shield done" />
        </div>
        <div className="content flex flex-col space-y-6">
          <h1 className="text-custom text-center text-xl font-bold tracking-wide md:text-5xl">
            Your security is our priority
          </h1>
          <p className="text-sm max-w-sm text-custom2 md:text-justify md:max-w-2xl  ">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <div className="">
            <a
              href="#"
              className="flex items-center text-xl space-x-2 justify-center lg:justify-start"
            >
              <span className="text-blue-600 text-justify">Learn more</span>
              <span className="relative top-0.5">
                <img src={right} alt="arrow right" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
