import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Navbar Title */}
      <h2 className="navbar-title">Gym Management</h2>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>
          Signup
        </Link>
        <Link to="/dashboard" className="nav-link" onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>
        <Link to="/workoutplan" className="nav-link" onClick={() => setMenuOpen(false)}>
          Workout Plans
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;