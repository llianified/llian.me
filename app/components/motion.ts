import type { CSSProperties } from "react";

/* Sets the `--i` index the motion system reads to stagger siblings. Plain
   module (no "use client") so both server and client components can call it. */
export function stagger(index: number, extra?: CSSProperties): CSSProperties {
  return { ...extra, "--i": index } as CSSProperties;
}
