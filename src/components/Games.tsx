import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Games.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface GameData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  buildPath: string;
  previewImage: string;
  previewGif?: string;
}

export const GAMES: GameData[] = [
  {
    id: "bouncy-pirate",
    title: "Bouncy Pirate",
    description:
      "A game inspired by the popular mobile classic 'Doodle Jump', revamped with pirate-themed graphics. A personal practice project exploring platformer mechanics.",
    tags: ["Platformer", "Physics"],
    buildPath: "/games/bouncy-pirate",
    previewImage: "/images/game-previews/bouncy-pirate.png",
    previewGif: "/images/game-previews/bouncy-pirate.gif",
  },
  {
    id: "gold-mine-defender",
    title: "Gold Mine Defender",
    description:
      "A tower defense-inspired game where you defend your mine by matching your defender's color to the attacker's. Built following BlackThornProd's game dev course with custom artwork and sound effects.",
    tags: ["Tower Defense", "Strategy"],
    buildPath: "/games/gold-mine-defender",
    previewImage: "/images/game-previews/gold-mine-defender.png",
    previewGif: "/images/game-previews/gold-mine-defender.gif",
  },
  {
    id: "warthog-defence",
    title: "Warthog Defence",
    description:
      "Defend your base with a catapult from waves of wild warthog beasts. How long can you survive the onslaught?",
    tags: ["Defense", "Action"],
    buildPath: "/games/warthog-defence",
    previewImage: "/images/game-previews/warthog-defence.png",
  },
  {
    id: "square-jumper",
    title: "Square Jumper",
    description:
      "A Geometry Dash-inspired platformer where a simple square must jump across increasingly difficult obstacles. Made as a learning project for new game dev mechanics.",
    tags: ["Platformer", "Arcade"],
    buildPath: "/games/square-jumper",
    previewImage: "/images/game-previews/square-jumper.png",
  },
];

function Games() {
  const [hoveredGameId, setHoveredGameId] = useState<string | null>(null);

  return (
    <div className="games-wrapper">
      <div className="main-content">
        <div className="games-container">
          <h1 className="games-title">Playable Games</h1>
          <p className="games-subtitle">
            Play my game projects directly in your browser. These are WebGL builds hosted on this site.
          </p>

          {/* Games Grid */}
          <div className="games-grid">
            {GAMES.map((game) => (
              <Link
                key={game.id}
                to={`/games/play/${game.id}`}
                className="game-card-link"
                onMouseEnter={() => game.previewGif && setHoveredGameId(game.id)}
                onMouseLeave={() => setHoveredGameId(null)}
              >
                <Card className="game-card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                  <div className="game-preview-container">
                    <img
                      src={hoveredGameId === game.id && game.previewGif ? game.previewGif : game.previewImage}
                      alt={game.title}
                      className="game-preview-image"
                      onError={(e) => {
                        e.currentTarget.src = game.previewImage;
                      }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{game.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {game.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-wrap items-center justify-between space-x-2 mt-auto">
                    <div className="flex items-center space-x-1 flex-wrap">
                      {game.tags.map((tag) => (
                        <Badge key={tag} className="whitespace-nowrap">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="whitespace-nowrap"
                    >
                      Play Now
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
