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
  const { pathName } = useLocation;
  const [changePage, setChangePage] = useState(false);

  console.log(useLocation);

  // useEffect(() => {
  //   if (pathName === "/" && undefined) {
  //     setChangePage(false);
  //   } else {
  //     setChangePage(true);
  //   }

  //   console.log(pathName);
  //   console.log(changePage);
  // }, [pathName]);

  return (
    <div className="App">
      <NavBar />

      {changePage === false ? (
        <>
          <Home />
          <About />
          <Interlude />
          <Services />
          <Contact />
        </>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
}

export default App;
