import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Games from "./components/Games";
import GamePlayer from "./components/GamePlayer";
import Devlog from "./components/Devlog";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/play/:gameId" element={<GamePlayer />} />
        <Route path="/devlogs/*" element={<Devlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
