import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const source = readFileSync(new URL("../src/content/catalog.ts", import.meta.url), "utf8");
function jpegDimensions(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8);
  let offset = 2;
  while (offset < bytes.length) {
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    const length = bytes.readUInt16BE(offset);
    if ([0xc0,0xc1,0xc2].includes(marker)) return { width: bytes.readUInt16BE(offset + 5), height: bytes.readUInt16BE(offset + 3) };
    offset += length;
  }
  throw new Error("JPEG dimensions not found");
}
test("six demos have their desktop and mobile assets", () => {
  for (const id of ["01","02","03","04","05","06"]) {
    assert.ok(source.includes('id: "' + id + '"'));
    for (const device of ["desktop","mobile"]) for (const view of ["home","detail"]) {
      const path = new URL("../public/previews/" + id + "-" + device + "-" + view + ".jpg", import.meta.url);
      assert.ok(existsSync(path), path.pathname);
      assert.ok(readFileSync(path).byteLength > 1000);
      assert.deepEqual(jpegDimensions(readFileSync(path)), device === "desktop" ? { width: 1440, height: 1000 } : { width: 390, height: 844 });
    }
  }
});
test("brand stays lowercase in authored editorial copy", () => {
  const copy = readFileSync(new URL("../src/content/site.ts", import.meta.url), "utf8");
  assert.equal(/ANTL|Antl/.test(copy), false);
});
test("assets and build use the repository base path", () => {
  const config = readFileSync(new URL("../vite.config.ts", import.meta.url), "utf8");
  assert.ok(config.includes('base: "/antl-sites-showcase/"'));
  const assets = readFileSync(new URL("../src/utils/assets.ts", import.meta.url), "utf8");
  assert.ok(assets.includes("import.meta.env.BASE_URL"));
});
