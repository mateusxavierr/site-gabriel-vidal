import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Pasta deste projeto (nunca usar ~/ só por existir outro package-lock na home)
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages (projeto) fica em username.github.io/<repo>/ — definir no CI, ex: SITE_BASE_PATH=/site-gabriel-vidal
const siteBasePath = (process.env.SITE_BASE_PATH || "").replace(/\/$/, "");
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: siteBasePath,
  },
  turbopack: {
    root: projectRoot,
  },
  // deploy estático (GitHub Pages): gera out/ com index.html
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        ...(siteBasePath ? { basePath: siteBasePath } : {}),
      }
    : {}),
};

export default nextConfig;
