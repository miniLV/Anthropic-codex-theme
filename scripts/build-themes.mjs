import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { themes } from "../src/theme-spec.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const outputDir = resolve(root, "themes");

await mkdir(outputDir, { recursive: true });

for (const theme of themes) {
  const outputPath = resolve(outputDir, `${theme.slug}.json`);
  await writeFile(outputPath, `${JSON.stringify(theme.data, null, 2)}\n`, "utf8");
  console.log(`wrote ${outputPath}`);
}
