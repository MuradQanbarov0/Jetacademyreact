import React from "react";
import CourseCard from "./CourseCard";
import coursesData from "../data/coursesData";
import "./MainCourses.css";

const MainCourses = () => {
  return (
    <div className="main-courses">
      <div className="courses-header">
        <h1 className="courses-title">Tədris Sahələri</h1>
        <p className="courses-description">
          JET Academy-də tədris sahələri müasir əmək bazarının tələblərinə uyğun
          formalaşdırılıb. Hər bir sahə üzrə proqramlar praktiki bilikləri, real
          layihələrə və peşəkar müəllif imkanlarına əsaslanır
        </p>
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default MainCourses;
