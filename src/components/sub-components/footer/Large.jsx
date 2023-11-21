import React from "react";
import compliance from "../../../assets/footer/compliance.png";
import fb from "../../../assets/footer/fb.png";
import Logo from "../../../assets/nav/Logo.svg";
import insta from "../../../assets/footer/insta.png";
import twt from "../../../assets/footer/twt.png";

const Large = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex py-20">
        <div className="logos">
          <div className="piggyvest__logo">
            <div className="logo-text flex items-center">
              <img src={Logo} alt="piggyvest logo" className="" />
            </div>
          </div>
          <div className="compliance relative text-center">
            <img src={compliance} alt="compliance" />
          </div>
        </div>

        <div className="links flex justify-evenly w-full">
          <div className="products flex flex-col space-y-4">
            <h1 className="text-custom font-bold">Products</h1>
            <ul className="flex flex-col space-y-4">
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Piggybank
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Invest
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Safelock
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Target Savings
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Flex Naira
                </a>
              </li>
            </ul>
          </div>
          <div className="company flex flex-col space-y-4">
            <h1 className="text-custom font-bold">Company</h1>
            <ul className="flex flex-col space-y-4">
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  About
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  FAQs
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="legal flex flex-col space-y-4">
            <h1 className="text-custom font-bold">Legal</h1>
            <ul className="flex flex-col space-y-4">
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Terms
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Privacy
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-custom hover:font-bold cursor-pointer">
                <a href="#" className="text-custom4">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media flex flex-col">
            <div className="socials flex items-center space-x-4">
              <img src={fb} alt="facebook" />
              <img src={twt} alt="twitter" />
              <img src={insta} alt="instagram" />
            </div>
            <div className="content text-custom4">
              <p className="">
                Tesmot house, Abdulrahman Okene <br /> close, Victoria island,
                Lagos, Nigeria
              </p>
              <p className="py-2">contact@piggyvest.com</p>
              <p>+234 700 933 933 933</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__center flex  justify-center">
        <p className="text-custom4 text-center max-w-4xl">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
      </div>
      <div className="credits text-custom3 text-center py-10 ">
        <p className="underline">
          p2016 - 2022 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </div>
  );
};

export default Large;
