"use client";

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useState } from "react";

export default function JoinPage() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-5 w-fit">
        <TextInput label="USeRNAME" value={username} onChange={setUsername} />
        <TextInput label="RoOM ID" value={roomId} onChange={setRoomId} />
      </div>
      <Button path={""} text={"JOiN"} />
    </div>
  );
}
