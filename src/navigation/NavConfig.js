import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MoreAbout from "../pages/moreabout/MoreAbout";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<MoreAbout />} /> */}
        <Route path="/moreabout" element={<MoreAbout />} />
        {/* <Route path="/*" element={<App />} /> */}
      </Route>
    </Routes>
  );
};

export default NavConfig;
