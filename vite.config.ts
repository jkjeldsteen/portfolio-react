import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { getSeo, pages, structuredData, SITE_URL } from "./src/seo"

function seoPages(): Plugin {
  const escape = (value: string) => value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
  const head = (pathname: string) => {
    const seo = getSeo(pathname);
    return `<!-- seo:start -->
    <title>${escape(seo.title)}</title>
    <meta name="description" content="${escape(seo.description)}" />
    <meta name="robots" content="${seo.robots}" />
    <link rel="canonical" href="${escape(seo.url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Jakob Kjeldsteen" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${escape(seo.title)}" />
    <meta property="og:description" content="${escape(seo.description)}" />
    <meta property="og:url" content="${escape(seo.url)}" />
    <meta property="og:image" content="${escape(seo.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(seo.title)}" />
    <meta name="twitter:description" content="${escape(seo.description)}" />
    <meta name="twitter:image" content="${escape(seo.image)}" />
    <script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>
    <!-- seo:end -->`;
  };
  return {
    name: "portfolio-seo",
    enforce: "post",
    transformIndexHtml(html, context) {
      return html.replace(/<title>[\s\S]*?<\/title>/, head(context.path === "/index.html" ? "/" : context.path));
    },
    generateBundle(_options, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset" || typeof index.source !== "string") {
        this.error("SEO generation requires the built index.html asset.");
      }
      for (const route of Object.keys(pages).filter((route) => route !== "/")) {
        this.emitFile({
          type: "asset", fileName: `${route.slice(1)}/index.html`,
          source: index.source.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, head(route)),
        });
      }
      this.emitFile({
        type: "asset", fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`).join("\n")}\n</urlset>\n`,
      });
    },
  };
}
 
export default defineConfig({
  build: { manifest: true },
  plugins: [react(), seoPages()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    open: false, // Automatically open the browser on server start
    // Bind to localhost to avoid exposing the dev server to the network
    host: 'localhost',
    // Restrict filesystem access to only project source and public assets
    fs: {
      allow: [
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'public'),
        process.cwd() // Allow project root for index.html
      ]
    },
    allowedHosts: [
      'jkjeldsteen.com'
    ]
  },
})
