"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const formatter = new Intl.DateTimeFormat("id-ID", {
  timeZone: site.timezone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timeout: number | undefined;

    function updateTime() {
      window.clearTimeout(timeout);
      if (document.hidden) return;

      setTime(formatter.format(new Date()));
      timeout = window.setTimeout(updateTime, 60_000 - (Date.now() % 60_000));
    }

    updateTime();
    document.addEventListener("visibilitychange", updateTime);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("visibilitychange", updateTime);
    };
  }, []);

  return (
    <time dateTime={time ? `${time.replace(".", ":")}:00+07:00` : undefined}>
      {time || "—"}
    </time>
  );
}
