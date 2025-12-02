import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <main className="hero-main">
      <div className="hero-container">
        <div className="hero-text">
          <button className="hashtag-button">
            <span className="emoji"></span>
            #yaratmağabaşla
          </button>

          <h1 className="hero-title">
            JET Academy-ə <span className="highlight">Xoş Gəlmisiniz!</span>
          </h1>

          <p className="hero-description">
            Burada texnologiya təhsili real praktiki bilik və bacarıqlarla
            birləşir. Fəaliyyətə başladığımız gündən etibarən əsas məqsədimiz
            yüksək keyfiyyətli, praktiki və karyera yönümlü təlim proqramları
            vasitəsilə növbəti nəsil IT mütəxəssislərini yetişdirməkdir.
            <br />
            <br />
            JET Academy-də biz inanırıq ki, texnologiya gələcəyin dilidir — və
            hər kəsin onu öyrənmək imkanı olmalıdır. Missiyamız IT təhsilini
            bütün yaş və təhsil səviyyələrindən olan insanlar üçün əlçatan,
            səmərəli və ilhamverici etməkdir.
          </p>

          <a href="/courses" className="hero-button-link">
            <button className="hero-button">
              Tədris sahələri
              <span className="arrow">→</span>
            </button>
          </a>
        </div>

        <div className="hero-image-placeholder">
          <img
            alt="Team member Ramin Məmmədzadə"
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className="w-full h-full object-cover"
            src="https://api.jetacademy.az/uploads/team/raminsayt-1761312887213.webp"
          />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
