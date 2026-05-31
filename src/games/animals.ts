import type { GameConfig } from "@/types/game";

export const ANIMALS_GAME: GameConfig = {
  id: "animals",
  name: "จับคู่สัตว์น้อย",
  description: "จับคู่สัตว์ที่เหมือนกัน สนุกและน่ารัก!",
  emoji: "🐾",
  color: "from-candy-pink to-candy-orange",
  difficulties: {
    easy: { label: "ง่าย 🌟", pairs: 6, timeLimit: null, cols: 4 },
    medium: { label: "ปานกลาง ⭐⭐", pairs: 10, timeLimit: 60, cols: 5 },
    hard: { label: "ยาก ⭐⭐⭐", pairs: 15, timeLimit: 90, cols: 6 },
  },
};

export const ANIMALS_EMOJIS = [
  { emoji: "🐶", label: "หมา" },
  { emoji: "🐱", label: "แมว" },
  { emoji: "🐭", label: "หนู" },
  { emoji: "🐹", label: "แฮมเตอร์" },
  { emoji: "🐰", label: "กระต่าย" },
  { emoji: "🦊", label: "สุนัขจิ้งจอก" },
  { emoji: "🐻", label: "หมี" },
  { emoji: "🐼", label: "แพนด้า" },
  { emoji: "🐨", label: "โคอาล่า" },
  { emoji: "🐯", label: "เสือ" },
  { emoji: "🦁", label: "สิงโต" },
  { emoji: "🐮", label: "วัว" },
  { emoji: "🐷", label: "หมู" },
  { emoji: "🐸", label: "กบ" },
  { emoji: "🐙", label: "ปลาหมึก" },
];
