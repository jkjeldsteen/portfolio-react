import "../components/styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faTasks } from "@fortawesome/free-solid-svg-icons";
import javascriptIcon from "../resources/svg/javascript-svgrepo-com.svg";
import typescriptIcon from "../resources/svg/typescript-icon-svgrepo-com.svg";
import reactIcon from "../resources/svg/react-svgrepo-com.svg";
import vueIcon from "../resources/svg/vue-svgrepo-com.svg";
import sqlIcon from "../resources/svg/sql-svgrepo-com.svg";
import postgresIcon from "../resources/svg/postgresql-svgrepo-com.svg";
import csharpIcon from "../resources/svg/csharp-svgrepo-com.svg";
import javaIcon from "../resources/svg/java-svgrepo-com.svg";
import golangIcon from "../resources/svg/golang-svgrepo-com.svg";
import Golang from "../resources/svg/Go-Logo_Aqua.svg";
import gitIcon from "../resources/svg/git-svgrepo-com.svg";
import agileIcon from "../resources/svg/scrum-svgrepo-com.svg";
import stripeIcon from "../resources/svg/stripe-svgrepo-com.svg";
import kubernetesIcon from "../resources/svg/kubernetes-svgrepo-com.svg";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h1>Skills</h1><div className="skills-category">
          <h2>Backend:</h2>
          <ul>
            <li>
              <img src={csharpIcon} alt="C#" className="icon" />
              <span>C#</span>
            </li>
            <li>
              <img src={Golang} alt="Go" className="icon" />
              <span>GoLang</span>
            </li>
            <li>
              <img src={javaIcon} alt="Java" className="icon" />
              <span>Java</span>
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
              <FontAwesomeIcon icon={faCloud} size="3x" className="blackIcon" />
              <span>REST APIs</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Frontend:</h2>
          <ul>
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
              <FontAwesomeIcon icon={faDocker} size="3x" className="blackIcon" />
              <span>Docker</span>
            </li> 
            <li>
              <img src={kubernetesIcon} alt="K8s" className="icon" />
              <span>Kubernetes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
