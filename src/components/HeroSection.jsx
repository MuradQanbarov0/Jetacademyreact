import React from "react";
import "./HeroSection.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <main className="hero-main">
      <div className="hero-container">
        <HeroText />
        <HeroImage />
      </div>
    </main>
  );
}

export default HeroSection;
