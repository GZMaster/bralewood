import React from "react";
import "./Card.css";

const Card = ({ items }) => {
  return (
    <div className="Card_Wrapper">
      {items.map((cardData) => {
        const { image, title, text, id } = cardData;
        return (
          <article className="Card" key={id}>
            <div className="Card_Image">
              <img src={image} alt={title} />
            </div>
            <h6>{title}</h6>
            <p>{text}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
