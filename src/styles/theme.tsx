import type { DefaultTheme } from "styled-components";

const colors = {
  black30: "rgba(0, 0, 0, 0.3)",
  black20: "rgba(0, 0, 0, 0.2)",
  black10: "rgba(0, 0, 0, 0.1)",
  bridalHeath: "rgba(255, 249, 244)",
  bridalHeath90: "rgba(255, 249, 244, 0.9)",
  bridalHeath80: "rgba(255, 249, 244, 0.8)",
  bridalHeath70: "rgba(255, 249, 244, 0.7)",
  bridalHeath60: "rgba(255, 249, 244, 0.6)",
  bridalHeath50: "rgba(255, 249, 244, 0.5)",
  bridalHeath40: "rgba(255, 249, 244, 0.4)",
  bridalHeath30: "rgba(255, 249, 244, 0.3)",
  bridalHeath20: "rgba(255, 249, 244, 0.2)",
  bridalHeath10: "rgba(255, 249, 244, 0.1)",
  chelseaCucumber: "#75B068",
  gold: "#FFD700",
  mineShaft: "#292929",
  myPink: "#D39589",
  newYorkPink: "#E08585",
  oldRose: "#c98b7f",
  opal: "#AAC3BB",
  pampas: "#EBE5E0",
  petiteOrchid: "#dd9f93",
  petiteOrchid90: "rgba(221, 159, 147, 0.9)",
  petiteOrchid80: "rgba(221, 159, 147, 0.8)",
  petiteOrchid70: "rgba(221, 159, 147, 0.7)",
  petiteOrchid60: "rgba(221, 159, 147, 0.6)",
  petiteOrchid50: "rgba(221, 159, 147, 0.5)",
  petiteOrchid40: "rgba(221, 159, 147, 0.4)",
  petiteOrchid30: "rgba(221, 159, 147, 0.3)",
  petiteOrchid20: "rgba(221, 159, 147, 0.2)",
  petiteOrchid10: "rgba(221, 159, 147, 0.1)",
  pewter: "#73968B",
  sandyBrown: "#F0A44B",
  quickSand: "#BFA49A",
  white: "#FFFFFF",
};

const fonts = {
  notoSerif: "'Noto Serif', serif",
  oleoScript: "'Oleo Script', cursive",
};

const fontWeights = {
  bold: "700",
  regular: "400",
};

const zIndexes = {
  carouselBtn: 500,
  navigation: 1000,
  toast: 9999,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  zIndexes,
};
