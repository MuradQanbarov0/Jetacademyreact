import React from "react";
import "./CourseCard.css";

const CourseCard = ({
  title,
  description,
  weeksPerWeek,
  duration,
  tags,
  bgColor,
  image,
}) => {
  return (
    <div className="course-card" style={{ "--bg-color": bgColor }}>
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <p className="course-detail">Həftədə dərs sayı: {weeksPerWeek}</p>
      <p className="course-detail">Müddət: {duration}</p>

      <div className="course-image-placeholder">
        {image ? (
          <img src={image} alt={title} className="course-image" />
        ) : (
          <span className="course-image-text">Şəkil buraya</span>
        )}
      </div>

      <div className="course-tags">
        {tags.map((tag, index) => (
          <span key={index} className="course-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
