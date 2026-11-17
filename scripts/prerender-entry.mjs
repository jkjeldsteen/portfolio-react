import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { PassThrough } from "node:stream";
import { AppContent } from "../src/App.tsx";
export { pages } from "../src/seo.ts";

// Wait for lazy route components so the output contains content, not a loader.
export function render(pathname) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    output.setEncoding("utf8");
    output.on("data", (chunk) => { html += chunk; });
    output.on("end", () => resolve(html));
    output.on("error", reject);
    const stream = renderToPipeableStream(
      createElement(StaticRouter, { location: pathname }, createElement(AppContent)),
      {
        onAllReady() { stream.pipe(output); },
        onShellError: reject,
        onError(error) { reject(error); },
      },
    );
  });
}
