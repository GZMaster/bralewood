import React from "react";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
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
                <Link activeClass="active" smooth spy to="home" offset={-80}>
                  Home
                </Link>
              </li>
              <li className="nav__button">
                <Link activeClass="active" smooth spy to="about" offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="nav__button">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                  offset={-80}
                >
                  Services
                </Link>
              </li>

              {/* <li className="nav__button">
                  <Link activeClass="active" smooth spy to="blog">
                    Our Blog
                  </Link>
                </li> */}

              <li className="nav__button">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  h3
                  offset={-80}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          ) : (
            <BurgerMenu />
          )}
        </div>
      </header>

      {/* {children.map((child, key) => {
        console.log(child);
        console.log(key);
        return <section id={key}>{child}</section>;
      })} */}
    </>
  );
};

export default NavBar;
