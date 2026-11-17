import "../components/styles/About.css";
import resumePdf from "../resources/resume.pdf";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I’m a software developer with experience in industrial software, backend services, and integrations. At JBT Marel in Støvring, I work on an internal ordering system and a Unity simulation that connects to a Beckhoff PLC. I also contribute to software architecture and coordinate with stakeholders.
        </p>
        <p>
          I earned a professional bachelor’s degree in Software Development with a specialization in Game Development at Dania Games. I also hold an AP degree in Computer Science from UCN Aalborg, where my final project with JP / Politiken was a proof of concept for an internal consent management platform.
        </p>
        <p>
          In my spare time, I build 2D and 3D games in Unity with C#. Working on Epoch Raiders lets me explore how gameplay systems, enemy behavior, and animation fit together.
        </p>
        <p>
          You can check out my games on {" "}
          <a
            href="https://jkjeldsteen.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Itch.io
          </a>
          , and explore my {" "}
          <a
            href="https://github.com/jkjeldsteen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" "}to see the work behind them.
        </p>
        <p>
          <a href={resumePdf} download="JakobKjeldsteen_Resume.pdf">Download my résumé</a>
        </p>
      </div>
    </div>
  );
}

export default About;
