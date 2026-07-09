import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Civic<span>Pulse</span>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <NavLink to="/report" onClick={() => setMenuOpen(false)}>
            Report Issue
          </NavLink>

          {/* Mobile Login Button */}
          <Link
            to="/login"
            className="mobile-login-btn"
            onClick={() => setMenuOpen(false)}
          >
            <FaUserCircle />
            Login
          </Link>

        </nav>

        {/* Desktop Login Button */}
        <div className="nav-action">

          <Link to="/login" className="login-btn">
            <FaUserCircle />
            Login
          </Link>

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;