"use client";

import Button from "@/components/Button";
import Switcher from "@/components/Switcher";
import TextInput from "@/components/TextInput";
import { gameMode } from "@/constants/gameMode";
import { useState } from "react";

export default function CreatePage() {
  const [username, setUsername] = useState("");
  const [selectedMode, setSelectedMode] = useState(gameMode[0].name);

  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-5 w-fit">
        <TextInput label="USeRNAME" value={username} onChange={setUsername} />
        <Switcher
          switchObjects={gameMode}
          onChange={(selectedMode) => {
            console.log(selectedMode.name);
            setSelectedMode(selectedMode.name);
          }}
        />
      </div>
      <Button path={""} text={"CREaTE"} />
    </div>
  );
}
