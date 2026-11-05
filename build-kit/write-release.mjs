// Turns `gh release view --json assets,url,tagName` output into the website's release.json.
import fs from 'node:fs';
const [, , input, output, repo, version] = process.argv;
const r = JSON.parse(fs.readFileSync(input, 'utf8'));
const assets = {};
for (const a of r.assets ?? []) assets[a.name] = { url: a.url, size: a.size };
fs.writeFileSync(output, JSON.stringify({ version, repo, url: r.url, assets, updated: new Date().toISOString() }, null, 2) + '\n');
console.log('release.json:', Object.keys(assets).join(', '));
