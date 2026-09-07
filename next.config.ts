import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Situs ini tidak butuh server: tidak ada route handler, server action,
   * next/image, atau ISR. Jadi `next build` langsung menghasilkan folder
   * `out/` berisi HTML/CSS/JS mentah yang bisa ditaruh di CDN mana pun.
   */
  output: "export",
};

export default nextConfig;
