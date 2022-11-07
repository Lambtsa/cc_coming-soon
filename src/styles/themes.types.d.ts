import "styled-components";

interface Colors {
  black30: string;
  black20: string;
  black10: string;
  bridalHeath: string;
  bridalHeath90: string;
  bridalHeath80: string;
  bridalHeath70: string;
  bridalHeath60: string;
  bridalHeath50: string;
  bridalHeath40: string;
  bridalHeath30: string;
  bridalHeath20: string;
  bridalHeath10: string;
  chelseaCucumber: string;
  gold: string;
  mineShaft: string;
  myPink: string;
  newYorkPink: string;
  oldRose: string;
  opal: string;
  pampas: string;
  petiteOrchid: string;
  petiteOrchid90: string;
  petiteOrchid80: string;
  petiteOrchid70: string;
  petiteOrchid60: string;
  petiteOrchid50: string;
  petiteOrchid40: string;
  petiteOrchid30: string;
  petiteOrchid20: string;
  petiteOrchid10: string;
  pewter: string;
  sandyBrown: string;
  quickSand: string;
  white: string;
}

interface Fonts {
  notoSerif: string;
  oleoScript: string;
}

interface FontWeights {
  bold: string;
  regular: string;
}

interface ZIndexes {
  carouselBtn: number;
  navigation: number;
  toast: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    zIndexes: ZIndexes;
  }
}
