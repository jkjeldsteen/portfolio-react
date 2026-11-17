import { Link } from "react-router-dom";
import "../components/styles/Home.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import resumePdf from "../resources/resume.pdf";
import gameplay from "../resources/images/GameplayScreenshot.png";
import profilePhoto from "../resources/images/pfpMarch2026.jpg";

function Home() {
  return (
    <main className="home-wrapper">
      <div className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Jakob Kjeldsteen</h1>
            <p className="hero-subtitle">
              Software Developer
            </p>
            <p className="hero-description">
              I build backend services, industrial integrations, and simulations.
            </p>

            <div className="cta-buttons">
              <Button asChild>
                <Link to="/work">View My Work</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={resumePdf} download="JakobKjeldsteen_Resume.pdf">Download Resume</a>
              </Button>
              <Button asChild variant="link">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          <img src={profilePhoto} alt="Jakob Kjeldsteen" className="profile-photo" />
        </div>
      </div>

      <div className="featured-section">
        <h2>Featured Projects</h2>
        <div className="featured-projects-grid">
          <article className="featured-project">
            <div className="featured-text">
              <h3>Digital Twin & Simulation</h3>
              <p className="featured-type">Professional Development</p>
              <p className="featured-description">
                At JBT Marel, I helped develop a Unity-based digital twin for a new machine and integrated the simulation with a Beckhoff PLC.
              </p>
              <div className="featured-tags">
                <Badge>Unity</Badge>
                <Badge>C#</Badge>
                <Badge>.NET</Badge>
                <Badge>Beckhoff</Badge>
                <Badge>Simulation</Badge>
                <Badge>Digital Twin</Badge>
              </div>
              <div className="featured-buttons -ml-4">
                <Button asChild variant="link">
                  <Link to="/work">View Professional Work</Link>
                </Button>
              </div>
            </div>
          </article>

          <article className="featured-project">
            <div className="featured-text">
              <h3>Epoch Raiders</h3>
              <p className="featured-type">Personal Game Development</p>
              <img className="project-image" src={gameplay} alt="Epoch Raiders gameplay" loading="lazy" />
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
              <div className="featured-buttons -ml-4">
                <Button asChild variant="link">
                  <a href="https://jkjeldsteen.itch.io/epoch-raiders" target="_blank" rel="noopener noreferrer">Play on Itch.io</a>
                </Button>
                <Button asChild variant="link">
                  <Link to="/devlogs">Read Devlogs</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h3>Game Development</h3>
            <div className="tech-badges">
              <Badge>C#</Badge>
              <Badge>Unity</Badge>
            </div>
          </div>
          <div className="tech-category">
            <h3>Professional Development</h3>
            <div className="tech-badges">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Go</Badge>
              <Badge>C#</Badge>
              <Badge>.NET</Badge>
            </div>
          </div>
          <div className="tech-category">
            <h3>Databases & DevOps</h3>
            <div className="tech-badges">
              <Badge>PostgreSQL</Badge>
              <Badge>MSSQL</Badge>
              <Badge>Docker</Badge>
              <Badge>Kubernetes</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="about-snippet-section">
        <h2>Who I Am</h2>
        <p>
          I work across backend development and industrial software, from payment and recommendation services to factory simulations. Outside work, I build 2D and 3D games in Unity with C#.
        </p>
        <Link to="/about" className="learn-more-link">
          Learn more about me →
        </Link>
      </div>

      <div className="final-cta-section">
        <h2>Let's Build Something Together</h2>
        <p>
          Have a project in mind? Want to collaborate? I'm always interested
          in discussing innovative ideas, game mechanics, or technical challenges.
        </p>
        <Button asChild variant="outline">
          <Link to="/contact">Send Me a Message</Link>
        </Button>
      </div>
    </main>
  );
}

export default Home;
