/**
 * 🎮 GAME REGISTRY
 * ================
 * เพิ่มเกมใหม่ที่นี่เพียง 3 ขั้นตอน:
 *  1. สร้างไฟล์เกมใน /src/games/your-game.ts
 *  2. import GameConfig และ Emojis ด้านล่าง
 *  3. เพิ่มใน GAME_REGISTRY และ GAME_EMOJIS_MAP
 */

import type { GameConfig } from "@/types/game";
import { ANIMALS_GAME, ANIMALS_EMOJIS } from "./animals";
import { FOOD_GAME, FOOD_EMOJIS } from "./food";
import { SPACE_GAME, SPACE_EMOJIS } from "./space";

// ✅ ลงทะเบียนเกมทั้งหมด
export const GAME_REGISTRY: Record<string, GameConfig> = {
  [ANIMALS_GAME.id]: ANIMALS_GAME,
  [FOOD_GAME.id]: FOOD_GAME,
  [SPACE_GAME.id]: SPACE_GAME,
  // 👇 เพิ่มเกมใหม่ที่นี่
};

// ✅ ลงทะเบียน emoji pool ของแต่ละเกม
export const GAME_EMOJIS_MAP: Record<
  string,
  Array<{ emoji: string; label: string }>
> = {
  [ANIMALS_GAME.id]: ANIMALS_EMOJIS,
  [FOOD_GAME.id]: FOOD_EMOJIS,
  [SPACE_GAME.id]: SPACE_EMOJIS,
  // 👇 เพิ่ม emojis ของเกมใหม่ที่นี่
};

export const getAllGames = (): GameConfig[] =>
  Object.values(GAME_REGISTRY);

export const getGame = (id: string): GameConfig | undefined =>
  GAME_REGISTRY[id];

export const getGameEmojis = (id: string) =>
  GAME_EMOJIS_MAP[id] ?? [];
