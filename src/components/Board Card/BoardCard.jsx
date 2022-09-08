import React from "react";
import "./BoardCard.scss";

const BoardCard = ({ items }) => {
  return (
    <div className="BoardWrapper">
      {items.map((BoardData) => {
        const { image, name, role, id, achievements } = BoardData;
        return (
          <article className="BoardCard" key={id}>
            <img className="BoardImage" src={image} alt={name} />
            <p className="BoardName">{name}</p>
            <p className="BoardRole">{role}</p>

            {!achievements
              ? null
              : achievements.map((e) => {
                  const { id, achieved } = e;
                  return (
                    <li className="BoardAchieve" key={id}>
                      {achieved}
                    </li>
                  );
                })}
          </article>
        );
      })}
    </div>
  );
};

export default BoardCard;
