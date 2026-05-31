import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "จับคู่ภาพ 🎮 | Memory Match Game",
  description: "เกมจับคู่ภาพสนุกๆ รองรับภาษาไทย พร้อม animation น่ารัก",
  keywords: "เกมจับคู่, memory game, เกมเด็ก, Thai game",
  openGraph: {
    title: "จับคู่ภาพ 🎮",
    description: "เกมจับคู่ภาพสนุกๆ รองรับภาษาไทย",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
