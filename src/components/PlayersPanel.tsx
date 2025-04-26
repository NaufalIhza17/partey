import CircleAvatar from "./CircleAvatar";
import { PlayerStatusType } from "@/lib/type";

interface PlayersPanelProps {
  displayNumbers?: boolean;
  players: PlayerStatusType[];
}

export default function PlayersPanel({
  displayNumbers,
  players,
}: PlayersPanelProps) {
  const activePlayersCount = players.filter(
    (status) => status !== "none"
  ).length;

  return (
    <div className="flex flex-col gap-[10px] w-[196px] max-w-[196px]">
      <div className="flex flex-wrap gap-x-3 gap-y-[10px] justify-between w-full p-[15px] box-solid-shadow border">
        {players.map((player, i) => (
          <CircleAvatar key={i} status={player} />
        ))}
      </div>
      {displayNumbers && (
        <p className="w-full text-right">{activePlayersCount} | 8 PLaYERs</p>
      )}
    </div>
  );
}
