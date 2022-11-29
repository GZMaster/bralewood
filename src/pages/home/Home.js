import React from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";

#Test the app
const Home = () => {
  return (
    <section id="home" className="home__Container">
      <Banner className="home_banner_start" id="home" />
    </section>
  );
};

export default Home;
