"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGameStore } from "@/lib/store/useGameStore";

interface ButtonProps {
  path: string;
  text: string;
  dark?: boolean;
  endRound?: boolean;
}

export default function Button({ path, text, dark, endRound }: ButtonProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const router = useRouter();
  const { incrementRound } = useGameStore();

  return (
    <button
      onMouseEnter={() => setIsLeaving(false)}
      onMouseLeave={() => setIsLeaving(true)}
      className={`border px-10 py-4 w-fit box-solid-shadow min-w-[196px] transition-transform duration-200 ${
        dark ? "bg-black border-[#DBDBDB]" : "bg-[#44743F]"
      } ${isLeaving ? "bounce-drop" : "hover:-translate-y-1"}`}
      onClick={() => {
        router.push(`/${path}`);
        if (endRound) {
          incrementRound();
        }
      }}
    >
      <p className="font-medium text-[32px] select-none text-white">{text}</p>
    </button>
  );
}
