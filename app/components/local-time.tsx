"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

/** Jam lokal, diisi setelah mount biar server & client nggak beda. */
export function LocalTime() {
  const [time, setTime] = useState<string>("--.--");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: site.timezone,
    });

    const tick = () => setTime(format.format(new Date()));
    tick();

    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return <time suppressHydrationWarning>{time}</time>;
}
