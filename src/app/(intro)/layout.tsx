import type { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "PARTeY | Intro",
  description: "Multiplayer Website Game",
};

export default function IntroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col gap-[60px] justify-center items-center">
      <Title />
      {children}
    </div>
  );
}
