"use client";

import GameLayout from "@/components/GameLayout";
import PlayersPanel from "@/components/PlayersPanel";
import { useEffect, useState } from "react";
import { PlayerStatusType } from "@/types/player";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import Button from "@/components/Button";

export default function ChoosePage() {
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
  const [isDone, setIsDone] = useState(false);
  const [isCompletedHold, setIsCompletedHold] = useState(false);
  const [choosenDare, setChoosenDare] = useState("Kiss someone!");
  const [choosenTruth, setChoosenTruth] = useState("Are you gay?");
  const [cardType, setCardType] = useState<"truth" | "dare" | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const rotateY = useTransform(x, [-150, 0, 150], [90, 0, -90]);

  const handleDragEnd = async (_: any, info: any) => {
    const offset = info.offset.x;

    if (offset < -100) {
      await controls.start({
        rotateY: 360,
        transition: { duration: 0.6 },
      });
      setCardType("truth");
      setIsFlipped(true);
    } else if (offset > 100) {
      await controls.start({
        rotateY: -360,
        transition: { duration: 0.6 },
      });
      setCardType("dare");
      setIsFlipped(true);
    } else {
      controls.start({
        rotateY: 0,
        transition: { type: "spring", stiffness: 300 },
      });
    }
  };

  useEffect(() => {
    if (isFlipped) {
      setTimeout(() => {
        setNextButton(true);
      }, 3000);
    }
  }, [isFlipped]);

  return (
    <GameLayout
      isDone={isDone}
      isCompletedHold={isCompletedHold}
      setIsCompletedHold={setIsCompletedHold}
    >
      <div className="flex flex-col items-center gap-9">
        <PlayersPanel players={playersStatus} />
        {/* Flip Card */}
        <motion.div
          className="w-[196px] flex flex-col gap-[10px] p-3 bg-black border border-[#DBDBDB] box-solid-shadow text-white select-none cursor-pointer"
          drag={isFlipped ? false : "x"}
          style={{
            rotateY: rotateY,
            touchAction: "none",
          }}
          onDragEnd={handleDragEnd}
          animate={controls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
        >
          <h3 className="opacity-80">
            {cardType
              ? cardType === "truth"
                ? "Truth Card"
                : "Dare Card"
              : "Pick..."}
          </h3>
          <p className="h-[183px] text-xl font-medium">
            {cardType
              ? cardType === "truth"
                ? choosenTruth
                : choosenDare
              : "Swipe left or right"}
          </p>
        </motion.div>
        {nextButton && <Button path="game" text="DoNE" dark endRound />}
      </div>
    </GameLayout>
  );
}
