import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "src/assets/images");
const files = {
  "index.ts": `export { BRAND } from './brand';\nexport { HERO } from './hero';\nexport { DESTINATIONS } from './destinations';\nexport { GALLERY } from './gallery';\nexport { ACCOMMODATIONS } from './accommodations';\nexport { VEHICLES } from './vehicles';\nexport { LEGALITY } from './legality';\nexport { OG } from './og';\n`,
};
for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(root, name), content, "utf8");
}
console.log("Image barrels stay split by concern; root index refreshed.");
