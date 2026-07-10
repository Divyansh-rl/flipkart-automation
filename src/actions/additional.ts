import { Page } from "playwright";
import { getKeywords } from "../utils/keywordManager";

export async function selectPackOf(
  page: Page,
  packOf: string
) {
  console.log("Selecting Pack Of...");

  const row = page.locator("div").filter({
    hasText: /^Pack of/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: packOf,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Pack Of selected");
}

export async function selectOccasion(
  page: Page,
  occasion: string
) {
  console.log("Selecting Occasion...");

  await page.getByTestId("trigger-multi-select").first().click();

  // Clear AI-selected values
  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).check();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).uncheck();

  // Select our value
  await page.getByRole("checkbox", {
    name: occasion,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Occasion selected");
}

export async function fillBustSize(
  page: Page,
  bustSize: string
) {
  console.log("Entering Bust Size...");

  await page
    .getByRole("spinbutton")
    .fill(bustSize);

  console.log("✅ Bust Size entered");
}

export async function fillSearchKeywords(page: Page) {
  console.log("Adding Search Keywords...");

  const container = page.locator(
    '[aria-labelledby="keywords"]'
  );

  await container.click({
    position: { x: 2, y: 12 },
    force: true,
  });

  const input = container.locator("input");

  await input.waitFor({ state: "visible" });


  const keywords = await getKeywords({
    start: 0,
    count: 10,
    filter: false,
  });

  for (const keyword of keywords) {
    await input.fill(keyword);
    await input.press("Enter");
  }

  await input.blur();

  console.log("✅ Search Keywords added");
}

export async function fillKeyFeatures(page: Page) {
  console.log("Adding Key Features...");

  const container = page.locator(
    '[aria-labelledby="key_features"]'
  );

  await container.click({
    position: { x: 2, y: 12 },
    force: true,
  });

  const input = container.locator("input");

  await input.waitFor({ state: "visible" });

  const keywords = await getKeywords({
    start: 10,
    count: 10,
    filter: true,
  });

  for (const keyword of keywords) {
    await input.fill(keyword);
    await input.press("Enter");
  }

  await input.blur();

  console.log("✅ Key Features added");
}

export async function selectSecondaryColor(
  page: Page,
  secondaryColor: string
) {
  console.log("Selecting Secondary Color...");

  await page.getByTestId("trigger-multi-select").nth(1).click();

  // Clear AI-selected values
  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).check();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).uncheck();

  // Search for the desired color
  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(secondaryColor);

  // Select it
  await page.getByRole("checkbox", {
    name: secondaryColor,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Secondary Color selected");
}

export async function selectNeck(
  page: Page,
  neck: string
) {
  console.log("Selecting Neck...");

  const row = page.locator("div").filter({
    hasText: /^Neck/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(neck);

  await page.getByRole("radio", {
    name: neck,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Neck selected");
}

export async function selectSleeveLength(
  page: Page,
  sleeveType: string
) {
  console.log("Selecting Sleeve Length...");

  const row = page.locator("div").filter({
    hasText: /^Sleeve Length/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: sleeveType,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Sleeve Length selected");
}

export async function selectClosure(
  page: Page,
  productType: string
) {
  console.log("Selecting Closure...");

  await page
    .getByTestId("trigger-multi-select")
    .nth(2)
    .click();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).check();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).uncheck();

  const closure =
    productType === "Gown"
      ? "Button"
      : "Slip On";

  await page.getByRole("checkbox", {
    name: closure,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Closure selected");
}

export async function selectLength(
  page: Page,
  length: string
) {
  console.log("Selecting Length...");

  const row = page.locator("div").filter({
    hasText: /^Length/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: length,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Length selected");
}

export async function fillInnerLining(
  page: Page,
  innerLining: string
) {
  console.log("Entering Inner Lining...");

  const container = page.locator(
    '[aria-labelledby="inner_lining"]'
  );

  await container.click({
    position: { x: 2, y: 12 },
    force: true,
  });

  const input = container.locator("input");

  await input.waitFor({ state: "visible" });


  const tags = container.locator('[role="tab"]');

  while (await tags.count()) {
    await page.keyboard.press("Backspace");
  }

  await input.fill(innerLining);
  await input.press("Enter");

  await input.blur();

  console.log("✅ Inner Lining entered");
}

export async function selectSleeveStyle(
  page: Page,
  sleeveStyle: string
) {
  console.log("Selecting Sleeve Style...");

  const row = page.locator("div").filter({
    hasText: /^Sleeve Style/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(sleeveStyle);

  await page.getByRole("radio", {
    name: sleeveStyle,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Sleeve Style selected");
}

export async function selectOrnamentationType(
  page: Page,
  printType: string
) {
  console.log("Selecting Ornamentation Type...");

  await page
    .getByTestId("trigger-multi-select")
    .nth(3)
    .click();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).check();

  await page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  }).uncheck();

  await page.getByRole("checkbox", {
    name: printType,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Ornamentation Type selected");
}

export async function fillOtherDetails(
  page: Page,
  otherDetails: string
) {
  console.log("Entering Other Details...");

  const container = page.locator(
    '[aria-labelledby="other_details"]'
  );

await container.click({
    position: { x: 2, y: 12 },
    force: true,
  });

  const input = container.locator("input");

  await input.waitFor({ state: "visible" });


  const tags = container.locator('[role="tab"]');

  while (await tags.count()) {
    await page.keyboard.press("Backspace");
  }

  await input.fill(otherDetails);
  await input.press("Enter");

  await input.blur();

  console.log("✅ Other Details entered");
}

export async function fillWarranty(
  page: Page,
  modelName: string
) {
  console.log("Entering Warranty...");

  await page.locator(
    "div:nth-child(2) > .styles__EditAttributeItemWrapper-sc-gni56x-0 > .styles__EditAttributeFieldWrapper-sc-gni56x-2 > .styles__AttributeItemFieldWrapper-sc-ske8mu-0 > .styles__AttributeItemFieldContainer-sc-ske8mu-1 > .styles__AttributeItemFormElementWrapper-sc-ske8mu-17 > .styles__InputLabelContainer-sc-srjv57-16 > .styles__InputWrapper-sc-srjv57-18 > .styles__InputContainer-sc-srjv57-10 > .styles__StyledInput-sc-srjv57-4"
  ).fill(modelName);

  console.log("✅ Warranty entered");
}

export async function goToVariantsPage(page: Page) {
  console.log("Opening Variants page...");

  await page.locator('[data-testid$="-tabitem-tab_variants"]').click();

  console.log("✅ Variants page opened");
}