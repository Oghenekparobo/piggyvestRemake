import React from "react";
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
