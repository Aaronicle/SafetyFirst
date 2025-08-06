export const initialMaterialData = {
  name: "",
  health: "0",
  flammability: "0",
  physical: "0",
  ppe: "A",
  casNumber: "",
  requiredPPE: [],
  molecularFormula: "",
  boilingPoint: "",
  meltingPoint: "",
  density: "",
  image: "",
  synonyms: [],
};

export const PPE_REQUIREMENTS = {
  A: ["Safety Glasses"],
  B: ["Safety Glasses", "Gloves"],
  C: ["Safety Glasses", "Gloves", "Apron"],
  D: ["Face Shield", "Gloves", "Apron"],
  E: ["Safety Glasses", "Gloves", "Dust Respirator"],
  F: ["Safety Glasses", "Gloves", "Apron", "Dust Respirator"],
  G: ["Safety Glasses", "Vapor Respirator"],
  H: ["Splash Goggles", "Gloves", "Apron", "Vapor Respirator"],
  I: ["Safety Glasses", "Gloves", "Dust/Vapor Respirator"],
  J: ["Splash Goggles", "Gloves", "Apron", "Dust/Vapor Respirator"],
  K: ["Airline Hood or Mask", "Gloves", "Full Suit", "Boots"],
  X: [
    "Ask Supervisor or Safety Specialist for Handling Instructions, or Refer to MSDS Sheet for Specific Directions",
  ],
};

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrnj.undo.it"
    : "http://localhost:3001";
