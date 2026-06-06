import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Home.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resumePdf from "../resources/resume.pdf";
import profilePhoto from "../resources/images/pfpMarch2026.jpg";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Jakob Kjeldsteen</h1>
            <p className="hero-subtitle">
              Full-Stack Developer & Game Enthusiast
            </p>
            <p className="hero-description">
              Building digital simulations, developing games, and scalable backend systems.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/work">
                <Button variant="outline">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Get in Touch</Button>
              </Link>
              <a href={resumePdf} download="JakobKjeldsteen_Resume.pdf">
                <Button variant="outline">Download Resume</Button>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="hero-photo-container">
            <div className="photo-frame">
              <img src={profilePhoto} alt="Jakob Kjeldsteen" className="profile-photo" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="quick-stats-section">
        <div className="stat-card">
          <h3>1</h3>
          <p>Year Professional Experience</p>
        </div>
        <a href="https://github.com/jkjeldsteen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div className="stat-card stat-card-link">
            <h3>7+</h3>
            <p>Completed Projects</p>
          </div>
        </a>
        <div className="stat-card">
          <h3>Full-Stack</h3>
          <p>Backend, Frontend & Game Dev</p>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="featured-section">
        <h2>Featured Projects</h2>
        <div className="featured-projects-grid">
          <div className="featured-project">
            <div className="featured-text">
              <h3>Digital Twin & Simulation</h3>
              <p className="featured-type">Professional Development</p>
              <p className="featured-description">
                Advanced simulation systems and digital twin technology developed at JBT Marel. 
                Leveraging cutting-edge technologies to create virtual representations of 
                physical systems for concept development, optimization and analysis.
              </p>
              <div className="featured-tags">
                <Badge>Unity</Badge>
                <Badge>C#</Badge>
                <Badge>.NET</Badge>
                <Badge>Beckhoff</Badge>
                <Badge>Simulation</Badge>
                <Badge>Digital Twin</Badge>
              </div>
              <div className="featured-buttons">
                <Link to="/work">
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="featured-project">
            <div className="featured-text">
              <h3>Epoch Raiders</h3>
              <p className="featured-type">Personal Game Development</p>
              <p className="featured-description">
                A 2D top-down roguelike shooter with advanced enemy AI,
                procedural level design, custom pixel art animation, and
                engaging game mechanics. This is my most ambitious project,
                combining technical implementation with creative vision.
              </p>
              <div className="featured-tags">
                <Badge>Unity</Badge>
                <Badge>C#</Badge>
                <Badge>Game Design</Badge>
                <Badge>Pixel Art</Badge>
              </div>
              <div className="featured-buttons">
                <a href="https://jkjeldsteen.itch.io/epoch-raiders" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Play on Itch.io</Button>
                </a>
                <Link to="/devlogs">
                  <Button variant="outline">Read Devlogs</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Preview */}
      <div className="tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h4>Game Development</h4>
            <div className="tech-badges">
              <Badge>C#</Badge>
              <Badge>Unity</Badge>
            </div>
          </div>
          <div className="tech-category">
            <h4>Professional Development</h4>
            <div className="tech-badges">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Go</Badge>
              <Badge>C#</Badge>
              <Badge>.NET</Badge>
            </div>
          </div>
          <div className="tech-category">
            <h4>Databases & DevOps</h4>
            <div className="tech-badges">
              <Badge>PostgreSQL</Badge>
              <Badge>MSSQL</Badge>
              <Badge>Docker</Badge>
              <Badge>Kubernetes</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* About Snippet */}
      <div className="about-snippet-section">
        <h2>Who I Am</h2>
        <p>
          I'm a 26-year-old software developer currently pursuing a Bachelor's
          in Software Development with a Game Development specialization.
          Professionally, I've built digital twin simulations and backend systems
          for industrial applications. Outside work, I'm passionate about game
          development, creating engaging mechanics, polish, and interactive
          experiences. I thrive on solving complex technical challenges while
          maintaining creative vision.
        </p>
        <Link to="/about" className="learn-more-link">
          Learn more about me →
        </Link>
      </div>

      {/* Final CTA */}
      <div className="final-cta-section">
        <h2>Let's Build Something Together</h2>
        <p>
          Have a project in mind? Want to collaborate? I'm always interested
          in discussing innovative ideas, game mechanics, or technical challenges.
        </p>
        <Link to="/contact">
          <Button variant="default" className="large-button">
            Send Me a Message
          </Button>
        </Link>
      </div>

      {/* Photo Credit Footer */}
      <footer className="photo-credit">
        Photo by{" "}
        <a
          href="https://unsplash.com/@anasalshanti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anas Alshanti
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/focus-photography-of-computer-keyboard-with-red-lights-feXpdV001o4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </footer>
    </div>
  );
}

export default Home;
