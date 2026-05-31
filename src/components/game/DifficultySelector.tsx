"use client";

import type { Difficulty, DifficultyConfig } from "@/types/game";
import { cn } from "@/lib/utils";

interface Props {
  difficulties: DifficultyConfig;
  current: Difficulty;
  onChange: (d: Difficulty) => void;
}

const LEVELS: Difficulty[] = ["easy", "medium", "hard"];

export default function DifficultySelector({ difficulties, current, onChange }: Props) {
  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      {LEVELS.map((level) => {
        const config = difficulties[level];
        const isActive = current === level;
        return (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={cn(
              "px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200",
              "border-2 shadow-sm",
              isActive
                ? "bg-gradient-to-r from-candy-pink to-candy-purple text-white border-transparent scale-105 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:scale-102"
            )}
          >
            {config.label}
            <span className="ml-2 text-xs opacity-75">
              {config.pairs} คู่
              {config.timeLimit ? ` · ${config.timeLimit}s` : ""}
            </span>
          </button>
        );
      })}
    </div>
  );
}
