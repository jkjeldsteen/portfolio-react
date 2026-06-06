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
          Hey! I’m Jakob Kjeldsteen, a 26-year-old software developer currently studying for a Bachelor of Software Development with a specialization in Game Development. I also hold an AP degree in Computer Science from UCN Aalborg, Denmark.
        </p>
        <p>
          I’m primarily focused on C# and Unity development. Professionally, I’ve built Digital Twin simulations and real-time visualization systems integrating with industrial PLC systems. I’ve also worked extensively with backend systems using C#, MSSQL, PostgreSQL, and full-stack web development with React/TypeScript. One of my standout projects was building a full Consent Management Platform for Jyllands-Posten/Politiken, where I handled the C# backend, MSSQL database, and parts of the React frontend.
        </p>
        <p>
          Beyond professional work, game development is where my passion truly shines. I use the same C# and Unity expertise to create games, from polished prototypes to more ambitious projects. I’ve recreated classics like Asteroids and Doodle Jump, and I’m continuously working on original titles like Epoch Raiders. This blend of professional simulation work and personal game development has given me deep expertise in real-time systems, optimization, and creating engaging interactive experiences.
        </p>
        <p>
          I thrive working with other people by collaborating on complex technical challenges, solving architectural problems together, and building innovative systems as a team. Teamwork has taught me the value of good communication, adaptability, and shared vision. At the same time, I’m very self-driven and take ownership of my work from initial design all the way through to deployment and optimization.
        </p>
        <p>
          You can check out my games on {" "}
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#31ebad" }}
          >
            Itch.io
          </a>
          , and explore my {" "}
          <a
            href="https://github.com/jkjeldsteen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#31ebad" }}
          >
            GitHub
          </a>
          {" "}to see the work behind them.
        </p>
        <p>
          If you’re curious about my work, feel free to check out my {" "}
          <a href="#!" onClick={handleDownload} style={{ color: "#31ebad" }}>
            resumé
          </a>!
          Or just reach out. I’m always up for a chat or to build something awesome together!
        </p>
      </div>
    </div>
  );
}

export default About;
