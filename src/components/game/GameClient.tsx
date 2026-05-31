"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Difficulty, GameConfig } from "@/types/game";
import { useGameState } from "@/hooks/useGameState";
import { useConfetti } from "@/hooks/useConfetti";
import { formatTime } from "@/lib/game-utils";
import GameBoard from "./GameBoard";
import DifficultySelector from "./DifficultySelector";
import StatsBar from "./StatsBar";
import WinModal from "./WinModal";

interface Props {
  gameId: string;
  game: GameConfig;
}

export default function GameClient({ gameId, game }: Props) {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [showWin, setShowWin] = useState(false);
  const { state, flipCard, restart } = useGameState(gameId, difficulty);
  const { fire } = useConfetti();

  // Win detection
  useEffect(() => {
    if (state.isComplete && !showWin) {
      setTimeout(() => {
        fire();
        setShowWin(true);
      }, 500);
    }
  }, [state.isComplete, showWin, fire]);

  const handleDifficulty = (d: Difficulty) => {
    setDifficulty(d);
    setShowWin(false);
  };

  const handleRestart = () => {
    setShowWin(false);
    restart();
  };

  const settings = game.difficulties[difficulty];
  const timeLeft =
    settings.timeLimit !== null
      ? Math.max(0, settings.timeLimit - state.timeElapsed)
      : null;

  // Time's up
  const isTimeUp = timeLeft !== null && timeLeft === 0 && !state.isComplete;

  return (
    <div className="min-h-screen px-4 py-6 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors font-semibold"
        >
          ← กลับ
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-gray-800">
            {game.emoji} {game.name}
          </h1>
        </div>
        <button
          onClick={handleRestart}
          className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-600 px-4 py-2 rounded-2xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
        >
          🔄 เริ่มใหม่
        </button>
      </header>

      {/* Difficulty */}
      <DifficultySelector
        difficulties={game.difficulties}
        current={difficulty}
        onChange={handleDifficulty}
      />

      {/* Stats */}
      <StatsBar
        moves={state.moves}
        matchedPairs={state.matchedPairs}
        totalPairs={state.totalPairs}
        timeElapsed={state.timeElapsed}
        timeLeft={timeLeft}
      />

      {/* Time's up banner */}
      {isTimeUp && (
        <div className="text-center my-4">
          <div className="inline-block bg-red-100 text-red-600 px-6 py-3 rounded-2xl font-bold text-lg animate-wiggle">
            ⏰ หมดเวลาแล้ว! กดเริ่มใหม่เลย
          </div>
        </div>
      )}

      {/* Board */}
      <GameBoard
        cards={state.cards}
        cols={settings.cols}
        onFlip={flipCard}
        disabled={isTimeUp || state.isComplete}
      />

      {/* Win Modal */}
      {showWin && (
        <WinModal
          score={state.score}
          moves={state.moves}
          timeElapsed={state.timeElapsed}
          onRestart={handleRestart}
          onHome={() => setShowWin(false)}
        />
      )}
    </div>
  );
}
