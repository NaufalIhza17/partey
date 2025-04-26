"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ButtonProps {
  path: string;
  text: string;
  dark?: boolean;
}

export default function Button({ path, text, dark }: ButtonProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const router = useRouter();

  return (
    <button
      onMouseEnter={() => setIsLeaving(false)}
      onMouseLeave={() => setIsLeaving(true)}
      className={`border px-10 py-4 w-fit box-solid-shadow min-w-[196px] transition-transform duration-200 ${
        dark ? "bg-black border-[#DBDBDB]" : "bg-[#44743F]"
      } ${isLeaving ? "bounce-drop" : "hover:-translate-y-1"}`}
      onClick={() => {
        router.push(`/${path}`);
      }}
    >
      <p className="font-medium text-[32px] select-none text-white">{text}</p>
    </button>
  );
}
