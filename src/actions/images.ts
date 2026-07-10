import { Page } from "playwright";

export async function uploadFrontImage(
  page: Page,
  frontImage: string
) {
  console.log("Uploading front image...");

  const fileChooserPromise = page.waitForEvent("filechooser");

  await page
    .locator("div")
    .filter({ hasText: /^Upload Photo$/ })
    .nth(4)
    .click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles(frontImage);

  console.log("✅ Front image uploaded");
}