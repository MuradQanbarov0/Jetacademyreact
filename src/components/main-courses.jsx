import React from "react";
import CourseCard from "./CourseCard";
import coursesData from "../data/coursesData";

const MainCourses = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Tədris Sahələri
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        JET Academy-də tədris sahələri müasir əmək bazarının tələblərinə uyğun
        formalaşdırılıb. Hər bir sahə üzrə proqramlar praktiki bilikləri, real
        layihələrə və peşəkar müəllif imkanlarına əsaslanır
      </p>

      <div>
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default MainCourses;
