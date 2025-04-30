"use client";

import PlayersPanel from "@/components/PlayersPanel";
import { PlayerStatusType } from "@/types/player";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import { useGameStore } from "@/lib/store/useGameStore";
import { useCardStore } from "@/lib/store/useCardStore";
import { useLeaveStore } from "@/lib/store/useLeaveStore";

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
  const [isVisible, setIsVisible] = useState(true);
  const [nextButton, setNextButton] = useState(false);

  const { roundCount } = useGameStore();
  const { truth, dare, setTruth, setDare } = useCardStore();

  const { leaveCount, hasVoted, voteToLeave, cancelVote } = useLeaveStore();

  const handleCardSubmit = (text: string) => {
    if (currentCardIndex === 0) {
      setTruth(text);
      setCurrentCardIndex(1);
    } else {
      setDare(text);
      setIsVisible(false);
    }
  };

  const titles = ["your truth card...", "your dare card..."];
  const placeholders = [
    "ex. What is your biggest fear...",
    "ex. I dare you to eat a spoon of wasabi...",
  ];

  useEffect(() => {
    if (truth.trim() && dare.trim()) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [truth, dare, setIsDone]);

  useEffect(() => {
    if (isCompletedHold) {
      setTimeout(() => {
        setNextButton(true);
      }, 3000);
    }
  }, [isCompletedHold]);

  return (
    <div className="flex flex-col items-center gap-9">
      <PlayersPanel players={playersStatus} />
      <AnimatePresence mode="wait">
        {isVisible && roundCount < 1 && (
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
          : truth && dare
          ? "hold screen to start"
          : "swipe horizontally if you are done"}
      </p>
      {nextButton && <Button path="game/choose" text="NeXT" dark />}

      {/* Leave Button */}
      {!nextButton && truth && dare && roundCount >= 1 && (
        <button
        onClick={hasVoted ? cancelVote : voteToLeave}
        className="flex items-center gap-[5px]">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.5 15V19.5H5.5V5.5H16.5V10M10 12.5H22.5"
                stroke="#A242CE"
                strokeWidth="1.2"
              ></path>{" "}
              <path
                d="M20 10L22.5 12.5L20 15"
                stroke="#A242CE"
                strokeWidth="1.2"
              ></path>{" "}
            </g>
          </svg>
          <p className="text-xs font-medium text-[#A242CE]">
            {hasVoted ? "voted" : "vote"} to end <span className="ml-[5px]">{leaveCount}</span>
          </p>
        </button>
      )}
    </div>
  );
}
