import React from "react";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import BurgerMenu from "../hamburger/BurgerMenu";
import UseMediaQuery from "../mediaquery/UseMediaQuery";
import logo from "../../assets/Logo.jpg";
import mailIcon from "../../assets/bralewood assets/mailmini.png";
import phoneIcon from "../../assets/bralewood assets/phone-callmini.png";
import "./NavBar.scss";

const NavBar = () => {
  // const [selectPage, setSelectPage] = useState("");
  const navigate = useNavigate();
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

                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="home"
                  onClick={() => navigate("/")}
                >

                  Home
                </Link>
              </li>
              <li className="nav__button">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="nav__button">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                  onClick={() => navigate("/")}
                >
                  Services
                </Link>
              </li>

              {/* <li className="nav__button">
                  <Link activeClass="active" smooth spy to="blog" onClick={() => navigate("/")}>
                    Our Blog
                  </Link>
                </li> */}

              <li className="nav__button">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                  onClick={() => navigate("/")}
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
