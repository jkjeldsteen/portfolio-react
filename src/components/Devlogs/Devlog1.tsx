import React from "react";
import "../../components/styles/Devlog.css";
//Import enemy images
import GiantMammoth from "../../resources/images/GiantMammoth.png";

function Devlog1() {
  return (
    <div className="devlog-wrapper">
      <div className="devlog-content">
        {/* Devlog #1 */}
        <div className="devlog-entry">
          <h2 className="devlog-subtitle">Devlog #1 - Epoch Raiders</h2>
          <p className="devlog-text">
            October 13th 2024: Welcome back to another devlog for Epoch Raiders!
            A lot has progressed since our last update, and I’m excited to share
            some of the new features and tweaks that have been implemented as
            the game continues to take shape. From updates to the UI to
            significant additions to core systems, things are moving forward,
            and it's all starting to come together!
          </p>

          <h3 className="devlog-section-title">General Progress:</h3>
          <ul className="devlog-list">
            <li>
              <strong>UI Updates:</strong> The main menu has received some
              much-needed polish. Along with updates to the win and loss
              screens, I’ve introduced a new health system UI that provides
              clear feedback to players on their current status. These updates
              should help streamline navigation and give the game a more
              polished look, even in its current state.
            </li>
            <br />
            <li>
              <strong>Enemy AI & Pathfinding:</strong> Enemy AI has seen further
              tweaks to improve behavior. Most excitingly, I’ve started
              implementing an A* Pathfinding system to give enemies a more
              dynamic way of navigating the environment. This is still a work in
              progress, and I’m working on refining it to ensure smoother, more
              natural movement from the enemies, especially in more complex
              level designs.
            </li>
            <br />
            <li>
              <strong>Coins & Upgrade System:</strong> The foundation for the
              upgrade system is now in place with the introduction of coins!
              Players can collect these during gameplay, and they will
              eventually be used to purchase upgrades. This is a key step in
              creating a deeper progression system, allowing players to improve
              their stats and unlock new abilities as they move through the
              different time periods.
            </li>
            <br />
            <li>
              <strong>Simple Save System:</strong> Another exciting update is
              the introduction of a save system. This allows players to save
              their progress, including base stats, new unlocks, and completed
              levels. This is essential for keeping track of player progression
              across multiple sessions and will tie into the persistent upgrade
              system.
            </li>
            <br />
            <li>
              <strong>Artefacts System:</strong> The artefact system has also
              been introduced! Now, bosses will drop special artefacts that
              grant the player unique abilities or stat boosts. This is the
              beginning of what will become a core element of the game,
              encouraging players to hunt down bosses for powerful rewards.
            </li>
          </ul>

          <h3 className="devlog-section-title">
            Level 1: The Ice Age - Current Progress
          </h3>
          <p className="devlog-text">
            The Ice Age level is nearing completion! Here’s a breakdown of
            what’s been happening:
          </p>
          <ul className="devlog-list">
            <li>
              <strong>Giant Mammoth Boss Artwork:</strong> I’ve finished the
              artwork for the Giant Mammoth boss! This is a major milestone for
              the first level. The Mammoth is designed to be a formidable foe,
              and I can’t wait to get it fully animated and brought to life.
              <img
                src={GiantMammoth}
                alt="Giant Mammoth"
                className="enemy-image"
              />
            </li>
            <li>
              <strong>Enemy Animations:</strong> While the artwork for the
              enemies is in place, animations will be revisited at a later
              stage. For now, the focus remains on getting the gameplay and
              balance in place.
            </li>
            <li>
              <strong>Wave System & Boss Fight Playtesting:</strong>The level
              itself is mostly complete but will require some playtesting to
              properly balance the waves of enemies and the final boss fight.
              The goal is to make it both challenging and fun, with a good sense
              of progression as players fight their way through the icy cavemen
              and take on the Mammoth.
            </li>
          </ul>

          <h3 className="devlog-section-title">What’s Next?</h3>
          <p className="devlog-text">
            Here's what I'll be focusing on in the coming weeks:
          </p>
          <ul className="devlog-list">
            <li>Starting Work on Level 2: The Iron Age</li>
            <p className="devlog-text">
              With the Ice Age level mostly complete, I'll begin designing the
              next time period in the game, bringing new enemies, environments,
              and challenges into the mix.
            </p>
            <li>Balancing the Ice Age Level</li>
            <p className="devlog-text">
              Playtesting and fine-tuning the waves and boss fight to ensure the
              difficulty curve is just right.
            </p>
            <li>Expanding the Artefact System</li>
            <p className="devlog-text">
              Adding more artefacts and starting to think about how they’ll
              influence player strategies across different levels.
            </p>
          </ul>

          <p className="devlog-footer">
            Thanks for checking in on the development of Epoch Raiders! We’ve
            got plenty more to come, so stay tuned for the next update as the
            game continues to evolve.
          </p>
          <p className="devlog-signature">— Jakob</p>
        </div>
      </div>
    </div>
  );
}

export default Devlog1;
