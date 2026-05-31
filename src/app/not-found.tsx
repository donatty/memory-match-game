import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6 animate-float">🎮</div>
      <h1 className="text-4xl font-display font-bold text-gray-800 mb-3">
        ไม่พบหน้านี้
      </h1>
      <p className="text-gray-500 mb-8">อุ๊ปส์! ดูเหมือนหน้านี้จะหายไปแล้ว</p>
      <Link
        href="/"
        className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(135deg, #FF6B9D, #C77DFF)" }}
      >
        🏠 กลับหน้าหลัก
      </Link>
    </div>
  );
}
