import { readFile, writeFile, rm } from "node:fs/promises";
import { render, structuredData } from "../.prerender/entry-server.js";

const htmlPath = new URL("../dist/index.html", import.meta.url);
const template = await readFile(htmlPath, "utf8");
if (!template.includes("<!--app-html-->")) throw new Error("Missing prerender placeholder");
const html = template
  .replace("<!--app-html-->", render())
  .replace("<!--structured-data-->", `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`);
await writeFile(htmlPath, html);
const notFoundPath = new URL("../dist/404.html", import.meta.url);
const notFound = await readFile(notFoundPath, "utf8");
await writeFile(notFoundPath, notFound.replaceAll("%BASE_URL%", process.env.DEPLOY_TARGET === "github-pages" ? "/antl-sites-showcase/" : "/"));
await rm(new URL("../.prerender", import.meta.url), { recursive: true, force: true });
console.log("Prerendered showcase and structured data.");
