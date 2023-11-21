import React from "react";
import man from "../../../assets/customer/man.png";
import girl from "../../../assets/customer/girl.png";

const Card = () => {
  return (
    <div className="cards flex flex-col space-y-8">
      <div className="card bg-custom3 px-4 rounded-md">
        <div className="date text-right">
          <h3 className="text-custom6 py-4">
            Wednesday, 5th of October 2022 by 03:08 AM
          </h3>
        </div>
        <div className="content flex space-x-4 py-6">
          <div className="img">
            <img src={man} alt="micheal f" />
          </div>
          <div className="title_text">
            <p className="name text-custom font-bold">Micheal F</p>
            <p className="max-w-md text-sm text-custom5 pt-2 pb-4">
              Whenever money got into my hands, I never knew how I squandered it
              so fast without even saving a little. I got to hear about Piggy
              vest and it's various services and right now, I am totally
              enjoying this journey.
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-custom3 px-4 rounded-md">
        <div className="date text-right">
          <h3 className="text-custom6 py-4">
            Thursday, 27th of October 2022 by 13:03 PM
          </h3>
        </div>
        <div className="content flex space-x-4 py-6">
          <div className="img">
            <img src={girl} alt="Racheal O." />
          </div>
          <div className="title_text">
            <p className="name text-custom font-bold">Racheal O.</p>
            <p className="max-w-md text-sm text-custom5 pt-2 pb-4">
              My name is Rachael Joseph and I am here to testify that Piggyvest
              has helped me a lot. I had to spread the good news to my friends
              and tell them about the app and behold they are also using it.
              Thank you so much Pggyvest for saving me cause I am the type of
              person that spends lavishly. Thank you once again Piggyvest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
