import Link from "next/link";
import { getAllGames } from "@/games";
import type { GameConfig } from "@/types/game";

function GameCard({ game }: { game: GameConfig }) {
  return (
    <Link href={`/game/${game.id}`}>
      <div
        className="group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-rotate-1 active:scale-95"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-90`} />
        
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/15 rounded-full" />

        <div className="relative p-7 text-white">
          <div className="text-6xl mb-4 group-hover:animate-bounce transition-all">
            {game.emoji}
          </div>
          <h2 className="text-2xl font-display font-bold mb-1 drop-shadow-sm">
            {game.name}
          </h2>
          <p className="text-white/85 text-sm font-body leading-relaxed">
            {game.description}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
              เล่นเลย →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const games = getAllGames();

  return (
    <main className="min-h-screen px-4 py-10">
      {/* Header */}
      <header className="text-center mb-14">
        <div className="text-7xl mb-4 animate-float inline-block">🎮</div>
        <h1
          className="text-5xl md:text-6xl font-display font-bold mb-3"
          style={{
            background: "linear-gradient(135deg, #FF6B9D, #C77DFF, #48CAE4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          จับคู่ภาพ
        </h1>
        <p className="text-gray-500 text-lg font-body">
          เลือกธีมเกมที่ชอบ แล้วมาจับคู่กันเลย! 🌟
        </p>

        {/* Floating decorations */}
        <div className="flex justify-center gap-3 mt-4 text-2xl">
          {["⭐", "💫", "✨", "🌟", "💥"].map((s, i) => (
            <span
              key={i}
              className="animate-float inline-block"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      {/* Game grid */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
          เลือกธีม
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-400 text-sm">
        <p>สร้างด้วย ❤️ · Next.js 14 + TypeScript</p>
      </footer>
    </main>
  );
}
