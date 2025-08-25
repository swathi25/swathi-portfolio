import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Swathi</div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className="cv-link">
          <a
            href="/Swathi Frontend Developer.pdf"
            target="_blank"
            download
            onClick={closeMenu}
          >
            Download CV
          </a>
        </li>
      </div>

      {/* ✅ Desktop CV button */}
      <a
        className="download desktop-only"
        href="/Swathi Frontend Developer.pdf"
        target="_blank"
        download
      >
        Download CV
      </a>

      {/* ✅ Animated Hamburger */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ✅ Dark overlay backdrop */}
      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
