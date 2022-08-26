import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="F_text">
        <p>
          Designed by <span className="F_Team">Retro Developers</span>
        </p>
      </div>
      <div className="F_Socials">
        <div className="F_item">
          <FaFacebookF />
        </div>
        <div className="F_item">
          <FaLinkedin />
        </div>
        <div className="F_item">
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
