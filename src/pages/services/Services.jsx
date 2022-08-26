import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";
import "./Services.css";

const Services = () => {
  const [cardData] = useState(Data);
  return (
    <section className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Top">
          <h2>OUR SERVICES</h2>
        </div>
        <h4>OUR SERVICES INCLUDE</h4>
        <Card
          items={cardData}
        />
      </div>
    </section>
  );
};

export default Services;
