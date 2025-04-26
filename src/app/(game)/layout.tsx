import type { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "PARTeY | Game",
  description: "Multiplayer Website Game",
};

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col gap-[36px] justify-center items-center overflow-hidden">
      <Title />
      {children}
    </div>
  );
}
