import { Link, Route, Routes, useParams } from "react-router-dom";
import Devlog0 from "./Devlogs/Devlog0";
import Devlog1 from "./Devlogs/Devlog1";
import Devlog2 from "./Devlogs/Devlog2";
import caveman from "../resources/images/MeleeCaveman.png";
import mammoth from "../resources/images/GiantMammoth.png";
import gameplay from "../resources/images/GameplayScreenshot.png";
import "./styles/Devlog.css";

const devlogs = [
  { id: 0, title: "Getting Started", art: caveman, component: <Devlog0 /> },
  { id: 1, title: "Working on Level 1: The Ice Age", art: mammoth, component: <Devlog1 /> },
  { id: 2, title: "Polishing the game feel and talking art strategy", art: gameplay, component: <Devlog2 /> },
];

function Devlog() {
  return (
    <main className="devlog-wrapper">
      <Routes>
        <Route index element={<DevlogList />} />
        <Route path=":devlogId" element={<DevlogDetail />} />
      </Routes>
    </main>
  );
}

function DevlogList() {
  return (
    <>
      <header className="journal-header">
        <h1>Epoch Raiders Devlogs</h1>
        <p>Follow the development of Epoch Raiders, from its first enemies to the Ice Age level.</p>
      </header>
      <ul className="journal-chapters">
        {[...devlogs].reverse().map((entry) => (
          <li key={entry.id}>
            <Link to={String(entry.id)} className="journal-chapter">
              <div className="journal-art" data-gameplay={entry.id === 2}>
                <img src={entry.art} alt="" />
              </div>
              <div className="journal-label">
                <span>Devlog #{entry.id}</span>
                <h2>{entry.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function DevlogDetail() {
  const { devlogId } = useParams();
  const index = devlogs.findIndex(({ id }) => String(id) === devlogId);
  const entry = devlogs[index];
  const previous = devlogs[index - 1];
  const next = devlogs[index + 1];

  return (
    <div className="devlog-detail">
      <Link to="/devlogs" className="journal-back">All Epoch Raiders devlogs</Link>
      {entry ? (
        <article>
          <header className="journal-entry-header">
            <div className="journal-label">
              <span>Devlog #{entry.id}</span>
              <h1>{entry.title}</h1>
            </div>
            <div className="journal-art" data-gameplay={entry.id === 2}>
              <img src={entry.art} alt="" />
            </div>
          </header>
          {entry.component}
          <nav className="pagination" aria-label="Devlog navigation">
            {previous && <Link to={`/devlogs/${previous.id}`}>Previous devlog</Link>}
            {next && <Link to={`/devlogs/${next.id}`}>Next devlog</Link>}
          </nav>
        </article>
      ) : (
        <h1>Devlog not found</h1>
      )}
    </div>
  );
}

export default Devlog;
