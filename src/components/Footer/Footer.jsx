import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="F_text">
        <p>
          Designed by <span className="F_Team">GZM Team</span>
        </p>
      </div>
      <div className="F_Socials">
        <div className="F_item">
          <FaFacebookF />
        </div>
        <div className="F_item">
          <FaTwitter />
        </div>
        <div className="F_item">
          <FaGooglePlusG />
        </div>
        <div className="F_item">
          <FaInstagram />
        </div>
        <div className="F_item">
          <MdRssFeed />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
