import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const outDir = join(root, 'public');
const staticPaths = ['index.html', 'assets', 'sw.js', 'site.webmanifest'];

if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}

mkdirSync(outDir, { recursive: true });

for (const item of staticPaths) {
  const source = join(root, item);
  if (!existsSync(source)) {
    console.warn(`Skipping missing path: ${item}`);
    continue;
  }

  cpSync(source, join(outDir, item), { recursive: true });
}

console.log('Prepared Vercel output in public/');
