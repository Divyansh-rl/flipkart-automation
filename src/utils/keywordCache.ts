import { promises as fs } from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), "cache", "keyword_cache");

const CACHE_FILE = path.join(
  CACHE_DIR,
  "women_night_dress_nighty.json"
);

type KeywordCache = {
  updated: string;
  keywords: string[];
};

function today(): string {
  return new Date().toISOString().split("T")[0];
}

export async function loadKeywordCache(): Promise<string[] | null> {
  try {
    const data = await fs.readFile(CACHE_FILE, "utf8");
    const cache: KeywordCache = JSON.parse(data);

    if (cache.updated === today()) {
      console.log("✅ Using today's keyword cache");
      return cache.keywords;
    }

    console.log("⚠️ Keyword cache is outdated");
    return null;
  } catch {
    console.log("⚠️ No keyword cache found");
    return null;
  }
}

export async function saveKeywordCache(
  keywords: string[]
): Promise<void> {
  await fs.mkdir(CACHE_DIR, {
    recursive: true,
  });

  const cache: KeywordCache = {
    updated: today(),
    keywords,
  };

  await fs.writeFile(
    CACHE_FILE,
    JSON.stringify(cache, null, 2),
    "utf8"
  );

  console.log("✅ Keyword cache saved");
}