import TextButton from "@/components/TextButton";
import Title from "@/components/Title";

export default function Home() {

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-16">
        <Title />
        <div className="w-full flex justify-center gap-[54px]">
          <TextButton path={"join"} text={"JoIN"} />
          <TextButton path={"create"} text={"CReATE"} />
        </div>
      </div>
    </div>
  );
}
