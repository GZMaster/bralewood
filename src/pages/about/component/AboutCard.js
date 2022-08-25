import React from "react";
import icon1 from "../../../assets/investment.png";
import background1 from "../../../assets/investment-1.jpg";
import burear from "../../../assets/bureau.png";
import mark from "../../../assets/questionmark.png";
// import download2 from "../../../assets/download2.jpg";
// import download from "../../../assets/download.jpg";
// import download1 from "../../../assets/download 1.jpg";
// import download3 from "../../../assets/download 3.jpg";
import background from "../../../assets/background.jpg";

import "./aboutCard.css";

function AboutCard() {
  return (
    <>
      <div className="content__wrap">
        <div className="card__container">
          <div className="text__content">
            <img className="icon__image" src={icon1} alt="investment" />
            <h1 className="header">About Brelewood</h1>
            <p>
              Bralewood Investments Limited is a financial services firm with
              specialization in Bureau De Change, and Financial Consultancy, and
              Investments.
            </p>
          </div>
          <div>
            <img className="coin__img" src={background1} alt="investment1" />
          </div>
        </div>

        <div className="section__2">
          <div className="text__content">
            <img className="icon__image" src={burear} alt="investment" />
            <h1 className="header">Welcome to Brelewood</h1>
            <p className="paragragrph1">
              In Bralewood, we are extremely passionate about SERVICE delivery,
              as we seek to always enhance our Customer Experience. We will stop
              at nothing to ensure that all our service touchpoints leave an
              impression during the each interaction with every customer.
            </p>
            <p>
              We are committed to our Clients’ Growth andImprovement, and
              introduce world-class proven Innovations, Ideas, Products and
              Services to suit their needs. With our team of experts in various
              fields, our aim is to create value for our clients and their
              organizations. We will ensure that our unique services are
              delivered as promised.
            </p>
          </div>

          <div className="text__content">
            <img className="icon__image" src={mark} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p className="paragragrph1">
              Bralewood Investments Ltd was incorporated in 2019 and was
              established to carry on the business of an investment company and
              for that purpose to acquire and hold in the name of the company,
              stocks, debentures, bonds, notes, obligations and securities
              issued or guaranteed by any company in Nigeria and securities
              issued or guaranteed by any government, sovereign rulers,
              commissioners, public body or authority in Nigeria.
            </p>{" "}
            <p className="paragragrph1">
              To carry on business as investment consultants to broker
              investment and business transactions between prospective investors
              and businesses or idea developers and inventors and to generally
              serve as business incubators.
            </p>{" "}
            <p>
              Bralewood’s immediate to short-term business model and core
              primary area of business is Foreign Exchange trading, which will
              gradually evolve into other lines of businesses including
              businesses within and outside the financial intermediation space.
              Bralewood commenced business on August 5, 2019.
            </p>
          </div>
        </div>

        {/* <div className="section__3">
          <div className="text__content">
            <img className="icon__image" src={download2} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p></p>
          </div>

          <div className="text__content">
            <img className="icon__image" src={download} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p></p>
          </div>

          <div className="text__content">
            <img className="icon__image" src={download1} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p></p>
          </div>

          <div className="text__content">
            <img className="icon__image" src={download3} alt="investment" />
            <h1 className="header">Our Profile</h1>
            <p></p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AboutCard;
