import type { UIStrings } from "../types";

const strings = {
  contact: {
    formDesc:
      "Fill out the form below and our team will respond via WhatsApp shortly.",
    formDescSidebar:
      "Fill out the form and our team will get back to you on WhatsApp.",
    contactInfoTitle: "Contact Information",
    contactInfoDescription: "Reach us through the available channels",
    chooseLocation: "Choose location",
    choosePackage: "Choose package",
    selectLocationFirst: "Select location first",
    optional: "optional",
    formTitle: "Tell us about your trip",
    formDescription:
      "Provide basic trip information so our team can give you the most relevant recommendations.",
    mapTitle: "Our Location",
    mapDescription:
      "Visit the Sungkar Group office or contact our team for trip consultation.",
    formWhatsappSubject: "New Inquiry - Sungkar Group Website",
    whatsappGreeting: "Hello Sungkar Group,",
    whatsappSewaIntro: "I want to rent: {item}",
    whatsappPaketIntro: "I'm interested in the package: {item}",
    whatsappLocation: "Location: {region}",
    whatsappFollowUp: "Please provide more information.",
    whatsappFormDate: "Travel date: {date}",
    whatsappFormGuests: "Number of guests: {guests}",
    whatsappFormMessage: "Additional message: {message}",
    whatsappFormPackage: "Package: {package}",
    sidebarTitleSewa: "Rent this vehicle",
    sidebarTitlePaket: "Book this package",
    sectionTitleSewa: "Car Rental at Sungkar Group",
    sectionTitlePaket: "Book a Tour Package",
    contextLabelSewa: "Selected Vehicle",
    contextLabelPaket: "Selected Package",
    followUs: "Follow Us",
    phoneWhatsapp: "Phone / WhatsApp",
    formFieldName: "Name",
    formFieldTravelDate: "Travel date",
    formFieldTravelDateSewa: "Rental date",
    formFieldDuration: "Rental duration",
    formFieldGuests: "Number of guests",
    formFieldPassengers: "Number of passengers",
    formFieldRentalReason: "Rental purpose",
    formFieldMessage: "Additional message",
  },
} satisfies Pick<UIStrings, "contact">;

export default strings;
