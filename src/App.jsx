import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainCourses from "./components/main-courses";

function JetAcademyLanding() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MainCourses />
    </div>
  );
}

export default JetAcademyLanding;
