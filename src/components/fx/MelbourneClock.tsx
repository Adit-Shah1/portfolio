"use client";

import { useEffect, useState } from "react";

/** Live Melbourne clock; renders the placeholder until mounted (hydration-safe). */
export default function MelbourneClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Melbourne",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>MEL {time ?? "--:--:--"}</span>;
}
