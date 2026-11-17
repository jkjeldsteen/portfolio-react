import { BrowserRouter as Router, Link, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const Work = lazy(() => import("./components/Work"));
const Games = lazy(() => import("./components/Games"));
const GamePlayer = lazy(() => import("./components/GamePlayer"));
const Devlog = lazy(() => import("./components/Devlog"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

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
      <Suspense fallback={<main className="about-wrapper" role="status">Loading page…</main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/play/:gameId" element={<GamePlayer />} />
          <Route path="/devlogs/*" element={<Devlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <main className="about-wrapper">
              <div className="about-content">
                <h1>Page not found</h1>
                <p><Link to="/">Return to the portfolio home</Link></p>
              </div>
            </main>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
