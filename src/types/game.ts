// ==============================
// Core Game Types
// ==============================

export type Difficulty = "easy" | "medium" | "hard";

export interface Card {
  id: string;
  pairId: string;
  emoji: string;
  label: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameConfig {
  id: string;
  name: string;           // Thai name
  description: string;    // Thai description
  emoji: string;
  color: string;          // Tailwind gradient class
  difficulties: DifficultyConfig;
}

export interface DifficultyConfig {
  easy: DifficultySettings;
  medium: DifficultySettings;
  hard: DifficultySettings;
}

export interface DifficultySettings {
  label: string;          // Thai label
  pairs: number;
  timeLimit: number | null; // seconds, null = no limit
  cols: number;
}

export interface GameState {
  cards: Card[];
  flippedCards: Card[];
  matchedPairs: number;
  totalPairs: number;
  moves: number;
  timeElapsed: number;
  isComplete: boolean;
  isStarted: boolean;
  score: number;
}

export interface GameResult {
  gameId: string;
  difficulty: Difficulty;
  moves: number;
  timeElapsed: number;
  score: number;
  completedAt: Date;
}

export type GameStatus = "idle" | "playing" | "paused" | "complete";

// ==============================
// Game Registry — add new games here
// ==============================
export interface GameRegistry {
  [gameId: string]: GameConfig;
}
