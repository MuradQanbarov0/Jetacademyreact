import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="Jet Academy logo" />
      </div>

      <div className="navbar-links">
        <a href="#" className="nav-link">
          Ana Səhifə
        </a>
        <a href="#" className="nav-link">
          Haqqımızda
        </a>
        <a href="#" className="nav-link">
          Tədris Sahələri
        </a>
        <a href="#" className="nav-link">
          Kampaniyalar
        </a>
        <a href="#" className="nav-link">
          Əlaqə
        </a>
      </div>

      <button className="call-button">
        <img src="../assets/call.png" alt="" /> Zəng sifarişi
      </button>
    </nav>
  );
}

export default Navbar;
