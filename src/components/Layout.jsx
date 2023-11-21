import React from "react";
import Nav from "./sub-components/nav/Nav";
import Hero from "./sub-components/hero/Hero";
import Security from "./sub-components/security/Security";
import Savings from "./sub-components/savings/Savings";
import Investment from "./sub-components/investment/Investment";
import Saver from "./sub-components/saver/Saver";
import Customers from "./sub-components/customers/Customers";
import Featured from "./sub-components/featured/Featured";
import Footer from "./sub-components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="pt-10">
        <section className="align-element">
          <Hero />
          {/* <Security /> */}
          {/* <Savings /> */}
          {/* <Investment /> */}
        </section>
        <section>
          {/* <Saver /> */}
        </section>
        <section className="align-element ">
          {/* <Customers /> */}
        </section>
        <section className="bg-custom3 mt-20">
          <div className="align-element">
            {/* <Featured /> */}
          </div>
        </section>
        <footer className="mt-20">
          <div className="align-element">
            {/* <Footer /> */}
          </div>
        </footer>
      </main>
    </>
  );
};

export default Layout;
