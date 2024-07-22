import React from "react";
import "../components/styles/About.css";
import resumePdf from "../resources/resume.pdf";

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.setAttribute("download", "JakobKjeldsteen_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1>About Me</h1>
        <p>👋</p>
        <p>
          Hi there! I'm Jakob Kjeldsteen, a 24-year-old tech enthusiast with an
          AP degree in Computer Science from UCN Aalborg, Denmark. 🎓
        </p>
        <p>
          When I'm not coding, you'll find me diving into video games, either
          solo or with friends. Whether it's Minecraft, League of Legends,
          Counter-Strike, or countless others, I'm always up for a challenge! 🎮
        </p>
        <p>
          I'm also passionate about game development. I've dabbled in creating
          my own "indie" games, recreating classics like "Asteroids," "Doodle
          Jump," and "Geometry Dash." Curious? You can check out some of my
          creations right in your browser here:{" "}
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#31ebad" }}
          >
            Itch.io
          </a>
          .
        </p>
        <p>
          My love for gaming extends to the esports arena. I avidly follow major
          tournaments in League of Legends, Counter-Strike, and Rocket League.
          Fun fact: I even volunteered as a coach for a children's
          Counter-Strike team for a couple of years! 🏆
        </p>
        <p>
          Want to dive deeper into my journey? Take a peek at my{" "}
          <a href="#!" onClick={handleDownload} style={{ color: "#31ebad" }}>
            resumé
          </a>
          . 📄
        </p>
      </div>
    </div>
  );
}

export default About;
