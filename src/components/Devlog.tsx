import "../components/styles/Devlog.css";
import Devlog0 from "./Devlogs/Devlog0";
import Devlog1 from "./Devlogs/Devlog1";

function Devlog() {
  return (
    <div>
      <h1 className="devlog-title">Epoch Raiders Devlogs</h1>
      <Devlog1 />
      <br />
      <Devlog0 />
    </div>
  );
}

export default Devlog;
