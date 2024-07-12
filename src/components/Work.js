import React from 'react';
import './styles/Work.css';

function Work() {
    return (
        <div className="main-content">
            <div className="projects-container">
                <div className="project-card">
                    <h2>Game development</h2>
                    <p>
                        I make video games in my spare time mostly using the Unity game engine. Check <a href="https://jkjeldsteen.itch.io" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>it out here</a>.
                        I have for example reinterpreted <a href="https://jkjeldsteen.itch.io/warthog-defence" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>Asteroids</a>, 
                        <a href="https://jkjeldsteen.itch.io/square-jumper" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>Geometry Dash</a>, and 
                        <a href="https://jkjeldsteen.itch.io/bouncy-pirate" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>Doodle Jump</a>. And then I've also made a couple of my own games. I really think you should check out my tower defense inspired game
                        <a href="https://jkjeldsteen.itch.io/gold-mine-defender" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>Gold mine defender</a> 😉
                    </p>
                </div>
                <a href="https://blackcapitaltechnology.com" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>Backend Developer Intern at Black Capital Technology (Click me 😉)</h2>
                    <p>July 2024 (Aalborg). As part of my search for a job, I went into an internship with Black Capital Technology as a backend developer on some internal projects. I gained experience as a backend developer using the Go programming language. I was also introduced to working in a small team combined of remote and on-site workers.</p>
                </a>
                <a href="https://nordicscreen.com/da/forside/" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>Full-stack Developer Intern at NordicScreen (Click me 😉)</h2>
                    <p>August 2023 - October 2023 (Randers). During my computer science education, I completed a 10-week company internship at NordicScreen in Randers, where I gained valuable experience as a full-stack developer. I worked on various tasks and programming languages, including JavaScript, TypeScript, React, and PHP. Additionally, I participated in the development of an app designed for Samsung TV based on Tizen 6.5.</p>
                </a>
                <a href="https://github.com/BubbleDK/DMA-Final-Exam"  target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>POC Consent Management Platform for JP/Politiken (Click me 😉)</h2>
                    <p>In the fifth semester of my computer science education, we collaborated with JP/Politiken to develop a Proof of Concept for an internally owned Consent Management Platform. The system should be able to handle the scanning of cookies on a domain and store this information in a database. Additionally, it should have an admin dashboard to manage cookies on various domains and an informative popup for visiting users on JP's domains.</p>
                </a>
                <a href="https://github.com/BubbleDK/xtellio-ucn-gruppe12" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>POC Dashboard Tool for Xtellio (Click me 😉)</h2>
                    <p>In the fourth semester of my computer science education, we collaborated with a local company to develop a dashboard for managing and visualizing data from a large pool of various IoT devices. We selected a range of key figures in collaboration with Xtellio, and these figures were then visualized in various graphs for better understanding of one's device pool. The front-end was developed in Vue.js, and using a JavaScript API, we could fetch data from Xtellio's backend and modify it before sending it to the front-end.</p>
                </a>
                <a href="https://github.com/BubbleDK/3_semesterprojekt/tree/main" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>Booking System for Internet Café (Click me 😉)</h2>
                    <p>In the third semester of my computer science education, I collaborated with my exam group to develop a booking system for an internet café. The system could handle booking of seats based on a calendar and time slots. Additionally, customers could add orders for soda, snacks, etc. The system consisted of a backend made in C# and .NET with an SQL database, and a front-end made in WinForms.</p>
                </a>
                <a href="https://github.com/BubbleDK/2-semesterProjekt" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h2>Gift Solution System for Kop & Kande (Click me 😉)</h2>
                    <p>In the second semester of my computer science education, I collaborated with my exam group to develop a demo version of a system for a local Kop & Kande store. The system could manage inventory and serve as a gift solution for Kop & Kande's customers. Backend developed in Java with a relational SQL database, front-end developed in WindowBuilder in Eclipse.</p>
                </a>
            </div>
        </div>
    );
}

export default Work;
