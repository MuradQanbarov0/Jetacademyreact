import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function JetAcademyLanding() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default JetAcademyLanding;
