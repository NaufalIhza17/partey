"use client";

import { useState, useEffect } from "react";

interface SwitcherProps<T extends { name: string }> {
  switchObjects: T[];
  onChange?: (selected: T) => void;
}

export default function Switcher<T extends { name: string }>({
  switchObjects,
  onChange,
}: SwitcherProps<T>) {
  const [index, setIndex] = useState(0);
  const isAtFirst = index === 0;
  const isAtLast = index === switchObjects.length - 1;

//   useEffect(() => {
//     if (switchObjects.length > 0) {
//       onChange?.(switchObjects[0]);
//     }
//   }, [switchObjects, onChange]);

  const handleLeft = () => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex);
      onChange?.(switchObjects[newIndex]);
    }
  };

  const handleRight = () => {
    if (index < switchObjects.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      onChange?.(switchObjects[newIndex]);
    }
  };

  return (
    <div className="flex items-center justify-between text-black/80">
      <button
        className={`rotate-180 cursor-pointer transition-opacity ${
          isAtFirst ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleLeft}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            ></path>
          </g>
        </svg>
      </button>
      <div>
        <p className="text-2xl -translate-y-1">{switchObjects[index].name}</p>
      </div>
      <button
        className={`cursor-pointer transition-opacity ${
          isAtLast ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleRight}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}
