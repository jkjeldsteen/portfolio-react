import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Toggle button for small screens */}
            <div className="toggle-btn" onClick={toggleNav}>☰</div>
            
            {/* Sidebar navigation */}
            <div className={`sidenav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li><Link to="/work" onClick={toggleNav}>Work</Link></li>
                    <li><Link to="/about" onClick={toggleNav}>About</Link></li>
                    <li><Link to="/skills" onClick={toggleNav}>Skills</Link></li>
                </ul>
                <div className="social-icons">
                <a href="https://github.com/jkjeldsteen" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/jkjeldsteen/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://jkjeldsteen.itch.io" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faItchIo} />
                    </a>
                </div>
            </div>
            <div className="toggle-btn" onClick={toggleNav}>☰</div>
        </div>
    );
}

export default Navbar;
