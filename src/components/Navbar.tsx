import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "../components/styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button for small screens */}
      <div className="toggle-btn" onClick={toggleNav}>
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Sidebar navigation */}
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <ul>
          {/* Use NavLink with className for active styling */}
          <li>
            <NavLink
              to="/"
              onClick={toggleNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              onClick={toggleNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              onClick={toggleNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://github.com/jkjeldsteen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jkjeldsteen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faItchIo} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
