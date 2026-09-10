import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * This site does not need a server: it has no route handlers, Server Actions,
   * next/image optimization, or ISR. `next build` produces an `out/` directory
   * containing static HTML, CSS, and JavaScript ready for any CDN.
   */
  output: "export",
};

export default nextConfig;
