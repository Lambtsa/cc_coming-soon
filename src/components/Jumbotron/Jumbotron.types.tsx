import { TranslationKey } from "@customTypes";

export type JumbotronHeight = "90" | "80" | "70" | "60" | "50";

export interface JumbotronProps {
  title: TranslationKey;
  subtitle: TranslationKey;
  btnText: TranslationKey;
  height?: JumbotronHeight;
  onClick: () => void;
}
