"use client";

import { useCallback } from "react";

export function useConfetti() {
  const fire = useCallback(async () => {
    const confetti = (await import("canvas-confetti")).default;
    const colors = ["#FF6B9D", "#C77DFF", "#48CAE4", "#FFD60A", "#52E5A5"];

    const burst = (opts: object) => confetti({ colors, ...opts });

    burst({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => burst({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } }), 200);
    setTimeout(() => burst({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } }), 400);
  }, []);

  return { fire };
}
