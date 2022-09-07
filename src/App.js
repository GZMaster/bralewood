import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar className="navbar" />
      </div>

      <Outlet className="body" />
      <Footer />
    </div>
  );
}

export default App;
