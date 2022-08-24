import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Hamburger.scss";

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectPage, setSelectPage] = useState("Home");

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <NavLink
              // className={selectPage === "Home" ? "links selected" : "links"}
              to="/"
              // onClick={() => setSelectPage("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              // className={selectPage === "About" ? "links selected" : "links"}
              to="/about"
              // onClick={() => setSelectPage("About")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              // className={selectPage === "Services" ? "links selected" : "links"}
              to="/services"
              // onClick={() => setSelectPage("Services")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              // className={selectPage === "Contact" ? "links selected" : "links"}
              to="/contacts"
              // onClick={() => setSelectPage("Contact")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
