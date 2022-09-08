import React from "react";
import { NavLink } from "react-router-dom";
import One from "../../assets/bralewood assets/Mask groupabout.png";
import Two from "../../assets/bralewood assets/Mask groupabout (1).png";
import Three from "../../assets/bralewood assets/Mask groupabout (2).png";
import Four from "../../assets/bralewood assets/Mask groupabout (3).png";

import "./About.scss";

const About = () => {
  return (
    <section id="about" className="A_Container">
      <div className="A_Wrapper">
        <div className="A_Text_Wrap">
          <div className="A_Text_Title">
            <span className="A_Orange">BRALE</span>
            <span className="A_Blue">WOOD</span> INVESTMENTS LTD
          </div>
          <h3 className="A_Text_Header">We are the best Investment Platform</h3>
          <p>
            Bralewood Investment limited is one of Nigeria’s leading providers
            of foreign exchange related services and all round financial
            solutions. Our clientele base spans across various industries such
            as construction, telecommunications, IT, breweries etc. With a team
            of professional and passion driven individuals, our primary goal is
            to create a financial utopia for our clients as they deserve nothing
            less.
          </p>
          <NavLink className="A_Btn" to="/about">
            More About Us
          </NavLink>
        </div>
        <div className="A_Image_Wrap">
          <img src={One} className="A_Image" alt={One} />
          <img src={Two} className="A_Image" alt={Two} />
          <img src={Three} className="A_Image" alt={Three} />
          <img src={Four} className="A_Image" alt={Four} />
        </div>
      </div>
    </section>
  );
};

export default About;
