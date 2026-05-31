# 🎮 จับคู่ภาพ — Memory Match Game

เกมจับคู่ภาพรองรับภาษาไทย พร้อม animation น่ารัก สร้างด้วย Next.js 14 + TypeScript

## ✨ ฟีเจอร์

- 🎯 เกมจับคู่ภาพ 3 ธีม (สัตว์, อาหาร, อวกาศ)
- 🌟 3 ระดับความยาก (ง่าย / ปานกลาง / ยาก)
- ⏱️ ระบบนับเวลาและระบบคะแนน
- 🎉 animation ฉลองชนะพร้อม confetti
- 📱 Responsive รองรับมือถือ
- 🇹🇭 UI ภาษาไทยทั้งหมด
- ♿ Accessible (keyboard navigation)

## 🚀 เริ่มต้นใช้งาน

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev

# Build สำหรับ production
npm run build
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

## 🗂️ โครงสร้างโปรเจกต์

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # หน้าหลัก (เลือกเกม)
│   ├── game/[gameId]/      # หน้าเล่นเกม
│   └── globals.css
├── games/                  # 🎮 ลงทะเบียนเกมที่นี่
│   ├── index.ts            # Game Registry
│   ├── animals.ts          # เกมสัตว์น้อย
│   ├── food.ts             # เกมอาหาร
│   └── space.ts            # เกมอวกาศ
├── components/game/        # UI Components
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
└── types/                  # TypeScript types
```

## ➕ วิธีเพิ่มเกมใหม่

**เพียง 3 ขั้นตอน!**

### 1. สร้างไฟล์เกม

สร้างไฟล์ `src/games/my-game.ts`:

```typescript
import type { GameConfig } from "@/types/game";

export const MY_GAME: GameConfig = {
  id: "my-game",
  name: "เกมของฉัน",
  description: "คำอธิบายเกม",
  emoji: "🌈",
  color: "from-green-400 to-teal-400",
  difficulties: {
    easy:   { label: "ง่าย 🌟",       pairs: 6,  timeLimit: null, cols: 4 },
    medium: { label: "ปานกลาง ⭐⭐",  pairs: 10, timeLimit: 60,   cols: 5 },
    hard:   { label: "ยาก ⭐⭐⭐",    pairs: 15, timeLimit: 90,   cols: 6 },
  },
};

export const MY_GAME_EMOJIS = [
  { emoji: "🌈", label: "รุ้ง" },
  // ... อย่างน้อย 15 รายการ
];
```

### 2. ลงทะเบียนใน `src/games/index.ts`

```typescript
import { MY_GAME, MY_GAME_EMOJIS } from "./my-game";

export const GAME_REGISTRY = {
  // ...
  [MY_GAME.id]: MY_GAME,       // เพิ่มบรรทัดนี้
};

export const GAME_EMOJIS_MAP = {
  // ...
  [MY_GAME.id]: MY_GAME_EMOJIS, // เพิ่มบรรทัดนี้
};
```

### 3. เสร็จแล้ว! 🎉

เกมใหม่จะปรากฏในหน้าหลักทันที ไม่ต้องแก้ไขโค้ดส่วนอื่น

## 🚢 Deploy บน Vercel

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

หรือ connect GitHub repo กับ Vercel แล้วระบบจะ deploy อัตโนมัติทุกครั้งที่ push

## 🔧 Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations (optional)
- **canvas-confetti** — ฉลองชนะ
- **Vercel** — Hosting
- **GitHub Actions** — CI/CD
