"use client";

import Title from "@/components/Title";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GameLayout({
  children,
  isDone,
  isCompletedHold,
  setIsCompletedHold,
}: Readonly<{
  children: React.ReactNode;
  isDone: boolean;
  isCompletedHold: boolean;
  setIsCompletedHold: (value: boolean) => void;
}>) {
  const [isHolding, setIsHolding] = useState(false);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleHoldStart = () => {
    if (isDone) {
      setIsHolding(true);

      holdTimerRef.current = setTimeout(() => {
        setIsCompletedHold(true);
      }, 5000);
    }
  };

  const handleHoldEnd = () => {
    setIsHolding(false);

    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="w-full h-screen flex flex-col gap-[36px] justify-center items-center overflow-hidden"
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
      animate={{
        backgroundColor: isCompletedHold
          ? "#8DD900"
          : isHolding
          ? ["#DBDBDB", "#3b82f6", "#DBDBDB"]
          : "#DBDBDB",
      }}
      transition={{
        duration: isHolding && !isCompletedHold ? 1.5 : 0.5,
        ease: "easeInOut",
        repeat: isHolding && !isCompletedHold ? Infinity : 0,
      }}
    >
      <Title />
      {children}
    </motion.div>
  );
}
