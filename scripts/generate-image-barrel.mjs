import fs from "node:fs";
import path from "node:path";

const ROOT = "src/assets/images";
const OUTPUT = path.join(ROOT, "index.ts");

const groups = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

const toCamel = (str) =>
  str
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^([A-Z])/, (m) => m.toLowerCase());

const toConstName = (str) => str.replace(/[- ]+/g, "_").toUpperCase();

// Prefer webp over jpg/jpeg/png when same base name exists
const extPriority = ["webp", "png", "jpg", "jpeg", "avif"];

let imports = [];
let exports_ = [];

for (const group of groups) {
  let files = fs
    .readdirSync(path.join(ROOT, group.name))
    .filter((file) => /\.(webp|png|jpg|jpeg|avif)$/i.test(file))
    .sort();

  // Deduplicate: keep only highest priority extension per base name
  const seen = new Map();
  for (const file of files) {
    const base = path.basename(file).replace(/\.[^.]+$/, "").toLowerCase();
    const ext = path.extname(file).toLowerCase().replace(".", "");
    const priority = extPriority.indexOf(ext);
    if (!seen.has(base) || priority < seen.get(base).priority) {
      seen.set(base, { file, priority });
    }
  }
  files = Array.from(seen.values()).map((v) => v.file).sort();

  const entries = [];

  for (const file of files) {
    const key = toCamel(file);
    const varName = `_${group.name}_${key}`;

    imports.push(`import ${varName} from "./${group.name}/${file}";`);

    entries.push(`  ${key}: ${varName},`);
  }

  let extra = "";
  if (toConstName(group.name) === "HERO") {
    extra = `  lombok: _hero_heroLombok,
  main: _hero_hero,
`;
  }
  exports_.push(`
export const ${toConstName(group.name)} = {
${entries.join("\n")}
${extra}};
`);
}

const content = `// AUTO-GENERATED FILE
// DO NOT EDIT MANUALLY

${imports.join("\n")}
${exports_.join("\n")}
`;

fs.writeFileSync(OUTPUT, content);

console.log(`Generated ${OUTPUT}`);
