import React from "react";
import Card from "./Card";

const Savings = () => {
  return (
    <section>
      <div className="flex justify-between py-8">
        <div className="content flex flex-col pt-14 space-y-6">
          <h1 className="text-custom font-bold text-5xl max-w-sm">
            4 ways to build your savings
          </h1>
          <p className="text-custom2 max-w-[17rem]">
            Earn 5%-15% when you save with any of these PiggyVest plans.
          </p>
          <a href="#">
            <button className="bg-custom text-white px-6 rounded-xl p-3 capitalize text-xl">
              Start Saving
            </button>
          </a>
        </div>
        <div className="cards">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
