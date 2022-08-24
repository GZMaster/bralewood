import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        duration={0.8}
        color="#000"
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
