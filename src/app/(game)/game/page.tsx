"use client";

import GameLayout from "@/components/GameLayout";
import GameTodPage from "./TodGame";
import { useState } from "react";

export default function GamePage() {
  const [isDone, setIsDone] = useState(false);
  const [isCompletedHold, setIsCompletedHold] = useState(false);

  return (
    <GameLayout isDone={isDone} isCompletedHold={isCompletedHold} setIsCompletedHold={setIsCompletedHold}>
      <GameTodPage setIsDone={setIsDone} isCompletedHold={isCompletedHold} />
    </GameLayout>
  );
}
