import React from "react";
import { Link } from "react-scroll";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_wrapper">
        <h3>
          World-class financial services, We are <b>BRALEWOOD.</b>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <Link activeClass="active" smooth spy to="contact">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Banner;
