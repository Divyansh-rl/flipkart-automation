import { Page } from "playwright";

const SEARCH_TRENDS_URL =
  "https://seller.flipkart.com/index.html#dashboard/growth/seller-insights?section=search_trends&selectedVertical=women_night_dress_nighty";

export async function scrapeKeywords(
  page: Page
): Promise<string[]> {
  console.log("Opening Search Trends...");

  await page.goto(SEARCH_TRENDS_URL, {
  waitUntil: "domcontentloaded",
});

await page
  .locator("[data-testid^='grid-component-row-']")
  .first()
  .waitFor();

const keywords = await page
  .locator("[data-testid^='grid-component-row-'] p")
  .allTextContents();

  console.log(
    `✅ Scraped ${keywords.length} keywords`
  );

  return keywords;
}