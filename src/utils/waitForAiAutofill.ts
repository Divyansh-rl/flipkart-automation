import { Page } from "playwright";

export async function waitForAiAutofill(page: Page) {
  console.log("Waiting for Flipkart AI autofill...");

  await page
    .locator('[data-testid^="toast-success-"]')
    .filter({
      hasText: "fields have been successfully auto-filled",
    })
    .waitFor({
      state: "visible",
      timeout: 60000,
    });

  console.log("✅ Flipkart AI finished");

}

export async function waitForChangesSaved(page: Page) {
  const toast = page.locator(".toast-title-container");

  try {
    await toast.waitFor({
      state: "attached",
      timeout: 5000,
    });

    // await toast.waitFor({
    //   state: "detached",
    //   timeout: 10000,
    // });

    console.log("✅ Changes saved");
  } catch {
    console.log("ℹ️ Changes Saved toast not shown");
  }
}

export async function waitForVariantsPage(page: Page) {

  await page
    .getByText("View Sample")
    .waitFor({ state: "visible", timeout: 10000 });

  await page.waitForTimeout(300);
}