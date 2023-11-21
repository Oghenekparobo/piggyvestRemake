import React from "react";
import Card from "./Card";

const Savings = () => {
  return (
    <section>
      <div className="flex flex-col py-8  justify-center items-center space-y-12 lg:space-y-0 lg:py-8 lg:flex-row lg:items-start lg:justify-between ">
        <div className="content flex flex-col space-y-6 lg:pt-14 ">
          <h1 className="text-custom font-bold text-5xl max-w-sm text-center lg:text-start">
            4 ways to build your savings
          </h1>
          <p className="text-custom2 max-w-sm text-center lg:text-start lg:max-w-[17rem]">
            Earn 5%-15% when you save with any of these PiggyVest plans.
          </p>
          <a href="#" className="text-center lg:text-start">
            <button className="bg-custom text-white px-6 rounded-xl p-3 capitalize text-xl ">
              Start Saving
            </button>
          </a>
        </div>
        <div className="cards">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
