import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'temporary screenshots');
mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';

const PAGES = [
  { path: '/',               name: 'homepage' },
  { path: '/use-cases',      name: 'use-cases' },
  { path: '/use-cases/food-delivery', name: 'use-case-food-delivery' },
  { path: '/how-it-works',   name: 'how-it-works' },
  { path: '/pricing',        name: 'pricing' },
  { path: '/shop',           name: 'shop-denny' },
];

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

let n = 1;
for (const page of PAGES) {
  const p = await browser.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(`${url}${page.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 500));

  // Full-page screenshot
  const fullPath = join(outDir, `screenshot-${n}-${page.name}-full.png`);
  await p.screenshot({ path: fullPath, fullPage: true });
  console.log(`✓ ${fullPath}`);

  // Viewport screenshot
  const vpPath = join(outDir, `screenshot-${n}-${page.name}-viewport.png`);
  await p.screenshot({ path: vpPath, fullPage: false });
  console.log(`✓ ${vpPath}`);

  await p.close();
  n++;
}

await browser.close();
console.log(`\nAll screenshots saved to: ${outDir}`);
