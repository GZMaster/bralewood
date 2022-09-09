import React, { useState, useEffect } from "react";
import "./BoardCard.scss";
import { FaLinkedin } from "react-icons/fa";

const BoardCard = ({ items }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(isClicked);
  }, [isClicked])
  

  return (
    <div className="BoardWrapper">
      {items.map((BoardData) => {
        const { image, name, role, id, linkedin } = BoardData;
        return (
          <article className="BoardCard" key={id}>
            <img className="BoardImage" src={image} alt={name} />
            <p className="BoardName">{name}</p>
            <div className="card_details">
              <p className="BoardRole">{role}</p>
              <a
                href={linkedin}
                className="board_icon_linkedin"
                target={"_blank"}
                rel="noreferrer"
                >
                <FaLinkedin />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BoardCard;
