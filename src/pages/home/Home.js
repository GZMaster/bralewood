import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";
import LearnMoreBtn from "../../components/buttons/learnmore_btn/LearnMoreBtn";
import "./Home.scss";

const Home = () => {
  const [cardData] = useState(Data);

  return (
    <div className="home__Container">
      <Banner />
      <div className="home_Wrapper">
        <div className="home_Top">
          <h2>We are the best Investment Platform</h2>
        </div>
        <h4>WHAT WE DO</h4>
        <Card items={cardData} detailButton={LearnMoreBtn} />
      </div>
      <div className="Footer"></div>
    </div>
  );
};

export default Home;
