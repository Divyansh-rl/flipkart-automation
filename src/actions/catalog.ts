import { Page } from "playwright";
import {
  openListing,
  selectCategory,
  selectBrand,
  handleFeaturePopup,
} from "./navigation";
import { 
  uploadFrontImage,
 } from "./images";
 import { 
  openSellingInfo,
  fillSkuId,
  fillMrp,
  fillSellingPrice,
  selectMinimumOrderQuantity,
  selectFulfillmentBy,
  selectProcurementType,
  fillProcurementSLA,
  fillStock,
  selectShippingProvider,
  selectListingStatus,
  fillHeight,
  fillBreadth,
  fillLength,
  fillWeight,
  fillHsn,
  fillLuxuryCess,
  selectTaxCode,
  selectCountryOfOrigin,
  fillManufacturerDetails,
  fillPackerDetails,
  openProductInformation,

  } from "./pricing";
import { fillBrandColor, fillItemsIncluded, fillStyleCode, openOptionalProductInfo, selectBrandSize, selectColor, selectFabric, selectIdealFor,  selectRobeAvailable, selectSuitableFor, selectType } from "./product";

import { fillBustSize, fillInnerLining, fillKeyFeatures, fillOtherDetails, fillSearchKeywords, fillWarranty, goToVariantsPage, selectClosure, selectLength, selectNeck, selectOccasion, selectOrnamentationType, selectPackOf, selectSecondaryColor, selectSleeveLength, selectSleeveStyle } from "./additional";
import { waitForAiAutofill, waitForChangesSaved, waitForVariantsPage } from "../utils/waitForAiAutofill";
import { waitForImageUpload } from "../utils/waitForImageUpload";
import { addSizes, addVariantColors, copyFirstVariantToAll, fillVariantRows, saveAndGoBack } from "./variants";
import { updateKeywordCache } from "../utils/keywordManager";

export async function fillCatalog(
  page: Page,
  catalog: any
) {
    const defaultVariant = catalog.variants.colors[0];
const defaultSize = catalog.variants.sizes[0];

  console.log("🚀 Flow started");

  await updateKeywordCache(page);

  await openListing(page);

  await selectCategory(page);

  await selectBrand(page, catalog.brand);
  
  await handleFeaturePopup(page);

  await uploadFrontImage(page, catalog.frontImage);

  await waitForImageUpload(page);

  await openSellingInfo(page);

  await waitForAiAutofill(page);

  await fillSkuId(
  page,
  defaultVariant.sku,
  defaultSize
);

  await selectListingStatus(page);

  await fillMrp(page, catalog.mrp);

  await fillSellingPrice(page, catalog.sellingPrice);

  await selectMinimumOrderQuantity(page, catalog.minOQ);

  await selectFulfillmentBy(page, catalog.fulfillmentBy);

  await selectProcurementType(page, catalog.procurementType);

  await fillProcurementSLA(page, catalog.procurementSLA);

  await fillStock(page, catalog.stock);

  await selectShippingProvider(
  page,
  catalog.shippingProvider
);

  await fillLength(page, catalog.length);

  await fillBreadth(page, catalog.breadth);

  await fillHeight(page, catalog.height)
  
  await fillWeight(page, catalog.weight);

  await fillHsn(page, catalog.hsn);

  await fillLuxuryCess(page, catalog.luxuryCess);

  await selectTaxCode(page, catalog.taxCode);

  await selectCountryOfOrigin(page, catalog.countryOfOrigin);

  await fillManufacturerDetails(page, catalog.manufacturerDetails);

  await fillPackerDetails(page, catalog.packerDetails);

  await openProductInformation(page);

  await fillStyleCode(
  page,
  defaultVariant.sku,
  defaultSize
);

  await selectBrandSize(page, defaultSize);

  await selectIdealFor(page, catalog.idealFor);

  await selectType(page, catalog.type);

  await selectColor(page, defaultVariant.color);

  await fillBrandColor(page, defaultVariant.color);

  await selectFabric(page, catalog.fabric);

  // await selectPattern(page, catalog.pattern);

  await fillItemsIncluded(page, catalog.itemsIncluded);

  await selectSuitableFor(page, catalog.suitableFor);

  await selectRobeAvailable(page, "No");

  await openOptionalProductInfo(page);

  await waitForChangesSaved(page);

  await selectPackOf(page, catalog.packOf);

  await selectOccasion(page, catalog.occasion);

  await fillBustSize(page, catalog.bustSize);

  await fillSearchKeywords(page);

  await fillKeyFeatures(page);

  await selectSecondaryColor(page, catalog.secondaryColor);

  await selectNeck(page, catalog.neck);

  await selectSleeveLength(page, catalog.sleeveType);

  await selectClosure(page, catalog.closure);

  await selectLength(page, "Long");

  await fillInnerLining(page, catalog.innerLining);

  await selectSleeveStyle(page, catalog.sleeveStyle);

  await selectOrnamentationType(page, catalog.ornamentationType);

  await fillOtherDetails(page, catalog.otherDetails);

  await fillWarranty(page, catalog.warranty);

  await goToVariantsPage(page);

  await waitForChangesSaved(page);

  await waitForVariantsPage(page);

  await addVariantColors(page, catalog.variants.colors);

  await addSizes(page, catalog.variants.sizes);

  await copyFirstVariantToAll(page);

  await fillVariantRows(page, catalog.variants);

  await saveAndGoBack(page);
}