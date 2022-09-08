import React from "react";
import "./Interlude.scss";
import Pic from "../../assets/bralewood assets/financialDecisionsImage.png";
import { FiCheckCircle } from "react-icons/fi";

const Interlude = () => {
  return (
    <section to="interlude" className="I_Container">
      <div className="I_Wrapper">
        <div className="I_Left">
          <img src={Pic} alt="" />
        </div>
        <div className="I_Right">
          <h3 className="I_Title">
            Why we are the best for your
            <span className="I_Orange"> financial</span> decisions.
          </h3>
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
    </section>
  );
};

export default Interlude;
