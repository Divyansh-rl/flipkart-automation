import { Locator, Page } from "playwright";

export function getField(
  page: Page,
  label: string
): Locator {
  return page
    .locator(".styles__EditAttributeItemWrapper-sc-gni56x-0")
    .filter({
      has: page.getByText(label, {
        exact: true,
      }),
    })
    .first();
}

export async function fillTextField(
  page: Page,
  label: string,
  value: string
) {
  console.log(`Entering ${label}...`);

  const field = getField(page, label);

  await field.locator("input").first().fill(value);

  console.log(`✅ ${label} entered`);
}

export async function selectSingleField(
  page: Page,
  label: string,
  value: string
) {
  console.log(`Selecting ${label}...`);

  const field = getField(page, label);

  await field.getByRole("combobox").click();

  const search = page.getByRole("textbox", {
    name: "Search",
    exact: true,
  });

  if (await search.isVisible().catch(() => false)) {
    await search.fill(value);
  }

  await page.getByRole("radio", {
    name: value,
    exact: true,
  }).check();

  console.log(`✅ ${label} selected`);
}

export async function selectMultiField(
  page: Page,
  label: string,
  value: string
) {
  console.log(`Selecting ${label}...`);

  const field = getField(page, label);

  await field.getByRole("combobox").click();

  const selectAll = page.getByRole("checkbox", {
    name: "Select All",
    exact: true,
  });

  await selectAll.check();
  await selectAll.uncheck();

  const search = page.getByRole("textbox", {
    name: "Search",
    exact: true,
  });

  if (await search.isVisible().catch(() => false)) {
    await search.fill(value);
  }

  await page.getByRole("checkbox", {
    name: value,
    exact: true,
  }).check();

  console.log(`✅ ${label} selected`);
}

export async function fillTagField(
  page: Page,
  label: string,
  value: string,
  clear = false
) {
  console.log(`Entering ${label}...`);

  const field = getField(page, label);

  if (clear) {
    while (
      await field
        .getByRole("img", { name: "Close" })
        .first()
        .isVisible()
        .catch(() => false)
    ) {
      await field
        .getByRole("img", { name: "Close" })
        .first()
        .click();
    }
  }

  const input = field.locator("input");

  await input.fill(value);

  await input.press("Enter");

  console.log(`✅ ${label} entered`);
}