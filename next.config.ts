import type { NextConfig } from "next";
import { resumeVariants } from "./lib/data/resume";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      },
      // Keep pages protected from framing; only these PDFs may be embedded by this site.
      ...resumeVariants.map((resume) => ({
        source: resume.pdfUrl,
        headers: [{ key: "X-Frame-Options", value: "SAMEORIGIN" }]
      }))
    ];
  }
};

export default nextConfig;
