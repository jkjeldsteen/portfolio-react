import React from 'react';
import './styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faNode, faJava, faPhp, faGitAlt,  faStripe } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize, faWindowRestore, faDatabase, faCloud, faProjectDiagram, faTasks} from '@fortawesome/free-solid-svg-icons';
import csharplogo from '../resources/images/csharp.png'
import golanglogo from '../resources/images/Golang.png'

function Skills() {
    return (
        <div className="container">
            <div className="skills-category">
                <h2>Frontend</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
                    <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
                    <li><FontAwesomeIcon icon={faJs} /> TypeScript</li>
                    <li><FontAwesomeIcon icon={faReact} /> React</li>
                    <li><FontAwesomeIcon icon={faVuejs} /> Vue</li>
                    <li><FontAwesomeIcon icon={faWindowMaximize} /> WindowBuilder</li>
                    <li><FontAwesomeIcon icon={faWindowRestore} /> WinForms</li>
                </ul>
            </div>

            <div className="skills-category">
                <h2>Backend</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
                    <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
                    <li><FontAwesomeIcon icon={faDatabase} /> MSSQL</li>
                    <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
                    <li><FontAwesomeIcon icon={faCloud} /> REST APIs</li>
                    {/* Replace image with Font Awesome icon or leave as is */}
                    <li><img src={csharplogo} alt="C#" /> C#</li>
                    <li><FontAwesomeIcon icon={faJava} /> Java</li>
                    {/* Replace image with Font Awesome icon or leave as is */}
                    <li><img src={golanglogo} alt="GoLang" /> Go</li>
                    <li><FontAwesomeIcon icon={faPhp} /> PHP</li>
                </ul>
            </div>

            <div className="skills-category">
                <h2>Extra</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
                    <li><FontAwesomeIcon icon={faProjectDiagram} /> Agile</li>
                    <li><FontAwesomeIcon icon={faTasks} /> Unified Process</li>
                    <li><FontAwesomeIcon icon={faStripe} /> Stripe</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
