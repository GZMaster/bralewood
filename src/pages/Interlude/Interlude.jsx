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
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
              We are a company rooted in integrity, you can trust us.
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
              We pride ourselves in making transactions as swift possible
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
              Our services are rendered to the highest degree of excellence, you won’t be
disappointed you chose us,
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
              Competitive pricing to ensure you have the overall best experience with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interlude;
