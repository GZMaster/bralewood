import React, { useState } from "react";
import "./Services.css";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";

const Services = () => {
  const [cardData, setCardData] = useState(Data);
  return (
    <section className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Top">
          <h2>OUR SERVICES</h2>
        </div>
        <h4>OUR SERVICES INCLUDE</h4>
        <Card items={cardData} />
      </div>
      <div className="Footer"></div>
    </section>
  );
};

export default Services;
