import { Page } from "playwright";
import {
  openListing,
  selectCategory,
  selectBrand,
  handleFeaturePopup,
} from "./actions/navigation";
import { 
  uploadFrontImage,
 } from "./actions/images";
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

  } from "./actions/pricing";
import { fillBrandColor, fillItemsIncluded, fillStyleCode, openOptionalProductInfo, selectBrandSize, selectColor, selectFabric, selectIdealFor,  selectRobeAvailable, selectSuitableFor, selectType } from "./actions/product";
import { updateKeywordCache } from "./utils/keywordManager";
import { fillBustSize, fillInnerLining, fillKeyFeatures, fillOtherDetails, fillSearchKeywords, fillWarranty, goToVariantsPage, selectClosure, selectLength, selectNeck, selectOccasion, selectOrnamentationType, selectPackOf, selectSecondaryColor, selectSleeveLength, selectSleeveStyle } from "./actions/additional";
import { waitForAiAutofill, waitForChangesSaved, waitForVariantsPage } from "./utils/waitForAiAutofill";
import { waitForImageUpload } from "./utils/waitForImageUpload";
import { addSizes, addVariantColors, copyFirstVariantToAll, fillVariantRows, saveAndGoBack } from "./actions/variants";
import { fillCatalog } from "./actions/catalog";

export async function runFlow(page: Page) {
  const catalog = {
    brand: "VASUPRADHA",

    frontImage: "images/1.jpeg",
    
    mrp: "999",

    sellingPrice: "399",

    closure: "Gown",

    minOQ: "1",

    fulfillmentBy: "Seller",

    procurementType: "express",

    procurementSLA: "1",

    stock: "100",

    shippingProvider: "Flipkart",

    length: "12",

    breadth: "10",

    height: "1",

    weight: "0.200",

    hsn: "6208",

    luxuryCess: "0",

    taxCode: "GST_APPAREL",

    countryOfOrigin: "India",

    manufacturerDetails: "VASUPRADHA",

    packerDetails: "VASUPRADHA",

    idealFor: "Women",

    type: "Nighty",

    fabric: "Cotton",

    itemsIncluded: "1 Nighty",

    suitableFor: "Maternity Wear",

    packOf: "1",

    occasion: "Regular",

    bustSize: "46",

    secondaryColor: "Multicolor",

    neck: "Square Neck",

    sleeveType: "Short Sleeve",

    innerLining: "Not Required",

    sleeveStyle: "Regular Sleeve",

    ornamentationType: "Block Print",

    otherDetails: "nighty for women",

    warranty: "N/A",

    variants: {
      colors: [
        {
          color: "Beige",
          sku: "BUTTERFLY OPEN BEIGE@005",
        },
        {
          color: "Maroon",
          sku: "BUTTERFLY OPEN MAROON@005",
        },
        {
          color: "Blue",
          sku: "BUTTERFLY OPEN BLUE@005",
        },
        {
          color: "Green",
          sku: "BUTTERFLY OPEN GREEN@005",
        },
        {
          color: "Yellow",
          sku: "BUTTERFLY OPEN YELLOW@005",
        },
      ],
      sizes: [
      "Free",
      "M",
      "L",
      "XL",
      "XXL"
    ]
    }
  };

  await fillCatalog(page, catalog);
}