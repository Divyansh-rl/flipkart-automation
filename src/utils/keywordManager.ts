import { Page } from "playwright";

import { loadKeywordCache, saveKeywordCache } from "./keywordCache";
import { scrapeKeywords } from "./keywordScraper";
import { filterKeywords } from "./keywordFilter";

type KeywordOptions = {
  start?: number;
  count?: number;
  filter?: boolean;
};

export async function getKeywords({
  start = 0,
  count = 20,
  filter = true,
}: KeywordOptions = {}): Promise<string[]> {
  const cache = await loadKeywordCache();

  if (!cache) {
    return [];
  }

  const keywords = filter
    ? filterKeywords(cache)
    : cache;

  return keywords.slice(start, start + count);
}

export async function updateKeywordCache(page: Page): Promise<void> {
  const cache = await loadKeywordCache();

  if (cache) {
    return;
  }

  console.log("Updating keyword cache...");

  const keywords = await scrapeKeywords(page);

 await saveKeywordCache(keywords);

  console.log("✅ Keyword cache updated");
}