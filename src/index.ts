import { chromium } from "playwright";
import { runFlow } from "./flow";

async function main() {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");

  const context = browser.contexts()[0];

  if (!context) {
    throw new Error("No browser context found.");
  }

  const page = context.pages()[0] ?? await context.newPage();

  page.setDefaultTimeout(30000);

  console.log("✅ Connected to Brave successfully!");

console.log("✅ Connected to Brave successfully!");


  await runFlow(page);
}

main().catch(console.error);