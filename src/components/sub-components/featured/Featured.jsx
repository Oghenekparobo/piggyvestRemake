import React from "react";
import crunch from "../../../assets/featured/crunch.png";
import guardian from "../../../assets/featured/guardian.png";
import techpoint from "../../../assets/featured/techpoint.png";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-custom font-bold text-5xl">As featured in</h1>

        <div className="features flex space-x-12">
          <img src={techpoint} alt="techpoint" />
          <img src={guardian} alt="guardian" />
          <img src={crunch} alt="crunch" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
