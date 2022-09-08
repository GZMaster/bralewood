import React, { useState } from "react";
import "./MoreAbout.scss";
import One from "../../assets/bralewood assets/Mask groupmoreabout-welcome.png";
import { FiCheckCircle } from "react-icons/fi";
import Pic from "../../assets/bralewood assets/Mask groupmoreabout-values1.png";
import Pic2 from "../../assets/bralewood assets/Mask groupmoreabout-values2.png";
import BoardData from "../../Data/BoardData";
import BoardCard from "../../components/Board Card/BoardCard";
import { NavLink } from "react-router-dom";
import BankLogo from "../../assets/bralewood assets/Central Bank Logo.png";
const MoreAbout = () => {
  const [Data] = useState(BoardData);
  return (
    <section>
      <div className="About_Hero">
        <h4>
          World-class services to your door step or something idk.(Slogan)
        </h4>
      </div>
      <div className="A_Intro">
        <div className="A_Text_Wrap">
          <div className="A_Text_Title">WELCOME TO</div>
          <h3 className="A_Text_Header">
            <span className="A_Orange">BRALE</span>
            <span className="A_Blue">WOOD</span>
            <br />
            INVESTMENTS LTD
          </h3>
          <p>
            Bralewood Investment limited is one of Nigeria’s leading providers
            of foreign exchange related services and all round financial
            solutions. Our clientele base spans across various industries such
            as construction, telecommunications, IT, breweries etc. With a team
            of professional and passion driven individuals, our primary goal is
            to create a financial utopia for our clients as they deserve nothing
            less.
          </p>
        </div>
        <div className="A_Image_Wrap">
          <img src={One} className="A_Image" alt={One} />
        </div>
      </div>
      <div className="A_Interlude">
        <div className="I_Wrapper">
          <div className="I_Left">
            <img src={Pic} alt="" />
            <img src={Pic2} alt="" />
          </div>
          <div className="I_Right">
            <h3 className="I_Title">
              Our
              <span className="I_Orange"> Core </span> Values
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              error quaerat deserunt officiis deleniti? Placeat deleniti
              expedita animi eum harum!
            </p>
            <div className="I_Item_Wrapper">
              <div className="I_Item">
                <FiCheckCircle />
                <span>
                  We are a company rooted in integrity, you can trust us.
                </span>
              </div>
              <div className="I_Item">
                <FiCheckCircle />
                <span>
                  We pride ourselves in making transactions as swift possible
                </span>
              </div>
              <div className="I_Item I_Big">
                <FiCheckCircle />
                <span>
                  Our services are rendered to the highest degree of excellence,
                  you won’t be disappointed you chose us,
                </span>
              </div>
              <div className="I_Item">
                <FiCheckCircle />
                <span>
                  Competitive pricing to ensure you have the overall best
                  experience with us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="A_Board">
        <div className="Board_Title">Our Board Of Directors</div>
        <BoardCard items={Data} />
      </div>
      <div className="A_Contact">
        <p className="A_Contact_Text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsam
          aliquid officia repellendus qui iure, nobis, eligendi, cum ipsa id
          animi quas velit amet aperiam minima ipsum dignissimos blanditiis sit.
        </p>
        <NavLink className="A_Btn" to={"/"}>
          Contact Us
        </NavLink>
        <div className="LicenseWrapper">
          <span>Licensed By :</span>
          <img src={BankLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
