"use client";

import PlayersPanel from "@/components/PlayersPanel";
import { PlayerStatusType } from "@/lib/type";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

interface GameTodPageProps {
  setIsDone: (value: boolean) => void;
  isCompletedHold: boolean;
}

export default function GameTodPage({
  setIsDone,
  isCompletedHold,
}: GameTodPageProps) {
  const playersStatus: PlayerStatusType[] = [
    "join",
    "ready",
    "fill",
    "not-fill",
    "vote-leave",
    "none",
    "none",
    "none",
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [truthValue, setTruthValue] = useState("");
  const [dareValue, setDareValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleCardSubmit = (text: string) => {
    if (currentCardIndex === 0) {
      setTruthValue(text);
      setCurrentCardIndex(1);
    } else {
      setDareValue(text);
      setIsVisible(false);
    }
  };

  const titles = ["your truth card...", "your dare card..."];
  const placeholders = [
    "ex. What is your biggest fear...",
    "ex. I dare you to eat a spoon of wasabi...",
  ];

  useEffect(() => {
    if (truthValue.trim() && dareValue.trim()) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [truthValue, dareValue, setIsDone]);

  return (
    <div className="flex flex-col items-center gap-9">
      <PlayersPanel players={playersStatus} />

      <AnimatePresence mode="wait">
        {isVisible && (
          <Card
            key={currentCardIndex}
            setInputValue={handleCardSubmit}
            title={titles[currentCardIndex]}
            placeholder={placeholders[currentCardIndex]}
          />
        )}
      </AnimatePresence>
      <p className="text-xs text-white text-center">
        {isCompletedHold
          ? "safe"
          : truthValue && dareValue
          ? "hold screen to start"
          : "swipe horizontally if you are done"}
      </p>
    </div>
  );
}
