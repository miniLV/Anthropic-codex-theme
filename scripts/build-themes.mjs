import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { themes, shareThemes } from "../src/theme-spec.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const outputDir = resolve(root, "themes");
const shareDir = resolve(root, "share");

await mkdir(outputDir, { recursive: true });
await mkdir(shareDir, { recursive: true });

for (const theme of themes) {
  const outputPath = resolve(outputDir, `${theme.slug}.json`);
  await writeFile(outputPath, `${JSON.stringify(theme.data, null, 2)}\n`, "utf8");
  console.log(`wrote ${outputPath}`);
}

for (const theme of shareThemes) {
  const outputPath = resolve(shareDir, `${theme.slug}.txt`);
  const payload = `codex-theme-v1:${JSON.stringify(theme.data)}\n`;
  await writeFile(outputPath, payload, "utf8");
  console.log(`wrote ${outputPath}`);
}
