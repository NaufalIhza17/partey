import { statusColor } from "@/lib/const";

interface CircleAvatarProps {
  status: "join" | "ready" | "fill" | "not-fill" | "vote-leave" | "none";
}

export default function CircleAvatar({ status }: CircleAvatarProps) {
  const choosenColor =
    statusColor.find((item) => item.name === status)?.color ?? "";

  return (
    <div
      className="w-[30px] h-[30px] border rounded-full"
      style={{ backgroundColor: `#${choosenColor}` }}
    ></div>
  );
}
