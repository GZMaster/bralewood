import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  console.log(useLocation);

  return (
    <div className="App">
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
