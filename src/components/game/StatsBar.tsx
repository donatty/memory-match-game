"use client";

import { formatTime } from "@/lib/game-utils";
import { cn } from "@/lib/utils";

interface Props {
  moves: number;
  matchedPairs: number;
  totalPairs: number;
  timeElapsed: number;
  timeLeft: number | null;
}

function StatPill({
  icon,
  label,
  value,
  highlight,
}: {
  icon: string;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center px-5 py-3 rounded-2xl min-w-[80px]",
        "bg-white shadow-sm border-2 transition-all",
        highlight ? "border-red-300 bg-red-50" : "border-gray-100"
      )}
    >
      <span className="text-xl mb-0.5">{icon}</span>
      <span
        className={cn(
          "text-xl font-display font-bold",
          highlight ? "text-red-500" : "text-gray-800"
        )}
      >
        {value}
      </span>
      <span className="text-xs text-gray-400 font-medium">{label}</span>
    </div>
  );
}

export default function StatsBar({
  moves,
  matchedPairs,
  totalPairs,
  timeElapsed,
  timeLeft,
}: Props) {
  const progress = totalPairs > 0 ? (matchedPairs / totalPairs) * 100 : 0;
  const isWarning = timeLeft !== null && timeLeft <= 15;

  return (
    <div className="mb-6">
      {/* Stats row */}
      <div className="flex justify-center gap-3 flex-wrap mb-4">
        <StatPill icon="🎯" label="การเคลื่อนที่" value={String(moves)} />
        <StatPill
          icon="💎"
          label="จับคู่แล้ว"
          value={`${matchedPairs}/${totalPairs}`}
        />
        {timeLeft !== null ? (
          <StatPill
            icon="⏱️"
            label="เหลือเวลา"
            value={formatTime(timeLeft)}
            highlight={isWarning}
          />
        ) : (
          <StatPill icon="⏱️" label="เวลา" value={formatTime(timeElapsed)} />
        )}
      </div>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>ความก้าวหน้า</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #FF6B9D, #C77DFF, #48CAE4)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
