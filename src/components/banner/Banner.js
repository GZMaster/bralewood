import React from "react";
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
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Banner;
