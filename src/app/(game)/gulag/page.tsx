import PlayersPanel from "@/components/PlayersPanel";
import { PlayerStatusType } from "@/lib/type";
import Button from "@/components/Button";
import CopyButton from "@/components/CopyButton";

export default function GulagPage() {
  const playersStatus: PlayerStatusType[] = [
    "join",
    "ready",
    "fill",
    "not-fill",
    "vote-leave",
    "none",
    "none",
    "none",
  ];

  return (
    <div className="flex flex-col gap-9">
      <PlayersPanel displayNumbers players={playersStatus} />
      <CopyButton useText="RoOM ID" />
      <Button path="" text="STaRT" dark />
    </div>
  );
}
