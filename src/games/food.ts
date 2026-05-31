import type { GameConfig } from "@/types/game";

export const FOOD_GAME: GameConfig = {
  id: "food",
  name: "จับคู่อาหาร",
  description: "จับคู่อาหารอร่อยที่เหมือนกัน อิ่มท้อง!",
  emoji: "🍜",
  color: "from-candy-yellow to-candy-orange",
  difficulties: {
    easy: { label: "ง่าย 🌟", pairs: 6, timeLimit: null, cols: 4 },
    medium: { label: "ปานกลาง ⭐⭐", pairs: 10, timeLimit: 60, cols: 5 },
    hard: { label: "ยาก ⭐⭐⭐", pairs: 15, timeLimit: 90, cols: 6 },
  },
};

export const FOOD_EMOJIS = [
  { emoji: "🍕", label: "พิซซ่า" },
  { emoji: "🍔", label: "เบอร์เกอร์" },
  { emoji: "🌮", label: "ทาโก้" },
  { emoji: "🍜", label: "ราเมน" },
  { emoji: "🍣", label: "ซูชิ" },
  { emoji: "🍦", label: "ไอศครีม" },
  { emoji: "🍰", label: "เค้ก" },
  { emoji: "🍩", label: "โดนัท" },
  { emoji: "🍎", label: "แอปเปิ้ล" },
  { emoji: "🍓", label: "สตรอเบอร์รี่" },
  { emoji: "🥑", label: "อโวคาโด" },
  { emoji: "🌽", label: "ข้าวโพด" },
  { emoji: "🥕", label: "แครอท" },
  { emoji: "🍇", label: "องุ่น" },
  { emoji: "🥥", label: "มะพร้าว" },
];
