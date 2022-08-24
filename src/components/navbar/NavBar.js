import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../hamburger/Hamburger";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
import logo from "../../assets/Logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [selectPage, setSelectPage] = useState("Home");
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="nav__component">
      <div className="nav__header">
        <img className="logo" src={logo} alt="" />
      </div>

      {isPageWide ? (
        <div className="links__content">
          <NavLink
            className={selectPage === "Home" ? "links selected" : "links"}
            to="/"
            onClick={() => setSelectPage("Home")}
          >
            Home
          </NavLink>
          <NavLink
            className={selectPage === "About" ? "links selected" : "links"}
            to="/about"
            onClick={() => setSelectPage("About")}
          >
            About
          </NavLink>
          <NavLink
            className={selectPage === "Services" ? "links selected" : "links"}
            to="/services"
            onClick={() => setSelectPage("Services")}
          >
            Services
          </NavLink>
          <NavLink
            className={selectPage === "Contact" ? "links selected" : "links"}
            to="/contacts"
            onClick={() => setSelectPage("Contact")}
          >
            Contact
          </NavLink>
        </div>
      ) : (
        <Hamburger />
      )}
    </div>
  );
};

export default NavBar;
