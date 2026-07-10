const BLOCKED_WORDS = [
  "sexy",
  "hot",
];

export function filterKeywords(keywords: string[]): string[] {
  return keywords.filter(keyword =>
    !BLOCKED_WORDS.some(word =>
      keyword.toLowerCase().includes(word)
    )
  );
}