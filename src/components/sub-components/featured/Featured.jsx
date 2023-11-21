import React from "react";
import crunch from "../../../assets/featured/crunch.png";
import guardian from "../../../assets/featured/guardian.png";
import techpoint from "../../../assets/featured/techpoint.png";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-between space-y-12 lg:space-y-0 lg:flex-row">
        <h1 className="text-custom font-bold text-2xl md:text-5xl">
          As featured in
        </h1>

        <div className="features grid grid-cols-2 lg:grid-cols-3 gap-6">
          <img src={techpoint} alt="techpoint" />
          <img src={guardian} alt="guardian" />
          <div className="relative left-20 lg:left-0">
            <img src={crunch} alt="crunch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
