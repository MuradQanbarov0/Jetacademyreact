import React from "react";
import "./Navbar.css";

function Navbar() {
  const navLinks = [
    { text: "Ana Səhifə", href: "#" },
    { text: "Haqqımızda", href: "#" },
    { text: "Tədris Sahələri", href: "#" },
    { text: "Kampaniyalar", href: "#" },
    { text: "Əlaqə", href: "#" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="Jet Academy logo" />
      </div>

      <div className="navbar-links">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="nav-link">
            {link.text}
          </a>
        ))}
      </div>

      <button className="call-button">
        <img src="../assets/call.png" alt="" /> Zəng sifarişi
      </button>
    </nav>
  );
}

export default Navbar;
