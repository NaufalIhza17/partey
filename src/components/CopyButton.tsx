"use client";

import { useState } from "react";

interface CopyButtonProps {
  useText: string;
  passId?: string;
}

export default function CopyButton({ useText, passId = "failed" }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(passId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="flex items-center justify-between w-[196px] opacity-80">
      {useText && (
        <p
          className={`text-2xl transition duration-300 ease-in-out ${
            isCopied ? "text-[#44743F]" : "text-black"
          }`}
        >
          {useText}
        </p>
      )}
      <button
        onClick={handleCopy}
        className={`transition duration-300 ease-in-out ${
          isCopied ? "stroke-[#44743F]" : "stroke-black/80"
        }`}
      >
        <svg width="28px" height="28px" viewBox="0 0 32 32" version="1.1">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="icomoon-ignore"> </g>{" "}
            <path
              d="M27.845 7.385l-5.384-5.384h-11.845v4.307h-6.461v23.69h17.229v-4.307h6.461v-18.306zM22.461 3.524l3.861 3.861h-3.861v-3.861zM5.232 28.922v-21.537h9.692v5.384h5.384v16.153h-15.076zM16 7.831l3.861 3.861h-3.861v-3.861zM21.384 24.615v-12.922l-5.384-5.384h-4.307v-3.231h9.692v5.384h5.384v16.153h-5.384z"
              fill="#000000"
            >
              {" "}
            </path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
