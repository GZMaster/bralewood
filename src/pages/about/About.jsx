import React from "react";
import One from "../../assets/bralewood assets/Mask groupabout.png";
import Two from "../../assets/bralewood assets/Mask groupabout (1).png";
import Three from "../../assets/bralewood assets/Mask groupabout (2).png";
import Four from "../../assets/bralewood assets/Mask groupabout (3).png";

import "./About.scss";

const About = () => {
  return (
    <section className="A_Container">
      <div className="A_Wrapper">
        <div className="A_Text_Wrap">
          <div className="A_Text_Title">
            <span className="A_Orange">BRALE</span>
            <span className="A_Blue">WOOD</span> INVESTMENTS LTD
          </div>
          <h3 className="A_Text_Header">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            tempore.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eveniet non eum voluptatem repellendus est iusto quos voluptas,
            voluptatibus cumque blanditiis quam dolorem porro accusantium quasi
            tempore ullam modi vero corporis odio harum ipsa ad quisquam veniam.
            At, itaque libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
            enim. Est sequi quasi pariatur et quae consequuntur harum natus amet
            quia, delectus recusandae, exercitationem nobis odit fugit adipisci
            nam voluptate!
          </p>
          <button className="A_Btn">More About Us</button>
        </div>
        <div className="A_Image_Wrap">
          <img src={One} className="A_Image" alt={One} />
          <img src={Two} className="A_Image" alt={Two} />
          <img src={Three} className="A_Image" alt={Three} />
          <img src={Four} className="A_Image" alt={Four} />
        </div>
      </div>
    </section>
  );
};

export default About;
