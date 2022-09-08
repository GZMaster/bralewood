import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(Data);
  return (
    <section id="services" className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Top">
          <h2>OUR SERVICES</h2>
        </div>
        <p className="S_Wrapper_Text">
          Below are some of the services we offer to our clients
        </p>
        <Card items={cardData} />
      </div>
    </section>
  );
};

export default Services;
