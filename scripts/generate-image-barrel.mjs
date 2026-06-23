import fs from "node:fs";
import path from "node:path";

const ROOT = "src/assets/images";
const OUTPUT = path.join(ROOT, "index.ts");

const groups = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

function walkImages(dir, base = dir) {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkImages(full, base));
    } else if (/\.(webp|png|jpg|jpeg|avif)$/i.test(entry.name)) {
      files.push(path.relative(base, full).split(path.sep).join("/"));
    }
  }
  return files;
}

const toCamel = (str) =>
  str
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^([A-Z])/, (m) => m.toLowerCase());

const toConstName = (str) => str.replace(/[- ]+/g, "_").toUpperCase();

const toVarName = (str) =>
  `_${str}`
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9_$]+/g, "_")
    .replace(/^_([0-9])/, "_$1");

function setNested(target, file, varName) {
  const parts = file.split("/");
  const leaf = toCamel(parts.pop());
  let cursor = target;
  for (const part of parts) {
    const key = toCamel(part);
    cursor[key] ??= {};
    cursor = cursor[key];
  }
  cursor[leaf] = varName;
}

function renderObject(obj, indent = "  ") {
  return Object.entries(obj)
    .map(([key, value]) => {
      const renderedKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key)
        ? key
        : JSON.stringify(key);
      if (typeof value === "string")
        return `${indent}${renderedKey}: ${value},`;
      return `${indent}${renderedKey}: {\n${renderObject(value, `${indent}  `)}\n${indent}},`;
    })
    .join("\n");
}

// Prefer webp over jpg/jpeg/png when same base name exists
const extPriority = ["webp", "png", "jpg", "jpeg", "avif"];

let imports = [];
let exports_ = [];

for (const group of groups) {
  let files = walkImages(path.join(ROOT, group.name));

  // Deduplicate: keep only highest priority extension per base name
  const seen = new Map();
  for (const file of files) {
    const base = file.replace(/\.[^.]+$/, "").toLowerCase();
    const ext = path.extname(file).toLowerCase().replace(".", "");
    const priority = extPriority.indexOf(ext);
    if (!seen.has(base) || priority < seen.get(base).priority) {
      seen.set(base, { file, priority });
    }
  }
  files = Array.from(seen.values())
    .map((v) => v.file)
    .sort();

  const entries = {};

  for (const file of files) {
    const varName = toVarName(`${group.name}_${file}`);

    imports.push(`import ${varName} from "./${group.name}/${file}";`);

    setNested(entries, file, varName);
  }

  let extra = "";
  if (toConstName(group.name) === "HERO") {
    extra = `  lombok: _hero_hero_lombok,
  main: _hero_hero,
`;
  }
  exports_.push(`
export const ${toConstName(group.name)} = {
${renderObject(entries)}
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
