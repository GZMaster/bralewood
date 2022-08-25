import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ items, detailButton = {} }) => {
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
            <div>{detailButton}</div>
          </article>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  items: PropTypes.object,
  detailButton: PropTypes.any,
};
export default Card;
