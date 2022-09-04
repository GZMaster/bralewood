import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
import logo from "../../assets/Logo.jpg";
import mailIcon from "../../assets/bralewood assets/mailmini.png";
import phoneIcon from "../../assets/bralewood assets/phone-callmini.png";
import "./NavBar.scss";

const NavBar = () => {
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="nav__component">
      <div className="mini_contact_bar">
        <div className="mini_contact_div">
          <img src={mailIcon} alt="mail icon" />
          <h3>info@bralewood.com</h3>
          <div className="nav_vl"></div>
          <img src={phoneIcon} alt="phone icon" />
          <h3>01-4545505</h3>
        </div>
      </div>

      <div className="nav_bar">
        <div className="nav__logo">
          <img className="logo" src={logo} alt="" />
        </div>

        {isPageWide ? (
          <div className="nav__buttons_holder">
            <button className="nav__button">
              <h3>Home</h3>
            </button>
            <button className="nav__button">
              <h3>About Us</h3>
            </button>
            <button className="nav__button">
              <h3>Services</h3>
            </button>
            <button className="nav__button">
              <h3>Our Blog</h3>
            </button>
            <button className="nav__button">
              <h3>Contact Us</h3>
            </button>
          </div>
        ) : (
          <BurgerMenu />
        )}
      </div>
    </div>
  );
};

export default NavBar;
