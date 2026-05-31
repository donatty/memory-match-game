"use client";

import Link from "next/link";
import { formatTime } from "@/lib/game-utils";

interface Props {
  score: number;
  moves: number;
  timeElapsed: number;
  onRestart: () => void;
  onHome: () => void;
}

function getRating(score: number): { stars: string; text: string } {
  if (score >= 800) return { stars: "⭐⭐⭐", text: "ยอดเยี่ยม!" };
  if (score >= 500) return { stars: "⭐⭐", text: "เก่งมาก!" };
  return { stars: "⭐", text: "ดี!" };
}

export default function WinModal({ score, moves, timeElapsed, onRestart }: Props) {
  const { stars, text } = getRating(score);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onRestart} />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl pop-in"
        style={{ border: "3px solid #C77DFF" }}
      >
        {/* Confetti decoration */}
        <div className="text-5xl mb-2 celebrate inline-block">🎉</div>

        <h2 className="text-3xl font-display font-bold text-gray-800 mb-1">
          {text}
        </h2>
        <p className="text-gray-500 mb-5">คุณจับคู่ครบหมดแล้ว!</p>

        {/* Stars */}
        <div className="text-4xl mb-5 tracking-wider">{stars}</div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-7">
          {[
            { icon: "🏆", label: "คะแนน", value: score.toLocaleString() },
            { icon: "🎯", label: "การเล่น", value: String(moves) },
            { icon: "⏱️", label: "เวลา", value: formatTime(timeElapsed) },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-gray-50 rounded-2xl py-3">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-lg font-display font-bold text-gray-800">{value}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="w-full py-3.5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #C77DFF)" }}
          >
            🔄 เล่นอีกรอบ
          </button>
          <Link
            href="/"
            className="w-full py-3 rounded-2xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all text-center"
          >
            🏠 กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}
