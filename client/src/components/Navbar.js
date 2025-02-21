import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Gym Management</h2>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/assignworkouts" className="nav-link">Assign Workouts</Link>
      </div>
    </nav>
  );
}

export default Navbar;