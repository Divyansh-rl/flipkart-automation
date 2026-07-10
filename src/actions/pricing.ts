import { Page } from "playwright";

export async function openSellingInfo(page: Page) {
  console.log("Opening Price, Stock and Shipping Information...");

  await page.getByRole("tab", {
    name: /Price, Stock and Shipping Information/,
  }).click();

  console.log("✅ Selling Information opened");
}

export async function fillSkuId(
  page: Page,
  skuId: string,
  size: string
) {
  const finalSize = size.toUpperCase();

  await page
    .getByPlaceholder(" ")
    .nth(1)
    .fill(`${skuId}-${finalSize}`);
}

export async function selectListingStatus(page: Page) {
  console.log("Selecting listing status...");

  const row = page.locator("div").filter({
    hasText: /^Listing Status/,
  });

  const button = row.locator(
    ".styles__SingleSelectContainer-sc-zkytp-0 button"
  );

  await button.scrollIntoViewIfNeeded();
  await button.click({ force: true });

  await page.getByRole("radio", {
  name: "Active",
  exact: true,
}).check();

  await page.keyboard.press("Escape");

  console.log("✅ Listing status selected");
}

export async function fillMrp(
  page: Page,
  mrp: string
) {
  console.log("Entering MRP...");

  await page
    .getByPlaceholder(" ")
    .nth(2)
    .fill(mrp);

  console.log("✅ MRP entered");
}

export async function fillSellingPrice(
  page: Page,
  sellingPrice: string
) {
  console.log("Entering selling price...");

  await page
    .getByPlaceholder(" ")
    .nth(3)
    .fill(sellingPrice);

  console.log("✅ Selling price entered");
}

async function selectDropdownOption(
  page: Page,
  dropdownIndex: number,
  option: string
) {
  await page.getByRole("combobox").nth(dropdownIndex).click();

  const radio = page.getByRole("radio", {
    name: option,
    exact: true,
  });



  await radio.waitFor();

  await radio.check();

  await page.keyboard.press("Escape");
}

export async function selectMinimumOrderQuantity(
  page: Page,
  minOQ: string
) {
  console.log("Selecting Minimum Order Quantity...");

  await selectDropdownOption(page, 2, minOQ);

  console.log("✅ Minimum Order Quantity selected");
}

export async function selectFulfillmentBy(
  page: Page,
  fulfillmentBy: string
) {
  console.log("Selecting Fulfillment By...");

  await selectDropdownOption(page, 3, fulfillmentBy);

  console.log("✅ Fulfillment By selected");
}

export async function selectProcurementType(
  page: Page,
  procurementType: string
) {
  console.log("Selecting Procurement Type...");

  await selectDropdownOption(page, 4, procurementType);

  console.log("✅ Procurement Type selected");
}

export async function fillProcurementSLA(
  page: Page,
  procurementSLA: string
) {
  console.log("Entering Procurement SLA...");

  await page
    .getByPlaceholder(" ")
    .nth(4)
    .fill(procurementSLA);

  console.log("✅ Procurement SLA entered");
}

export async function fillStock(
  page: Page,
  stock: string
) {
  console.log("Entering Stock...");

  await page
    .getByPlaceholder(" ")
    .nth(5)
    .fill(stock);

  console.log("✅ Stock entered");
}

export async function selectShippingProvider(
  page: Page,
  shippingProvider: string
) {
  console.log("Selecting Shipping Provider...");

  await page.getByRole("combobox").nth(5).click();

  await page
    .locator('[data-testid$="-tabpanel-tab_selling_info"]')
    .getByRole("radio", {
      name: shippingProvider,
      exact: true,
    })
    .check();

  await page.keyboard.press("Escape");

  console.log("✅ Shipping Provider selected");
}

export async function fillLength(
  page: Page,
  length: string
) {
  console.log("Entering Length...");

  await page
    .getByPlaceholder(" ", { exact: true })
    .nth(5)
    .fill(length);

  console.log("✅ Length entered");
}

