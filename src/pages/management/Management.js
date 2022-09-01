import React, { useState } from "react";
import { ManagementData } from "./ManagementData";
import "./Management.scss";

const Management = () => {
  const [managementData] = useState(ManagementData);
  return (
    <div className="management_container">
      <div className="management_content">
        <div className="management_content_img">
          <h1 className="management_head_text">Board of Directors</h1>
        </div>

        {managementData.map((data) => {
          const { name, title, description, list } = data;
          return (
            <div className="management_card_holder">
              <h1 className="management_name">{name}</h1>
              <h2 className="management_title">{title}</h2>
              <p className="management_description">{description}</p>
              {!list
                ? null
                : list.map(({ id, text }) => (
                    <ul className="management_unordered">
                      <li className="management_list">{text}</li>
                    </ul>
                  ))}
            </div>
          );
        })}

        <div className="management_footer_img">
          <h1 className="management_head_text">
            world-class financial services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Management;
