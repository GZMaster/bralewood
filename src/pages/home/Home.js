import React from "react";
import "./Home.scss";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Management from "../management/Management";

const Home = () => {
  return (
    <div className="home__Container">
      {/* <About /> */}
      <Contact />
    </div>
  );
};

export default Home;
