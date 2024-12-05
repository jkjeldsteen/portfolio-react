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
          Hi there! I'm Jakob Kjeldsteen, a 24-year-old software developer with
          an AP degree in Computer Science from UCN Aalborg, Denmark. 🎓
        </p>
        <p>
          I specialize in backend and fullstack development, with hands-on
          experience in C#, MSSQL, PostgreSQL, and React/TypeScript. I've worked
          on complex projects, including a Consent Management Platform developed
          in collaboration with Jyllands-Posten/Politiken, where I built a
          robust backend in C# integrated with an MSSQL database and a
          user-friendly React-based frontend.
        </p>
        <p>
          Collaboration is at the heart of my work ethic. I thrive in team
          environments, contributing with clear communication, problem-solving,
          and a willingness to support my colleagues. At the same time, I am
          highly self-driven and take responsibility for delivering high-quality
          solutions independently.
        </p>
        <p>
          Beyond coding, I’m passionate about game development, crafting indie
          games that explore unique mechanics and ideas. I've recreated classics
          like Asteroids and Doodle Jump while also diving into my own
          creations, such as Epoch Raiders. You can explore some of these
          projects on{" "}
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#31ebad" }}
          >
            Itch.io
          </a>
        </p>
        <p>
          When I’m not developing, you’ll find me exploring video games,
          cheering for my favorite esports teams, or volunteering in gaming
          communities. Fun fact: I spent two years coaching a Youth
          Counter-Strike team, combining my love for gaming and mentorship.
        </p>
        <p>
          Curious about my professional journey? Take a look at my{" "}
          <a href="#!" onClick={handleDownload} style={{ color: "#31ebad" }}>
            resumé
          </a>
          . 📄 or reach out for a chat. Let’s create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
