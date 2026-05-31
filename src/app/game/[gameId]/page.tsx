import { notFound } from "next/navigation";
import { getGame } from "@/games";
import GameClient from "@/components/game/GameClient";
import type { Metadata } from "next";

interface Props {
  params: { gameId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGame(params.gameId);
  if (!game) return { title: "ไม่พบเกม" };
  return {
    title: `${game.name} ${game.emoji} | จับคู่ภาพ`,
    description: game.description,
  };
}

export default function GamePage({ params }: Props) {
  const game = getGame(params.gameId);
  if (!game) notFound();

  return <GameClient gameId={params.gameId} game={game} />;
}
