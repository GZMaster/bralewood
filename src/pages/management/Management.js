import React, { useState } from "react";
import { ManagementData } from "./ManagementData";
import "./Management.scss";

const Management = () => {
  const [managementData] = useState(ManagementData);
  return (
    <div className="management_container">
      <div className="management_content">
        <h1>Board of Directors</h1>
        {managementData.map((data) => {
          const { name, title, description, list } = data;
          return (
            <div>
              <h1>{name}</h1>
              <h2>{title}</h2>
              <p>{description}</p>
              {!list
                ? null
                : list.map(({ id, text }) => (
                    <ul>
                      <li>{text}</li>
                    </ul>
                  ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Management;
