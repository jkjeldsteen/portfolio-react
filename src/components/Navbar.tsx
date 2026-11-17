import { useEffect, useRef, useState } from "react";
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

  const menuButton = useRef<HTMLButtonElement>(null);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div>
      {/* Toggle button for small screens */}
      <button
        ref={menuButton}
        type="button"
        className="toggle-btn"
        aria-controls="site-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar navigation */}
      <nav id="site-navigation" aria-label="Main navigation" className={`sidenav ${isOpen ? "open" : ""}`}>
        <ul>
          {/* Use NavLink with className for active styling */}
          <li>
            <NavLink
              to="/"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devlogs"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Epoch Raiders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="social-icons">
          <a
            aria-label="GitHub" href="https://github.com/jkjeldsteen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            aria-label="LinkedIn" href="https://www.linkedin.com/in/jkjeldsteen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            aria-label="Itch.io" href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faItchIo} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
