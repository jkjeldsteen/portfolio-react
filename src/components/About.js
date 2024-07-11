import React from 'react';
import './styles/About.css';
import resumePdf from '../resources/resume.pdf';

function About() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.setAttribute('download', 'JakobKjeldsteen_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div class="home-content">
        <h1>About me</h1>
        <p>My name is Jakob Kjeldsteen, and i am 24 years old. I've studied and completed an AP degree in Computer Science from UCN Aalborg, Denmark</p>
        <p>In my spare time i like to play video games with friends or sometimes alone. I mostly play online multiplayer games ranging from Minecraft to League of Legends
            to Counter-Strike and much more</p>
        <p>I also take interest in video game development and sometimes try by myself to develop smaller "indie" games, i've done recreations of popular games like "Asteroids" "Doodle Jump"
             and "Geometry Dash". You can try some of my games in your browser here: <a href="https://jkjeldsteen.itch.io" target="_blank" rel="noopener noreferrer" style={{color: "#777a99"}}>Itch.io</a></p>
        <p>As part of my heavy interest for video games i also take a liking to esports and follow games like League of Legends, Counter-Strike and Rocket League on the big stages. 
            I also volunteered as a coach for a childrens Counter-Strike team for a couple years</p>
        <p>If you wanna know more you should take a look at my <a href="#!" onClick={handleDownload} style={{color: "#777a99"}}>resumé</a></p>
    </div>
    );
}

export default About;
