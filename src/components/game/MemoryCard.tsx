"use client";

import { useState, useEffect } from "react";
import type { Card } from "@/types/game";
import { cn } from "@/lib/utils";

interface Props {
  card: Card;
  onFlip: (card: Card) => void;
  disabled: boolean;
  index: number;
}

// Pastel card back colors
const CARD_COLORS = [
  "from-pink-300 to-pink-400",
  "from-purple-300 to-purple-400",
  "from-blue-300 to-blue-400",
  "from-teal-300 to-teal-400",
  "from-yellow-300 to-yellow-400",
  "from-orange-300 to-orange-400",
];

export default function MemoryCard({ card, onFlip, disabled, index }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 40);
    return () => clearTimeout(t);
  }, [index]);

  const color = CARD_COLORS[index % CARD_COLORS.length];
  const canFlip = !disabled && !card.isFlipped && !card.isMatched;

  return (
    <div
      className={cn(
        "relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 cursor-pointer select-none",
        "transition-all duration-200",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        canFlip && "hover:scale-110 hover:-rotate-2 active:scale-95",
        !canFlip && "cursor-default",
        card.isMatched && "celebrate"
      )}
      style={{ transitionDelay: mounted ? "0ms" : `${index * 40}ms` }}
      onClick={() => canFlip && onFlip(card)}
      aria-label={card.isFlipped ? `${card.label}` : "ไพ่คว่ำ"}
      role="button"
      tabIndex={canFlip ? 0 : -1}
      onKeyDown={(e) => e.key === "Enter" && canFlip && onFlip(card)}
    >
      {/* 3D flip container */}
      <div
        className="card-inner w-full h-full"
        style={{ perspective: "600px" }}
      >
        <div
          className={cn(
            "card-inner w-full h-full relative",
            (card.isFlipped || card.isMatched) && "flipped"
          )}
        >
          {/* Card back */}
          <div
            className={cn(
              "card-front absolute inset-0 rounded-2xl flex items-center justify-center",
              `bg-gradient-to-br ${color}`,
              "shadow-md border-2 border-white/50"
            )}
          >
            <span className="text-2xl text-white/80 font-bold">?</span>
            {/* Shine */}
            <div className="absolute inset-0 rounded-2xl shimmer opacity-30" />
          </div>

          {/* Card face */}
          <div
            className={cn(
              "card-back absolute inset-0 rounded-2xl flex items-center justify-center",
              "bg-white shadow-lg border-2",
              card.isMatched
                ? "border-green-300 bg-green-50"
                : "border-purple-200"
            )}
          >
            <span className="text-4xl leading-none drop-shadow-sm">
              {card.emoji}
            </span>

            {/* Matched sparkle */}
            {card.isMatched && (
              <div className="absolute -top-1 -right-1 text-sm animate-star-pop">
                ⭐
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
