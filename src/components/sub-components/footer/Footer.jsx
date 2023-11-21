import React from "react";
import compliance from "../../../assets/footer/compliance.png";
import fb from "../../../assets/footer/fb.png";
import Logo from "../../../assets/nav/Logo.svg";
import insta from "../../../assets/footer/insta.png";
import twt from "../../../assets/footer/twt.png";
import Large from "./Large";
import Small from "./Small";

const Footer = () => {
  return (
    <section>
      {/* large screens */}
      <Large/>
      {/* small screens */}
      <Small/>
    </section>
  );
};

export default Footer;
