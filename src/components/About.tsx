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
          Hey! I’m Jakob Kjeldsteen — a 25-year-old software developer currently studying for a Bachelor of Software Development with a specialization in Game Development. I also hold an AP degree in Computer Science from UCN Aalborg, Denmark.
        </p>
        <p>
          I’ve spent the last few years working with C#, MSSQL, PostgreSQL, and React/TypeScript, mostly doing backend and full-stack development. One of my biggest projects was building a full Consent Management Platform together with Jyllands-Posten/Politiken, where I handled everything from the C# backend and MSSQL database to parts of the React frontend.
        </p>
        <p>
          I love working with other people — bouncing ideas around, solving problems together, and building cool things as a team. Game Jams have been a huge part of that for me; there’s something really exciting about collaborating under pressure, turning rough ideas into playable prototypes, and learning from everyone involved. At the same time, I’m very self-driven and enjoy taking ownership of features and seeing them all the way from idea to final, polished result.
        </p>
        <p>
          But at the end of the day, game development is where my passion really shines. I’m constantly experimenting with new mechanics, building prototypes, and challenging myself to learn more about game design and programming. I’ve recreated classics like Asteroids and Doodle Jump, and I've been working on my own original projects like Epoch Raiders. You can check out some of my games on {" "}
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#31ebad" }}
          >
            Itch.io
          </a>
           . I love sharing what I make.
        </p>
        <p>
          When I'm not coding, I’m usually playing games, following esports, or hanging out in gaming communities. And fun fact: I spent two years coaching a youth Counter-Strike team, which combined my love of gaming with teaching and mentoring.
        </p>
        <p>
          If you're curious about my work, feel free to check out my {" "}
          <a href="#!" onClick={handleDownload} style={{ color: "#31ebad" }}>
            resumé
          </a>!
          or just reach out. I’m always up for a chat — or to build something awesome together!
        </p>
      </div>
    </div>
  );
}

export default About;