export async function fillBreadth(
  page: Page,
  breadth: string
) {
  console.log("Entering Breadth...");

  await page
    .getByRole("spinbutton")
    .nth(5)
    .fill(breadth);

  console.log("✅ Breadth entered");
}


// Playwright could not generate a reliable semantic locator.
export async function fillHeight(
  page: Page,
  height: string
) {
  console.log("Entering Height...");

  await page
    .locator(
      "div:nth-child(3) > .styles__EditAttributeFieldWrapper-sc-gni56x-2 > .styles__AttributeItemFieldContainer-sc-ske8mu-1 > .styles__AttributeItemFormElementWrapper-sc-ske8mu-17 > .styles__InputLabelContainer-sc-srjv57-16 > .styles__InputWrapper-sc-srjv57-18 > .styles__InputContainer-sc-srjv57-10 > .styles__StyledInput-sc-srjv57-4"
    )
    .fill(height);

  console.log("✅ Height entered");
}

export async function fillWeight(
  page: Page,
  weight: string
) {
  console.log("Entering Weight...");

  await page
    .locator(
      "div:nth-child(4) > .styles__EditAttributeFieldWrapper-sc-gni56x-2 > .styles__AttributeItemFieldContainer-sc-ske8mu-1 > .styles__AttributeItemFormElementWrapper-sc-ske8mu-17 > .styles__InputLabelContainer-sc-srjv57-16 > .styles__InputWrapper-sc-srjv57-18 > .styles__InputContainer-sc-srjv57-10 > .styles__StyledInput-sc-srjv57-4"
    )
    .fill(weight);

  console.log("✅ Weight entered");
}

export async function fillHsn(
  page: Page,
  hsn: string
) {
  console.log("Entering HSN...");

  await page
    .getByRole("textbox")
    .nth(3)
    .fill(hsn);

  console.log("✅ HSN entered");
}

export async function fillLuxuryCess(
  page: Page,
  luxuryCess: string
) {
  console.log("Entering Luxury Cess...");

  const luxuryRow = page
    .locator(".styles__EditAttributeItemWrapper-sc-gni56x-0")
    .filter({
      has: page.getByText("Luxury Cess", { exact: true }),
    });

  await luxuryRow.locator('input[type="number"]').fill(luxuryCess);

  console.log("✅ Luxury Cess entered");
}

export async function selectTaxCode(
  page: Page,
  taxCode: string
) {
  console.log("Selecting Tax Code...");

  await page.getByRole("combobox").nth(6).click();

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(taxCode);

  await page
    .locator("label")
    .filter({ hasText: taxCode })
    .click();

  await page.keyboard.press("Escape");

  console.log("✅ Tax Code selected");
}

export async function selectCountryOfOrigin(
  page: Page,
  countryOfOrigin: string
) {
  console.log("Selecting Country of Origin...");

  await page.getByRole("combobox").nth(7).click();

  await page.getByRole("textbox", {
    name: "Search",
    exact: true,
  }).fill(countryOfOrigin);

  await page.getByRole("radio", {
    name: countryOfOrigin,
    exact: true,
  }).check();
 
  await page.keyboard.press("Escape");

  console.log("✅ Country of Origin selected");
}

export async function fillManufacturerDetails(
  page: Page,
  manufacturerDetails: string
) {
  console.log("Entering Manufacturer Details...");

  await page
    .getByRole("textbox")
    .nth(4)
    .fill(manufacturerDetails);

  console.log("✅ Manufacturer Details entered");
}

export async function fillPackerDetails(
  page: Page,
  packerDetails: string
) {
  console.log("Entering Packer Details...");

  await page
    .getByRole("textbox")
    .nth(5)
    .fill(packerDetails);

  console.log("✅ Packer Details entered");
}

export async function openProductInformation(
  page: Page
) {
  console.log("Opening Product Information...");

  await page
    .locator('[data-testid$="tabitem-tab_product_info"]')
    .click();

  console.log("✅ Product Information opened");
}

