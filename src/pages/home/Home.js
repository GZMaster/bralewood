import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";

const Home = () => {
  return (
    <div className="home__Container">
      <Banner className="home_banner_start"/>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
