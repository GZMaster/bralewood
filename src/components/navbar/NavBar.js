import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [selectPage, setSelectPage] = useState("Home");

  return (
    <div className="nav__component">
      <div className="nav__header">
        <img className="logo" src={logo} alt="" />
      </div>

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
          to="/contact"
          onClick={() => setSelectPage("Contact")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
