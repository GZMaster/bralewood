import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/PedagogyLogo__NoBackGround.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <header className="nav__component">
      <div className="nav__header">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="links__content">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/about">
          About
        </NavLink>
        <NavLink className="links" to="/services">
          Services
        </NavLink>
        <NavLink className="links" to="/contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
