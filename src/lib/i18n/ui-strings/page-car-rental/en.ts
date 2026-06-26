import type { UIStrings } from "../types";

const strings = {
  sewaMobil: {
    title: "Car Rental",
    vehicleDetail: "Vehicle Details",
    specifications: "Specifications",
    transmission: "Transmission",
    passengers: "Passengers",
    features: "Key Features",
    suitableFor: "Suitable For",
    viewDetailRent: "View Details & Rent",
    pricePerDay: "Price per day",
    vehicleFor: "Rental Vehicles in {region}",
    rentalVehicles: "Vehicle Options in {region}",
    allVehicles:
      "All vehicles in {region} have been inspected and come with comprehensive insurance for your travel safety.",
    faqTitle: "Questions About Car Rental",
    faqTitleFor: "Questions About Car Rental in {region}",
  },
} satisfies Pick<UIStrings, "sewaMobil">;

export default strings;
