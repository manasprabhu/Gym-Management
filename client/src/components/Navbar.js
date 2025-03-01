import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Gym Management</h2>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/assignworkouts" className="nav-link">Workout Plans</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;