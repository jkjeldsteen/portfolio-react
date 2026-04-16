import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles/GamePlayer.css";
import { Button } from "@/components/ui/button";
import { GAMES } from "./Games";

function GamePlayer() {
  const { gameId } = useParams<{ gameId: string }>();

  const game = useMemo(() => {
    return GAMES.find((g) => g.id === gameId);
  }, [gameId]);

  if (!game) {
    return (
      <div className="game-player-wrapper game-not-found">
        <div className="game-player-content">
          <h1>Game Not Found</h1>
          <p>The game you're looking for doesn't exist.</p>
          <Link to="/games">
            <Button variant="outline">Back to Games</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="game-player-wrapper">
      <div className="game-header">
        <div className="game-header-content">
          <Link to="/games" className="back-button">
            <Button variant="outline">← Back to Games</Button>
          </Link>
          <h1 className="game-title-large">{game.title}</h1>
          <div className="game-spacer" />
        </div>
      </div>

      <div className="game-player-container">
        <iframe
          title={game.title}
          src={`${game.buildPath}/index.html`}
          className="game-iframe-full"
          allowFullScreen
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}

export default GamePlayer;
