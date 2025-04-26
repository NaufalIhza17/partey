"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

interface CardProps {
  setInputValue: (text: string) => void;
  title: string;
  placeholder: string;
}

export default function Card({ setInputValue, title, placeholder }: CardProps) {
  const [textInput, setTextInput] = useState("");

  const x = useMotionValue(0);
  const controls = useAnimation();
  const distance = useTransform(x, [-300, 0, 300], [0.1, 1, 0.1]);
  const opacity = useTransform(distance, [0, 300], [1, 0.1]);

  const handleDragEnd = async (
    _: any,
    info: { offset: { x: number; y: number } }
  ) => {
    const offsetX = info.offset.x;
    const absOffsetX = Math.abs(offsetX);

    if (!textInput.trim()) {
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 },
      });
      return;
    }

    if (absOffsetX > 100) {
      await controls.start({
        x: offsetX * 3,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      setInputValue(textInput);
    } else {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300 },
      });
    }
  };

  useEffect(() => {
    controls.start({
      scale: [0, 0.5, 1.05, 1],
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [controls]);

  return (
    <motion.div
      drag="x"
      dragConstraints={textInput.trim() ? undefined : { left: 0, right: 0 }}
      style={{ x, opacity }}
      animate={controls}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0.1, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[196px] flex flex-col gap-[10px] p-3 bg-black border border-[#DBDBDB] box-solid-shadow text-white"
    >
      <h3 className="select-none">{title}</h3>
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder={placeholder}
        className="text-xl font-medium w-[172px] h-[183px] outline-none focus:outline-none resize-none "
      />
    </motion.div>
  );
}
