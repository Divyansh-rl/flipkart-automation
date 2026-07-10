import { Page } from "playwright";

export async function addVariantColors(
  page: Page,
  colors: {
    color: string;
    sku: string;
  }[]
) {
  console.log("Adding Variant Colors...");

  const input = page.getByRole("textbox", {
    name: "Enter New Brand Color",
  });

  const createButton = page
    .getByRole("button", {
      name: "AddCircle Create",
    })
    .first();

  for (let i = 1; i < colors.length; i++) {
    await input.fill(colors[i].color);
    await createButton.click();
  }

  console.log("✅ Variant Colors added");
}

export async function addSizes(
  page: Page,
  sizes: string[]
) {
  console.log("Adding Sizes...");

  const row = page.locator("div").filter({
    hasText: /^Brand Size/,
  });

  const unitButton = row.getByText("Select UnitExpandMore");

  const sizeButton = row.getByText("Select Brand SizeExpandMore");

  const createButton = row.getByRole("button", {
    name: "AddCircle Create",
  });

  for (let i = 1; i < sizes.length; i++) {
    const size = sizes[i];

    // Unit dropdown
    await unitButton.click();

    await page.getByRole("radio", {
      name: "Regular",
      exact: true,
    }).check();

    // Brand Size dropdown
    await sizeButton.click();

    await page.getByRole("textbox", {
      name: "Search",
      exact: true,
    }).fill(size);

    await page.getByRole("radio", {
      name: size,
      exact: true,
    }).check();

    await createButton.click();

    console.log(`✅ Added size: ${size}`);
  }

  console.log("✅ All sizes added");
}

export async function copyFirstVariantToAll(page: Page) {
  console.log("Copying first variant to all rows...");

  // Copy first row
  await page
    .getByTestId("grid-component-row-0")
    .getByRole("button", { name: "ContentCopy" })
    .click();

  // Select all rows
  await page
    .getByTestId("grid-component-header-select")
    .getByRole("checkbox")
    .check();

  // Paste into all selected rows
  await page
    .getByRole("button", {
      name: "Paste in selected",
    })
    .click();

  console.log("✅ Copied first variant to all rows");
}

export async function fillVariantRows(
  page: Page,
  variants: {
    colors: {
      color: string;
      sku: string;
    }[];
    sizes: string[];
  }
) {
  console.log("Filling Variant Rows...");

  for (let s = 0; s < variants.sizes.length; s++) {
    for (let c = 0; c < variants.colors.length; c++) {

      // Skip default variant
      if (s === 0 && c === 0) continue;

      const color = variants.colors[c].color;
      const baseSku = variants.colors[c].sku;
      const size = variants.sizes[s];

      const sizeLabel =
        size === "Free"
          ? "Regular_-_Free"
          : `Regular_-_${size}`;

      const rowId = `variant-cell-color_code_${color}_size_${sizeLabel}`;

      // Always append size.
      // FREE should be uppercase in SKU/StyleCode.
      const finalSku = `${baseSku}-${size.toUpperCase()}`;

      // SKU
      await page
        .locator(`input#${rowId}-sku_id`)
        .fill(finalSku);

      // Style Code
      await page
        .locator(`input#${rowId}-style_code`)
        .fill(finalSku);

      // Color
      const colorDropdown = page
        .locator(`#${rowId}-color`)
        .getByTestId("trigger-multi-select");

      await colorDropdown.click();

      const dialog = page.getByRole("dialog");

      // Clear previous selection
      const selectAll = dialog.getByRole("checkbox", {
        name: "Select All",
      });

      await selectAll.check();
      await selectAll.uncheck();

      await dialog.getByRole("textbox", {
        name: "Search",
      }).fill(color);

      await dialog.getByRole("checkbox", {
        name: color,
        exact: true,
      }).check();

      await page.keyboard.press("Escape");

      console.log(`✅ Filled ${color} / ${size}`);
    }
  }

  console.log("✅ Variant Rows filled");
}

export async function saveAndGoBack(page: Page) {
  console.log("Waiting for variant save...");

  // Open Images page to trigger variant save
  await page
    .locator('[data-testid$="-tabitem-tab_product_images"]')
    .click();

  console.log("Waiting for variant save...");

const toast = page.locator(".toast-title-container");

await toast.waitFor({
  state: "attached",
  timeout: 15000,
});



//   await page
//     .locator('[data-testid$="-tabitem-tab_variants"]')
//     .click();

  console.log("Saving catalog...");

  await page.getByTestId("button").click();

  console.log("✅ Catalog saved");
}