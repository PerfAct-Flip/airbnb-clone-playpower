import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1200 } });
await page.goto("file://" + path.join(dir, "diagram.html"));
await page.waitForTimeout(200);
await page.screenshot({
  path: path.join(dir, "architecture-diagram.png"),
  fullPage: true,
});
await browser.close();
console.log("Rendered architecture-diagram.png");
