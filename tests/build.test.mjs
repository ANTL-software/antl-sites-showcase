import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const root = new URL("../dist/", import.meta.url);
const html = readFileSync(new URL("index.html", root), "utf8");
const base = process.env.DEPLOY_TARGET === "github-pages" ? "/antl-sites-showcase/" : "/";

test("production HTML exposes the complete catalogue before JavaScript runs", () => {
  assert.equal((html.match(/<h1>/g) ?? []).length, 1);
  for (const name of ["Horizon", "Mouvement Studio", "Véloce", "Garage Élan", "Maison Levain", "Studio Parallèle"]) assert.ok(html.includes(name));
  assert.equal((html.match(/class="template-card"/g) ?? []).length, 6);
  assert.ok(!html.includes("<!--app-html-->"));
});

test("SEO identifies the production domain, service and six demo pages", () => {
  assert.ok(html.includes('<link rel="canonical" href="https://showcase.antl.fr/"'));
  assert.ok(html.includes('property="og:url" content="https://showcase.antl.fr/"'));
  const match = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert.ok(match);
  const graph = JSON.parse(match[1])["@graph"];
  assert.equal(graph.find(item => item["@type"] === "ItemList").itemListElement.length, 6);
  assert.equal(graph.find(item => item["@type"] === "Service").provider["@id"], "https://antl.fr/#organization");
  assert.ok(readFileSync(new URL("robots.txt", root), "utf8").includes("Sitemap: https://showcase.antl.fr/sitemap.xml"));
  assert.ok(readFileSync(new URL("sitemap.xml", root), "utf8").includes("<loc>https://showcase.antl.fr/</loc>"));
});

test("all built local assets resolve under the selected deployment base", () => {
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const path = match[1];
    if (!path.startsWith("/") || path.startsWith("//")) continue;
    assert.ok(path.startsWith(base), path);
    assert.ok(existsSync(new URL(path.slice(base.length).split("?")[0], root)), path);
  }
  const notFound = readFileSync(new URL("404.html", root), "utf8");
  assert.ok(notFound.includes(`href="${base}"`));
  assert.ok(notFound.includes(`src="${base}brand/antl-logo.png"`));
  assert.ok(notFound.includes('name="robots" content="noindex"'));
  assert.ok(!notFound.includes("%BASE_URL%"));
});
