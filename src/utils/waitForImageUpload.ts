import { Page } from "playwright";

export async function waitForImageUpload(page: Page) {
  console.log("Waiting for Flipkart to acknowledge image upload...");

  await page
    .getByText("View Sample", { exact: true })
    .waitFor({
      state: "visible",
      timeout: 30000,
    });

  console.log("✅ Image upload acknowledged");
}