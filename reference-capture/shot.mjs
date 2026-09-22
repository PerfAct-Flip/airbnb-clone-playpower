import { chromium } from "playwright";

const [, , url, outPath, action] = process.argv;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => console.log("[pageerror]", e.message));
page.on("console", (m) => {
  if (m.type() === "error") console.log("[console.error]", m.text());
});
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

if (action === "showAll") {
  await page.getByText(/show all photos/i).first().click();
  await page.waitForTimeout(500);
}
if (action === "lightbox") {
  await page.getByText(/show all photos/i).first().click();
  await page.waitForTimeout(500);
  await page.locator('[data-testid="tour-photo"]').first().click();
  await page.waitForTimeout(400);
}

await page.screenshot({ path: outPath, fullPage: action ? false : true });
await browser.close();
