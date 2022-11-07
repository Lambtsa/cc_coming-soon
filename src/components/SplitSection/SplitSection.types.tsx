import { BackgroundColor } from "@constants/custom";
import { ReactNode } from "react";

export interface SplitScreenProps {
  innerBorder?: boolean;
  color: BackgroundColor;
  children?: ReactNode;
}
