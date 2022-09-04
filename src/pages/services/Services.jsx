import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Data from "../../Data/CardData";
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(Data);
  return (
    <section className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Top">
          <h2>OUR SERVICES</h2>
        </div>
        <p className="S_Wrapper_Text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
          provident doloremque. Placeat iusto sint id accusamus laboriosam
          dignissimos commodi nemo.
        </p>
        <Card items={cardData} />
      </div>
    </section>
  );
};

export default Services;
