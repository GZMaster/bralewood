import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar className="navbar" />
      </div>

      <Outlet className="body" />
    </div>
  );
}

export default App;
