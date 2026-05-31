import type { GameConfig } from "@/types/game";

export const SPACE_GAME: GameConfig = {
  id: "space",
  name: "จับคู่อวกาศ",
  description: "สำรวจและจับคู่สิ่งต่างๆ ในอวกาศ!",
  emoji: "🚀",
  color: "from-candy-purple to-candy-blue",
  difficulties: {
    easy: { label: "ง่าย 🌟", pairs: 6, timeLimit: null, cols: 4 },
    medium: { label: "ปานกลาง ⭐⭐", pairs: 10, timeLimit: 60, cols: 5 },
    hard: { label: "ยาก ⭐⭐⭐", pairs: 15, timeLimit: 90, cols: 6 },
  },
};

export const SPACE_EMOJIS = [
  { emoji: "🚀", label: "จรวด" },
  { emoji: "🛸", label: "ยานอวกาศ" },
  { emoji: "🌍", label: "โลก" },
  { emoji: "🌙", label: "ดวงจันทร์" },
  { emoji: "⭐", label: "ดาว" },
  { emoji: "☄️", label: "ดาวหาง" },
  { emoji: "🌞", label: "ดวงอาทิตย์" },
  { emoji: "🪐", label: "เสาร์" },
  { emoji: "🌌", label: "กาแล็กซี" },
  { emoji: "👨‍🚀", label: "นักบินอวกาศ" },
  { emoji: "🔭", label: "กล้องส่องทางไกล" },
  { emoji: "🛰️", label: "ดาวเทียม" },
  { emoji: "🌠", label: "ดาวตก" },
  { emoji: "🌀", label: "หลุมดำ" },
  { emoji: "🪨", label: "ดาวเคราะห์น้อย" },
];
