import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";
import "./Home.scss";

const Home = () => {
  const [cardData] = useState(Data);

  return (
    <div className="home__Container">
      <Banner />
      <div className="home_Wrapper">
        <div>
          <Card
            items={[
              {
                id: 1,
                title: "WHO WE ARE",
                text: "Bralewood Investments Limited is a financial services firm with specialization in Bureau De Change, and Financial Consultancy, and Investments. In Bralewood, we are extremely passionate about SERVICE delivery, as we seek to always enhance our Customer Experience. We will stop at nothing to ensure that all our service touchpoints leave an impression during the each interaction with every customer.",
              },
            ]}
            detailButton={<button className="learnBtn">Learn More</button>}
            cardClassWrapper="home__CardContainer"
            cardClass="home__Card"
          />
        </div>
        <div className="home_banner">
          <h2>We are the best Investment Platform</h2>
        </div>
        <h4>WHAT WE DO</h4>
        <Card
          items={cardData}
          detailButton={<button className="learnBtn">Learn More</button>}
        />
      </div>
      <div className="Footer"></div>
    </div>
  );
};

export default Home;
