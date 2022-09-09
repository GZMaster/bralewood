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
        To promise world-class financial services, through sustainable business practices
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
          Bralewood Investments Ltd was incorporated in 2019 and was established to carry on the business of an investment company and for that purpose to acquire and hold in the name of the company, stocks, debentures, bonds, notes, obligations and securities issued or guaranteed by any company in Nigeria and securities issued or guaranteed by any government, sovereign rulers, commissioners, public body or authority in Nigeria.
          </p>
          <p>To carry on business as investment consultants to broker investment and business transactions between prospective investors and businesses or idea developers and inventors and to generally serve as business incubators.</p>
          <p>Bralewood’s immediate to short-term business model and core primary area of business is Foreign Exchange trading, which will gradually evolve into other lines of businesses including businesses within and outside the financial intermediation space. Bralewood commenced business on August 5, 2019.</p>
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
              These are our Core Values:
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
        We are committed to our Clients’ Growth andImprovement, and introduce world-class proven Innovations, Ideas, Products and Services to suit their needs. With our team of experts in various fields, our aim is to create value for our clients and their organizations. We will ensure that our unique services are delivered as promised.
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
