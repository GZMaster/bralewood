import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
import logo from "../../assets/Logo.jpg";
import "./NavBar.scss";

const NavBar = () => {
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="nav__component">
      <div className="mini_contact_bar">
        <h3>info@bralewood.com</h3>
        <h3>01-4545505</h3>
      </div>

      <div className="nav_bar">
        <div className="nav__logo">
          <img className="logo" src={logo} alt="" />
        </div>

        {isPageWide ? (
          <div className="nav__buttons_holder"></div>
        ) : (
          <BurgerMenu />
        )}
      </div>
    </div>
  );
};

export default NavBar;
