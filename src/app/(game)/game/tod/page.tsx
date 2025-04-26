"use client";

import PlayersPanel from "@/components/PlayersPanel";
import { PlayerStatusType } from "@/lib/type";
import Card from "@/components/Card";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function GameTodPage() {
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

  const [isVisible, setIsVisible] = useState(true);
  const [cardValue, setCardValue] = useState("");

  return (
    <div className="flex flex-col gap-9">
      <PlayersPanel players={playersStatus} />
      <AnimatePresence>
        {isVisible && (
          <Card
            setIsVisible={setIsVisible}
            setInputValue={setCardValue}
            title="your truth card..."
            placeholder="ex. What is your biggest fear..."
          />
        )}
      </AnimatePresence>
      <p className="text-xs text-white text-center">
        swipe card if you are done
      </p>
    </div>
  );
}
