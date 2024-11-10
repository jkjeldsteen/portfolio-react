import {
  Route,
  Link,
  Routes,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Devlog0 from "./Devlogs/Devlog0";
import Devlog1 from "./Devlogs/Devlog1";
import Devlog2 from "./Devlogs/Devlog2";
import "../components/styles/Devlog.css";

const devlogs = [
  {
    id: 0,
    title: "Devlog #0 - Getting Started",
    component: <Devlog0 />,
  },
  {
    id: 1,
    title: "Devlog #1 - Working on Level 1: The Ice Age",
    component: <Devlog1 />,
  },
  {
    id: 2,
    title: "Devlog #2 - Polishing the game feel and talking art strategy",
    component: <Devlog2 />,
  },
  // Add more devlogs here as needed
];

const Devlog = () => {
  return (
    <div className="devlog-wrapper">
      <h1 className="devlog-title">Epoch Raiders Devlogs</h1>
      <Routes>
        <Route path="/" element={<DevlogList />} />
        <Route path=":devlogId" element={<DevlogDetail />} />
      </Routes>
    </div>
  );
};

const DevlogList = () => {
  return (
    <div>
      <h2 className="devlog-subtitle">Select a Devlog</h2>
      <ul className="devlog-list">
        {devlogs.map((devlog) => (
          <li key={devlog.id}>
            <Link to={`/devlogs/${devlog.id}`}>{devlog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DevlogDetail = () => {
  const { devlogId } = useParams<{ devlogId: string }>();
  const devlogIndex = Number(devlogId);
  const devlog = devlogs.find((d) => d.id === devlogIndex);
  const location = useLocation();

  // Scroll to top with smooth behavior when the component is rendered
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  }, [location]); // Dependency on location

  return (
    <div className="devlog-detail">
      {devlog ? (
        <>
          {devlog.component}
          <div className="pagination-wrapper">
            <div className="pagination">
              {devlogIndex > 0 && (
                <div className="previous-button">
                  <Link to={`/devlogs/${devlogIndex - 1}`}>
                    Previous Devlog
                  </Link>
                </div>
              )}
              {devlogIndex < devlogs.length - 1 && (
                <div className="next-button">
                  <Link to={`/devlogs/${devlogIndex + 1}`}>Next Devlog</Link>
                </div>
              )}
              {/* If there's only one button, center it */}
              {devlogIndex === 0 && devlogs.length === 1 && (
                <div className="single-button">
                  <Link to={`/devlogs/${devlogIndex + 1}`}>Next Devlog</Link>
                </div>
              )}
              {devlogIndex === devlogs.length - 1 && devlogs.length === 1 && (
                <div className="single-button">
                  <Link to={`/devlogs/${devlogIndex - 1}`}>
                    Previous Devlog
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Devlog not found</p>
      )}
    </div>
  );
};

export default Devlog;
