import React from "react";

function HeroText({ links = [] }) {
  return (
    <div className="hero-text">
      <button className="hashtag-button">
        <span className="emoji"></span>
        #yaratmağabaşla
      </button>

      <h1 className="hero-title">
        JET Academy-ə <span className="highlight">Xoş Gəlmisiniz!</span>
      </h1>

      <p className="hero-description">
        Burada texnologiya təhsili real praktiki bilik və bacarıqlarla birləşir.
        Fəaliyyətə başladığımız gündən etibarən əsas məqsədimiz yüksək
        keyfiyyətli, praktiki və karyera yönümlü təlim proqramları vasitəsilə
        növbəti nəsil IT mütəxəssislərini yetişdirməkdir.
        <br />
        <br />
        JET Academy-də biz inanırıq ki, texnologiya gələcəyin dilidir — və hər
        kəsin onu öyrənmək imkanı olmalıdır. Missiyamız IT təhsilini bütün yaş
        və təhsil səviyyələrindən olan insanlar üçün əlçatan, səmərəli və
        ilhamverici etməkdir.
      </p>

      {links &&
        links.map((link, index) => (
          <a key={index} href={link.href} className="hero-button-link">
            <button className="hero-button">
              {link.text}
              <span className="arrow">{link.arrow}</span>
            </button>
          </a>
        ))}
    </div>
  );
}

export default HeroText;
