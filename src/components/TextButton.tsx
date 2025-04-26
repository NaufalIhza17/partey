"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface TextButtonProps {
  path: string;
  text: string;
}

export default function TextButton({ path, text }: TextButtonProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const router = useRouter();

  return (
    <button
      onMouseEnter={() => setIsLeaving(false)}
      onMouseLeave={() => setIsLeaving(true)}
      className={`transition-transform duration-200 ${
        isLeaving ? "bounce-drop" : "hover:-translate-y-1"
      }`}
      onClick={() => {
        router.push(`/${path}`);
      }}
    >
      <p className="font-bold text-2xl">{text}</p>
    </button>
  );
}
