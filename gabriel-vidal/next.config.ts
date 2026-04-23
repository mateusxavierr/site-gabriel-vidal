import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pasta deste projeto (nunca usar ~/ só por existir outro package-lock na home)
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
