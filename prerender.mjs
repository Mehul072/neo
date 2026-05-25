import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import handler from 'serve-handler';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROUTES = ['/', '/elevators', '/contactus'];
const BUILD_DIR = path.join(__dirname, 'build');
const PORT = 5555;

async function prerender() {
  const server = createServer((req, res) => {
    return handler(req, res, {
      public: BUILD_DIR,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Pre-rendering: ${url}`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait a bit for any animations/lazy content
    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();

    // Determine output path
    const outputDir =
      route === '/'
        ? BUILD_DIR
        : path.join(BUILD_DIR, route.replace(/^\//, ''));

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputFile, html);
    console.log(`  ✅ Saved: ${outputFile}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('\n🎉 Pre-rendering complete! All routes now have static HTML.');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
