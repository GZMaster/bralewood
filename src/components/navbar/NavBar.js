import React from "react";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Interlude from "../../pages/Interlude/Interlude";
import Services from "../../pages/services/Services";
import Contact from "../../pages/contact/Contact";
import logo from "../../assets/Logo.jpg";
import mailIcon from "../../assets/bralewood assets/mailmini.png";
import phoneIcon from "../../assets/bralewood assets/phone-callmini.png";
import "./NavBar.scss";

const NavBar = () => {
  // const [selectPage, setSelectPage] = useState("");
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <>
      <div className="mini_contact_bar">
        <div className="mini_contact_div">
          <img src={mailIcon} alt="mail icon" />
          <h3>info@bralewood.com</h3>
          <div className="nav_vl"></div>
          <img src={phoneIcon} alt="phone icon" />
          <h3>01-4545505</h3>
        </div>
      </div>
      <header className="nav__component sticky">
        <div className="nav_bar">
          <div className="nav__logo">
            <img className="logo" src={logo} alt="" />
          </div>

          {isPageWide ? (
            <ul className="nav__buttons_holder">
              <li className="nav__button">
                <Link activeClass="active" smooth spy to="home">
                  Home
                </Link>
              </li>
              <li className="nav__button">
                <Link activeClass="active" smooth spy to="about">
                  About Us
                </Link>
              </li>
              <li className="nav__button">
                <Link activeClass="active" smooth spy to="services">
                  Services
                </Link>
              </li>

              {/* <li className="nav__button">
                  <Link activeClass="active" smooth spy to="blog">
                    Our Blog
                  </Link>
                </li> */}

              <li className="nav__button">
                <Link activeClass="active" smooth spy to="contact" h3>
                  Contact Us
                </Link>
              </li>
            </ul>
          ) : (
            <BurgerMenu />
          )}
        </div>
      </header>

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="about">
        <Interlude />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default NavBar;
