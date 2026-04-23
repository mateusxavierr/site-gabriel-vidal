/** Base path em deploy (ex.: /site-gabriel-vidal no GitHub Pages). Vazio no dev e em build sem SITE_BASE_PATH. */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
