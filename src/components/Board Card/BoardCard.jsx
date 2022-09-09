import React, { useState, useEffect } from "react";
import "./BoardCard.scss";

const BoardCard = ({ items }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(isClicked);
  }, [isClicked])
  

  return (
    <div className="BoardWrapper">
      {items.map((BoardData) => {
        const { image, name, role, id } = BoardData;
        return (
          <article className="BoardCard" key={id}>
            <img className="BoardImage" src={image} alt={name} />
            <p className="BoardName">{name}</p>
            <p className="BoardRole">{role}</p>
          </article>
        );
      })}
    </div>
  );
};

export default BoardCard;
