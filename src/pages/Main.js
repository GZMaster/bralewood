import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Interlude from "./Interlude/Interlude";
import Services from "./services/Services";
import Contact from "./contact/Contact";

const MainPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Interlude />
      <Services />
      <Contact />
    </div>
  );
};

export default MainPage;
