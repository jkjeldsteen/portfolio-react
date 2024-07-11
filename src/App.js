import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';

function App() {
    return (
        <Router>
            <Navbar/>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/work" element={<Work/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
              </Routes>
        </Router>
    );
}

export default App;
