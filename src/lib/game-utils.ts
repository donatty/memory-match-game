import type { Card, Difficulty, GameConfig } from "@/types/game";
import { getGameEmojis } from "@/games";

export function createCards(
  gameId: string,
  config: GameConfig,
  difficulty: Difficulty
): Card[] {
  const settings = config.difficulties[difficulty];
  const emojis = getGameEmojis(gameId);
  const selected = shuffle(emojis).slice(0, settings.pairs);

  const cards: Card[] = selected.flatMap(({ emoji, label }, i) => [
    { id: `${i}-a`, pairId: `pair-${i}`, emoji, label, isFlipped: false, isMatched: false },
    { id: `${i}-b`, pairId: `pair-${i}`, emoji, label, isFlipped: false, isMatched: false },
  ]);

  return shuffle(cards);
}

export function calculateScore(
  pairs: number,
  moves: number,
  timeElapsed: number,
  difficulty: Difficulty
): number {
  const baseScore = pairs * 100;
  const movePenalty = Math.max(0, (moves - pairs) * 5);
  const timePenalty = Math.floor(timeElapsed / 10) * 2;
  const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 }[difficulty];
  return Math.max(
    0,
    Math.round((baseScore - movePenalty - timePenalty) * difficultyMultiplier)
  );
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function getDifficultyLabel(d: Difficulty): string {
  return { easy: "ง่าย", medium: "ปานกลาง", hard: "ยาก" }[d];
}
