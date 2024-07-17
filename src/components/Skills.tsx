import React from "react";
import "../components/styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMaximize,
  faWindowRestore,
  faCloud,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import html5Icon from "../resources/svg/html-5-svgrepo-com.svg";
import css3Icon from "../resources/svg/css-3-svgrepo-com.svg";
import javascriptIcon from "../resources/svg/javascript-svgrepo-com.svg";
import typescriptIcon from "../resources/svg/typescript-icon-svgrepo-com.svg";
import reactIcon from "../resources/svg/react-svgrepo-com.svg";
import vueIcon from "../resources/svg/vue-svgrepo-com.svg";
import nodeJsIcon from "../resources/svg/nodejs-svgrepo-com.svg";
import mongoDBIcon from "../resources/svg/mongodb-logo-svgrepo-com.svg";
import sqlIcon from "../resources/svg/sql-svgrepo-com.svg";
import postgresIcon from "../resources/svg/postgresql-svgrepo-com.svg";
import csharpIcon from "../resources/svg/csharp-svgrepo-com.svg";
import javaIcon from "../resources/svg/java-svgrepo-com.svg";
import golangIcon from "../resources/svg/golang-svgrepo-com.svg";
import phpIcon from "../resources/svg/php2-svgrepo-com.svg";
import gitIcon from "../resources/svg/git-svgrepo-com.svg";
import agileIcon from "../resources/svg/scrum-svgrepo-com.svg";
import stripeIcon from "../resources/svg/stripe-svgrepo-com.svg";

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-category">
          <h2>Frontend:</h2>
          <ul>
            <li>
              <img src={html5Icon} alt="HTML5" className="icon" />
              <span>HTML</span>
            </li>
            <li>
              <img src={css3Icon} alt="CSS3" className="icon" />
              <span>CSS</span>
            </li>
            <li>
              <img src={javascriptIcon} alt="JavaScript" className="icon" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src={typescriptIcon} alt="TypeScript" className="icon" />
              <span>TypeScript</span>
            </li>
            <li>
              <img src={reactIcon} alt="React" className="icon" />
              <span>React</span>
            </li>
            <li>
              <img src={vueIcon} alt="Vue" className="icon" />
              <span>Vue</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faWindowMaximize}
                size="3x"
                className="blackIcon"
              />
              <span>WindowBuilder</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faWindowRestore}
                size="3x"
                className="blackIcon"
              />
              <span>WinForms</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Backend:</h2>
          <ul>
            <li>
              <img src={csharpIcon} alt="C#" className="icon" />
              <span>C#</span>
            </li>
            <li>
              <img src={golangIcon} alt="Go" className="icon" />
              <span>Go</span>
            </li>
            <li>
              <img src={javaIcon} alt="Java" className="icon" />
              <span>Java</span>
            </li>
            <li>
              <img src={phpIcon} alt="PHP" className="icon" />
              <span>PHP</span>
            </li>
            <li>
              <img src={mongoDBIcon} alt="MongoDB" className="icon" />
              <span>MongoDB</span>
            </li>
            <li>
              <img src={sqlIcon} alt="MSSQL" className="icon" />
              <span>MSSQL</span>
            </li>
            <li>
              <img src={postgresIcon} alt="PostgreSQL" className="icon" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <img src={nodeJsIcon} alt="Node.js" className="icon" />
              <span>Node.js</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCloud} size="3x" className="blackIcon" />
              <span>REST APIs</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Extra:</h2>
          <ul>
            <li>
              <img src={stripeIcon} alt="Stripe" className="icon" />
              <span>Stripe</span>
            </li>
            <li>
              <img src={gitIcon} alt="Git" className="icon" />
              <span>Git</span>
            </li>
            <li>
              <img src={agileIcon} alt="Agile" className="blackIcon" />
              <span>Agile</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTasks} size="3x" className="blackIcon" />
              <span>Unified Process</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
