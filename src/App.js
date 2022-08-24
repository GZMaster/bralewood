import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import UseMediaQuery from "./components/mediaquery/UseMediaQuery";
import "./App.css";

function App() {
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="App">
      <div>
        {isPageWide ? (
          <NavBar className="navbar" />
        ) : null
        // <SideBar
        //   pageWrapId={"page-wrap"}
        //   outerContainerId={"outer-container"}
        //   className="sidebar"
        // />

        // remove later
        // <NavBar className="navbar" />
        }
      </div>
      <Outlet className="body" />
    </div>
  );
}

export default App;
