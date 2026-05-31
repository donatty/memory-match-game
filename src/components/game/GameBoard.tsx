"use client";

import type { Card } from "@/types/game";
import MemoryCard from "./MemoryCard";

interface Props {
  cards: Card[];
  cols: number;
  onFlip: (card: Card) => void;
  disabled: boolean;
}

export default function GameBoard({ cards, cols, onFlip, disabled }: Props) {
  const gridCols: Record<number, string> = {
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div
        className={`grid gap-3 mx-auto w-fit ${gridCols[cols] ?? "grid-cols-4"}`}
      >
        {cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            card={card}
            onFlip={onFlip}
            disabled={disabled}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
