import React from "react";
import apple from "../../../assets/hero/apple.svg";
import google from "../../../assets/hero/google.svg";
import Card from "./Card";

const Customers = () => {
  return (
    <section>
      <div className="flex justify-between">
        <Card />
        <div className="content flex flex-col justify-center">
          <h1 className="text-custom text-5xl font-bold">
            4 Million + customers
          </h1>
          <p className="text-custom6 max-w-md py-6">
            Since launching in 2016, over 4,000,000 people have used PiggyVest
            to manage their money better, avoid over-spending and be more
            accountable.
          </p>
          <div className="btns">
            <div className="flex flex-col space-y-8">
              <a href="#">
                <button className="bg-custom text-white  rounded-xl p-3 capitalize">
                  create free account
                </button>
              </a>
              <div className="flex space-x-6">
                <a href="#">
                  <button className="flex space-x-2 border border-gray-200 rounded-xl py-4 px-6 capitalize">
                    <span>
                      <img src={apple} alt="apple-img" />
                    </span>{" "}
                    <span>Get on Iphone</span>
                  </button>
                </a>
                <a href="#">
                  <button className="flex space-x-2 border border-gray-200 rounded-xl py-4 px-6 capitalize">
                    <span>
                      <img src={google} alt="google-img" />
                    </span>{" "}
                    <span>Get on Iphone</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
