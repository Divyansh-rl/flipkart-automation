import { Page } from "playwright";
import { fillTagField, fillTextField, selectMultiField, selectSingleField } from "../utils/fieldHelpers";

export async function fillStyleCode(
  page: Page,
  styleCode: string,
  size: string
) {
  const finalSize = size.toUpperCase();

  await page
    .getByRole("textbox")
    .nth(1)
    .fill(`${styleCode}-${finalSize}`);
}

export async function selectBrandSize(
  page: Page,
  brandSize: string
) {
  console.log("Selecting Brand Size...");

  await page.getByRole("combobox").nth(1).click();

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(brandSize);

  await page.getByRole("radio", {
    name: brandSize,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Brand Size selected");
}

export async function selectIdealFor(
  page: Page,
  idealFor: string
) {
  console.log("Selecting Ideal For...");

  const row = page.locator("div").filter({
    hasText: /^Ideal For/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: idealFor,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Ideal For selected");
}

export async function selectType(
  page: Page,
  type: string
) {
  console.log("Selecting Type...");

  const row = page.locator("div").filter({
    hasText: /^Type/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: type,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Type selected");
}

export async function selectColor(
  page: Page,
  color: string
) {
  console.log("Selecting Color...");

  await page.getByTestId("trigger-multi-select").first().click();

  const selectAll = page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  });

  await selectAll.check();
  await selectAll.uncheck();

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(color);

  await page.getByRole("checkbox", {
    name: color,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Color selected");
}

export async function fillBrandColor(
  page: Page,
  brandColor: string
) {
  console.log("Entering Brand Color...");

  const container = page.locator('[aria-labelledby="color_code"]');

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


  await input.fill(brandColor);
  await input.press("Enter");
  await input.blur();

  console.log("✅ Brand Color entered");
}

export async function selectFabric(
  page: Page,
  fabric: string
) {
  console.log("Selecting Fabric...");

  await page.getByTestId("trigger-multi-select").nth(1).click();

  const selectAll = page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  });

  await selectAll.check();
  await selectAll.uncheck();

  await page.getByRole("checkbox", {
    name: fabric,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Fabric selected");
}

// export async function selectPattern(
//   page: Page,
//   patterns: string[]
// ) {
//   console.log("Selecting Pattern...");

//   await page.getByTestId("trigger-multi-select").nth(2).click();

//   for (const pattern of patterns) {
//     await page
//       .getByRole("textbox", { name: "Search", exact: true })
//       .fill(pattern);

//     await page.getByRole("checkbox", {
//       name: pattern,
//       exact: true,
//     }).check();
//   }

//   console.log("✅ Pattern selected");
// }

export async function fillItemsIncluded(
  page: Page,
  itemsIncluded: string
) {
  console.log("Entering Items Included...");

  const container = page.locator('[aria-labelledby="sales_package"]');

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

  await input.fill(itemsIncluded);
  await input.press("Enter");

  await input.blur();

  console.log("✅ Items Included entered");
}

export async function selectSuitableFor(
  page: Page,
  suitableFor: string
) {
  console.log("Selecting Suitable For...");

  await page.getByTestId("trigger-multi-select").nth(3).click();

  const selectAll = page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  });

  await selectAll.check();
  await selectAll.uncheck();

  await page.getByRole("checkbox", {
    name: suitableFor,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Suitable For selected");
}

export async function selectRobeAvailable(
  page: Page,
  robeAvailable: string
) {
  console.log("Selecting Robe Available...");

  const row = page.locator("div").filter({
    hasText: /^Robe Available/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
    name: robeAvailable,
    exact: true,
  }).check();

  await page.keyboard.press("Escape");

  console.log("✅ Robe Available selected");
}

export async function openOptionalProductInfo(
  page: Page
) {
  console.log("Opening Optional Product Information...");

  await page
    .locator('[data-testid$="-tabitem-tab_optional_product_info"]')
    .click();

  console.log("✅ Optional Product Information opened");
}