import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const manifest = JSON.parse(await readFile("dist/.vite/manifest.json", "utf8"));
const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { render, pages } = await server.ssrLoadModule("/scripts/prerender-entry.mjs");
  for (const route of Object.keys(pages)) {
    const file = path.join(root, "dist", route.slice(1), "index.html");
    let content = await render(route);
    // Vite's source renderer uses source URLs; publish the production assets.
    const sourceAssets = [...content.matchAll(/\/(src\/resources\/[^"<>]+)(?=["<>])/g)];
    for (const [url, source] of sourceAssets) {
      const asset = manifest[decodeURI(source)];
      let replacement;
      if (asset) {
        replacement = `/${asset.file}`;
      } else {
        // Small imported assets are inlined by the production build.
        const bytes = await readFile(path.join(root, decodeURI(source)));
        const mime = { ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".gif": "image/gif" }[path.extname(source)];
        if (!mime) throw new Error(`Unknown inline asset type: ${source}`);
        replacement = `data:${mime};base64,${bytes.toString("base64")}`;
      }
      content = content.replaceAll(url, replacement);
    }
    if (!/<h1[\s>]/.test(content)) throw new Error(`Missing page heading: ${route}`);
    if (content.includes("Loading page…")) throw new Error(`Unresolved page: ${route}`);
    for (const match of content.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)) {
      await access(path.join(root, "dist", decodeURI(match[1])));
    }
    let html = await readFile(file, "utf8");
    // Include the route CSS before first paint, even when JavaScript is disabled.
    const routeModule = route === "/" ? null : route.startsWith("/devlogs") ? "Devlog" : route.startsWith("/games/play/") ? "GamePlayer" : route === "/games" ? "Games" : route.slice(1).replace(/^./, (letter) => letter.toUpperCase());
    const styles = new Set();
    const addStyles = (key) => {
      const entry = manifest[key];
      if (!entry) return;
      for (const css of entry.css ?? []) styles.add(css);
      for (const imported of entry.imports ?? []) addStyles(imported);
    };
    if (routeModule) addStyles(`src/components/${routeModule}.tsx`);
    for (const css of styles) {
      if (!html.includes(`href="/${css}"`)) html = html.replace("</head>", `<link rel="stylesheet" href="/${css}" />\n  </head>`);
    }
    await writeFile(file, html.replace('<div id="root"></div>', () => `<div id="root">${content}</div>`));
  }
  console.log(`Prerendered ${Object.keys(pages).length} public routes with production assets.`);
} finally {
  await server.close();
}
