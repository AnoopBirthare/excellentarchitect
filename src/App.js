import React, { useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CarouselComp from "./components/Carousle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsCards from "./components/DetailsCards";
import TeamCards from "./components/TeamCards";
import ElevationDesigns from "./components/ElevationDesigns";

const App = () => {
  const handleRef = (toscroll) => {
    const headerRef = document.getElementById("header");
    const carouselRef = document.getElementById("carousel");
    const designsRef = document.getElementById("designs");
    const detailsRef = document.getElementById("details");
    const teamsRef = document.getElementById("teams");
    const footerRef = document.getElementById("footer");

    if (toscroll == "header") headerRef.scrollIntoView({ behavior: "smooth" });
    if (toscroll == "carousel") carouselRef.scrollIntoView();
    if (toscroll == "designs") designsRef.scrollIntoView();
    if (toscroll == "details") detailsRef.scrollIntoView();
    if (toscroll == "teams") teamsRef.scrollIntoView();
    if (toscroll == "footer") footerRef.scrollIntoView();
  };

  return (
    <div className="App" style={{ flex: 1 }}>
      <div
        id="header"
        style={{
          position: window.innerWidth > 1000 ? "fixed" : "static",
          zIndex: 2,
          width: "100%",
          backgroundColor: "rgba(65, 79, 91,.90)",
        }}
      >
        <Header handleRef={handleRef} />
      </div>
      <div style={{}}>
        <CarouselComp />
        <DetailsCards />
        <ElevationDesigns />
        <TeamCards />
        <Footer handleRef={handleRef} />
      </div>
    </div>
  );
};

export default App;
