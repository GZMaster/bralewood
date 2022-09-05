import React from "react";
import "./Interlude.scss";
import Pic from "../../assets/bralewood assets/financialDecisionsImage.png";
import { FiCheckCircle } from "react-icons/fi";

const Interlude = () => {
  return (
    <div className="I_Container">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                ad veritatis blanditiis quia eaque numquam odio alias aliquid
                maiores aut!
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                ad veritatis blanditiis quia eaque numquam odio alias aliquid
                maiores aut!
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                ad veritatis blanditiis quia eaque numquam odio alias aliquid
                maiores aut!
              </p>
            </div>
            <div className="I_Item">
              <FiCheckCircle style={{ color: "#f96507", fontSize: "40px" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                ad veritatis blanditiis quia eaque numquam odio alias aliquid
                maiores aut!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interlude;
