import React, { useState } from "react";
import "./Hambuger.scss";

const Panel = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="#">You</a>
          </li>
          <li>
            <a href="#">Look</a>
          </li>
          <li>
            <a href="#">Nice</a>
          </li>
          <li>
            <a href="#">Today</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Panel;
