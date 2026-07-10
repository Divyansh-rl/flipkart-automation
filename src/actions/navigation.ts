import { Page } from "playwright";

const LISTING_URL =
  "https://seller.flipkart.com/index.html#dashboard/addListings/single";

export async function openListing(page: Page) {
  console.log("Opening Flipkart listing page...");

  if (page.url().startsWith(LISTING_URL)) {
    console.log("Already on listing page. Refreshing...");

    await page.goto("about:blank");
await page.goto(LISTING_URL, {
  waitUntil: "domcontentloaded",
});
  } else {
    await page.goto(LISTING_URL, {
      waitUntil: "domcontentloaded",
    });
  }

  console.log("✅ Listing page opened");
}

export async function selectCategory(page: Page) {
  console.log("Selecting saved category...");

  await page
    .locator("div")
    .filter({ hasText: /^Night Dress Nighty$/ })
    .nth(3)
    .click();

  console.log("Clicking Select Brand...");

  await page.getByTestId("button").click();

  console.log("✅ Category selected");
}

export async function selectBrand(
  page: Page,
  brand: string
) {
  console.log("Entering brand name...");

  await page.getByTestId("test-input").fill(brand);

  console.log("Checking brand...");

  await page.getByRole("button", { name: "Check Brand" }).click();

  console.log("Creating new listing...");

  await page.getByRole("button", { name: "Create new listing" }).click();

  console.log("✅ Brand selected and listing started");
}

export async function handleFeaturePopup(page: Page) {
  console.log("Checking for feature popup...");

  const continueButton = page.getByRole("button", {
    name: "Continue",
  });

  if (await continueButton.isVisible().catch(() => false)) {
    console.log("Feature popup detected. Clicking Continue...");

    await continueButton.click();

    console.log("✅ Feature popup dismissed");
  } else {
    console.log("No feature popup found. Continuing...");
  }
}