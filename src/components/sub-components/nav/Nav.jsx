
import React from "react";
import hamburger from '../../../assets/responsive/ic_baseline-menu.svg'
import Logo from "../../../assets/nav/Logo.svg";
import { links } from "../../../data";


const Nav = () => {
  return (
    <nav className="fixed right-0 w-full shadow-sm bg-white px-2 py-6 z-50 flex items-center justify-between md:px-10 xl:justify-evenly">
      <div className="flex items-center space-x-10">
        {/* Logo and Text */}
        <div className="logo-text flex items-center">
          <img src={Logo} alt="piggyvest logo" className="" />
        </div>

        {/* Links */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <a href="#" className="text-custom font-semi-bold">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="reg_login flex items-center space-x-3 hidden lg:flex">
        <a href="#">
          <button className="border border-custom rounded-xl p-3 capitalize">
            sign in
          </button>
        </a>
        <a href="#">
          <button className="bg-custom text-white px-6 rounded-xl p-3 capitalize">
            create free account
          </button>
        </a>
      </div>

      {/* hamburger */}
      <div className="cursor-pointer flex lg:hidden">
        <img src={hamburger} alt="hamburger" className="md:w-14 md:h-14" />
      </div>
    </nav>
  );
};

export default Nav;
