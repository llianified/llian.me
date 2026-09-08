"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("id-ID", {
          timeZone: site.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };

    tick();
    const id = window.setInterval(tick, 1_000);
    return () => window.clearInterval(id);
  }, []);

  return <time suppressHydrationWarning>{time || "—"}</time>;
}
