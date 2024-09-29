import React from "react";
import "../components/styles/Devlog.css";
//Import enemy images
import meleeCavemanImg from "../resources/images/MeleeCaveman.png";
import rangedCavemanImg from "../resources/images/RangedCaveman.png";
import toddlerCavemanImg from "../resources/images/ToddlerCaveman.png";

function Devlog() {
  return (
    <div className="devlog-wrapper">
      <div className="devlog-content">
        <h1 className="devlog-title">Epoch Raiders Devlogs</h1>

        {/* Devlog #0 */}
        <div className="devlog-entry">
          <h2 className="devlog-subtitle">Devlog #0 - Epoch Raiders</h2>
          <p className="devlog-text">
            Welcome to the very first devlog for Epoch Raiders! I’m excited to
            share the progress so far on the fundamentals of the game mechanics
            and the development of Level 1: The Ice Age. While there's a lot
            more to be done, the journey has begun, and it’s shaping up quite
            nicely.
          </p>

          <h3 className="devlog-section-title">General Progress:</h3>
          <ul className="devlog-list">
            <li>
              <strong>Combat System Implementation:</strong> The core combat
              system has been laid down. Players now have access to basic ranged
              attacks, and enemies have their own attack behaviors. As the game
              evolves, I plan to tweak and fine-tune the combat to ensure it’s
              responsive, challenging, and rewarding.
            </li>
            <li>
              <strong>Enemy AI (First Pass):</strong> I’ve implemented the first
              iteration of enemy AI, which drives basic behavior for Level 1
              enemies. While functional, I expect to revisit and enhance it
              later to make enemy patterns more dynamic and challenging.
            </li>
            <li>
              <strong>Main Menu Setup:</strong> The main menu is now functional
              with four core buttons: Select Level, Shop, Options, Exit.
            </li>
          </ul>

          <h3 className="devlog-section-title">
            Level 1: The Ice Age - Current Progress
          </h3>
          <p className="devlog-text">
            The first level is shaping up! Set in a harsh, frozen landscape, the
            enemies are cavemen—each with unique behaviors to give the player a
            variety of challenges.
          </p>
          <ul className="devlog-list">
            <li>
              <strong>Melee Caveman:</strong> A brawny foe who charges at the
              player with a club, dealing heavy melee damage if he gets close.
              <img
                src={meleeCavemanImg}
                alt="Melee Caveman"
                className="enemy-image"
              />
            </li>
            <li>
              <strong>Ranged Caveman:</strong> A tactical enemy who keeps his
              distance and throws stones at the player, forcing them to manage
              both long-range and close-range threats.
              <img
                src={rangedCavemanImg}
                alt="Ranged Caveman"
                className="enemy-image"
              />
            </li>
            <li>
              <strong>Toddler Caveman:</strong> A small, slow enemy that waddles
              towards the player and attempts to bite. They're not really
              dangerous, but they will add life to the fight.
              <img
                src={toddlerCavemanImg}
                alt="Toddler Caveman"
                className="enemy-image"
              />
            </li>
          </ul>

          <h3 className="devlog-section-title">What’s Next?</h3>
          <ul className="devlog-list">
            <li>Somewhat finishing the Ice Age Level</li>
            <li>Starting Persistent Upgrades (base health, attack speed)</li>
            <li>Coin System - So you can start buying upgrades</li>
          </ul>

          <p className="devlog-footer">
            Thanks for tuning in! Stay tuned for more updates on Epoch Raiders
            as the journey through time continues!
          </p>
          <p className="devlog-signature">— Jakob</p>
        </div>
      </div>
    </div>
  );
}

export default Devlog;
