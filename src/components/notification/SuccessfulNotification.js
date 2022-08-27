import React from "react";
import "./successfulnotification.scss";

const SuccessfulNotification = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

export default SuccessfulNotification;
