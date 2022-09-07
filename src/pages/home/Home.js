import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <section id="home" className="home__Container">
      <Banner className="home_banner_start" id="home" />
    </section>
  );
};

export default Home;
