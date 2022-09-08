import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        duration={0.8}
        color="#fff"
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="home"
              offset={-80}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink to="/about" onClick={handleClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="services"
              offset={-80}
              onClick={handleClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              offset={-80}
              to="contact"
              onClick={handleClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
