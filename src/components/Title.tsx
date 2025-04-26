"use client"

import { useRouter } from "next/navigation";

export default function Title() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")}>
      <div className="border px-10 py-4 w-fit box-solid-shadow min-w-[196px]">
        <h1 className="font-medium text-[32px] select-none">PARTeY</h1>
      </div>
    </button>
  );
}
