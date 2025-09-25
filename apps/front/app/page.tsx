"use client";

import { useBeep } from "@/hooks/useBeep";

export default function Page() {
  const { beep } = useBeep();
  return <input type="text" onChange={() => beep()} />;
}
