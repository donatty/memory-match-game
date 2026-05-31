"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { Card, Difficulty, GameState } from "@/types/game";
import { getGame } from "@/games";
import { createCards, calculateScore } from "@/lib/game-utils";

const INITIAL_STATE: GameState = {
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  totalPairs: 0,
  moves: 0,
  timeElapsed: 0,
  isComplete: false,
  isStarted: false,
  score: 0,
};

export function useGameState(gameId: string, difficulty: Difficulty) {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [isChecking, setIsChecking] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setState((prev) => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const initGame = useCallback(() => {
    stopTimer();
    const config = getGame(gameId);
    if (!config) return;
    const settings = config.difficulties[difficulty];
    const cards = createCards(gameId, config, difficulty);
    setState({
      ...INITIAL_STATE,
      cards,
      totalPairs: settings.pairs,
    });
    setIsChecking(false);
  }, [gameId, difficulty, stopTimer]);

  useEffect(() => { initGame(); }, [initGame]);
  useEffect(() => () => stopTimer(), [stopTimer]);

  const flipCard = useCallback(
    (card: Card) => {
      if (isChecking || card.isFlipped || card.isMatched) return;

      setState((prev) => {
        if (!prev.isStarted) {
          // start timer on first flip
          setTimeout(startTimer, 0);
        }
        const newFlipped = [...prev.flippedCards, card];
        const newCards = prev.cards.map((c) =>
          c.id === card.id ? { ...c, isFlipped: true } : c
        );

        if (newFlipped.length === 2) {
          return { ...prev, cards: newCards, flippedCards: newFlipped, isStarted: true, moves: prev.moves + 1 };
        }
        return { ...prev, cards: newCards, flippedCards: newFlipped, isStarted: true };
      });
    },
    [isChecking, startTimer]
  );

  // Check for match when 2 cards are flipped
  useEffect(() => {
    if (state.flippedCards.length !== 2) return;
    setIsChecking(true);
    const [a, b] = state.flippedCards;
    const isMatch = a.pairId === b.pairId;

    const timeout = setTimeout(() => {
      setState((prev) => {
        const newMatchedPairs = isMatch ? prev.matchedPairs + 1 : prev.matchedPairs;
        const isComplete = newMatchedPairs === prev.totalPairs;
        const newCards = prev.cards.map((c) => {
          if (c.id === a.id || c.id === b.id) {
            return isMatch
              ? { ...c, isMatched: true, isFlipped: true }
              : { ...c, isFlipped: false };
          }
          return c;
        });

        if (isComplete) {
          stopTimer();
        }

        const score = isComplete
          ? calculateScore(prev.totalPairs, prev.moves, prev.timeElapsed, difficulty)
          : prev.score;

        return {
          ...prev,
          cards: newCards,
          flippedCards: [],
          matchedPairs: newMatchedPairs,
          isComplete,
          score,
        };
      });
      setIsChecking(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [state.flippedCards, difficulty, stopTimer]);

  return { state, flipCard, restart: initGame };
}
