import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Interlude from "./pages/Interlude/Interlude";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import "./App.css";

function App() {
  const [pathName, setPathName] = useState(useLocation().pathname);

  useEffect(() => {
    setPathName(useLocation.pathname);
    console.log("pathName", pathName);
  }, [pathName]);

  return (
    <div className="App">
      <NavBar />

      {pathName !== "/" ? (
        <Outlet />
      ) : (
        <>
          <Home />
          <About />
          <Interlude />
          <Services />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
