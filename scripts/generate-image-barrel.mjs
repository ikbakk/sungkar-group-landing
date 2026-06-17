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

let imports = [];
let exports_ = [];

for (const group of groups) {
  const files = fs
    .readdirSync(path.join(ROOT, group.name))
    .filter((file) => /\.(webp|png|jpg|jpeg|avif)$/i.test(file))
    .sort();

  const entries = [];

  for (const file of files) {
    const key = toCamel(file);
    const varName = `_${group.name}_${key}`;

    imports.push(`import ${varName} from "./${group.name}/${file}";`);

    entries.push(`  ${key}: ${varName},`);
  }

  exports_.push(`
export const ${toConstName(group.name)} = {
${entries.join("\n")}
};
`);
}

const content = `// AUTO-GENERATED FILE
// DO NOT EDIT MANUALLY

${imports.join("\n")}
${exports_.join("\n")}
`;

fs.writeFileSync(OUTPUT, content);

console.log(`Generated ${OUTPUT}`);
