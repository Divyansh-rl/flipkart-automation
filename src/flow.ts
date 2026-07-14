import { Page } from "playwright";
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

    otherDetails: ["nighty for women", "pure cotton nighty for women", "high quality nighty", "premium nighty"],

    warranty: "N/A",

    variants: {
      colors: [
        {
          color: "Beige",
          sku: "VHJ-BUTTERFLY OPEN BEIGE",
        },
        {
          color: "Maroon",
          sku: "VHJ-BUTTERFLY OPEN MAROON",
        },
        {
          color: "Blue",
          sku: "VHJ-BUTTERFLY OPEN BLUE",
        },
        {
          color: "Green",
          sku: "VHJ-BUTTERFLY OPEN GREEN",
        },
        {
          color: "Yellow",
          sku: "VHJ-BUTTERFLY OPEN YELLOW",
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