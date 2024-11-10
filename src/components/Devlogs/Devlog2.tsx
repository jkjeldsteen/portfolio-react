import React from "react";
import "../../components/styles/Devlog.css";

const Devlog2: React.FC = () => {
  return (
    <div className="devlog-wrapper">
      <div className="devlog-content">
        {/* Devlog #1 */}
        <div className="devlog-entry">
          <h2 className="devlog-subtitle">Devlog #2 - Epoch Raiders</h2>
          <p className="devlog-text">
            November 10th 2024: Welcome back to another devlog for Epoch
            Raiders! Since the last update, some plans have shifted to focus on
            refining the player experience. While I had initially planned to
            begin development on Level 2: The Iron Age, I’ve decided to take a
            step back to ensure Level 1 is polished and provides a smooth,
            engaging experience. By establishing a solid foundation, future
            levels will be built upon a stronger base.
          </p>

          <h3 className="devlog-section-title">General Progress:</h3>
          <ul className="devlog-list">
            <li>
              <strong>Art Asset Strategy:</strong> While I initially set out to
              create all art assets myself, I’ve realized that taking on this
              role alone is too time-consuming. I still enjoy the challenge, but
              to streamline development, I’ll be incorporating some
              high-quality, pre-made assets where possible—particularly for
              environmental elements. This approach allows me to focus more on
              coding and game design while bringing in assets that can elevate
              the visual quality.
            </li>
            <br />
            <li>
              <strong>Level 2 Planning:</strong> Although development has
              shifted back to Level 1, I’ve continued some preliminary planning
              for Level 2: The Iron Age. At this stage, I’m focused on setting
              the tone, mood, and general design direction for the level, which
              will guide the eventual asset selection and gameplay mechanics.
            </li>
          </ul>

          <h3 className="devlog-section-title">New Features & Updates</h3>
          <ul className="devlog-list">
            <li>
              <strong>UI & Menus</strong> The UI has undergone significant
              improvements, enhancing the player’s overall experience. Key
              updates include:
              <br />
              <span className="tabbed">
                <strong>Settings Menu:</strong> Now includes essential options
                to allow players to customize their gameplay experience.
                <br />
              </span>
              <span className="tabbed">
                <strong>Pause Menu:</strong> Added to give players control to
                pause during gameplay. A new option allows players to abandon a
                level, though they’ll lose any progress made in that run.
              </span>
            </li>
            <li>
              <strong>Player Stats & Save System:</strong> Further work has gone
              into the player’s stat system and save functionality. I’ve also
              introduced an upgrade shop where players can improve stats, adding
              depth to progression by allowing players to invest in upgrades
              over time.
            </li>
            <li>
              <strong>Post-Processing & HUD Elements:</strong>To enhance
              immersion, I’ve incorporated subtle post-processing effects and
              added new HUD elements, including:
              <br />
              <strong>Run timer:</strong> Tracks the duration of each run.
              <br />
              <strong>Wave Counter:</strong> Shows players how many enemy waves
              they’ve faced in a session.
              <br />
              <strong>Coin Pouch:</strong> Displays the coins collected during
              each run, helping players keep track of their resources.
            </li>
          </ul>

          <h3 className="devlog-section-title">
            Level 1: The Ice Age - Art & Animation
          </h3>
          <ul className="devlog-list">
            <li>
              <strong>Environmental Assets:</strong> In line with the new asset
              approach, I’ve begun integrating pre-made environmental assets
              into the Ice Age level. These additions will contribute to a
              richer atmosphere, enhancing the frozen landscape that players
              will be navigating.
            </li>
            <br />
            <li>
              <strong>Character Model & Enemy Animations:</strong> I’ve also
              invested in a base character model that I can modify as needed.
              Using this model, I’ve enhanced animations for the Club Caveman
              and Stone Thrower Caveman, bringing these enemies to life with
              smoother movement. Updates for the Cavetoddler are still pending
              but are on the horizon.
            </li>
          </ul>

          <h3 className="devlog-section-title">What’s Next?</h3>
          <p className="devlog-text">
            With Level 1 nearly polished, here’s what I’ll be focusing on next:
          </p>
          <ul className="devlog-list">
            <li>Finalizing Level 1</li>
            <p className="devlog-text">
              Completing any last refinements to ensure the player experience is
              cohesive and satisfying.
            </p>
            <li>Asset Integration</li>
            <p className="devlog-text">
              Continuing to bring in assets as needed, particularly for
              environmental details.
            </p>
            <li>Level 2: The Iron Age</li>
            <p className="devlog-text">
              Once Level 1 is ready, I’ll dive deeper into the development of
              Level 2.
            </p>
          </ul>

          <p className="devlog-footer">
            Thank you for following along on this journey! As always, your
            feedback and support are invaluable, and I can’t wait to share the
            next chapter of Epoch Raiders.
          </p>
          <p className="devlog-signature">— Jakob</p>
        </div>
      </div>
    </div>
  );
};

export default Devlog2;
