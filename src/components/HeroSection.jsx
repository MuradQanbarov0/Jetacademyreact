import React from "react";
import "./HeroSection.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function HeroSection() {
  const heroLinks = [
    { text: "Kursları Bax", href: "#courses", arrow: "→" },
    { text: "Haqqımızda Daha Çox", href: "#about", arrow: "→" },
  ];

  return (
    <main className="hero-main">
      <div className="hero-container">
        <HeroText links={heroLinks} />
        <HeroImage />
      </div>
    </main>
  );
}

export default HeroSection;
