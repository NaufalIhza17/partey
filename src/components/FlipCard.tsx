"use client";

import { useState } from "react";

export default function FlipCard() {
  const [choosenDare, setChoosenDare] = useState("Kiss someone!");
  const [choosenTruth, setChoosenTruth] = useState("Are you gay?");

  return (
    <div className="w-[196px] flex flex-col gap-[10px] p-3 bg-black border border-[#DBDBDB] box-solid-shadow text-white">
      <h3 className="select-none opacity-80">pick...</h3>
      <p className="h-[183px] text-xl font-medium">Truth or dare card</p>
    </div>
  );
}
