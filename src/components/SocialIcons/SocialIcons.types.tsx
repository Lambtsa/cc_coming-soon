import { ReactNode } from "react";

export type SocialIconsPosition = "left" | "right" | "center";
export type SocialIconsAlignment = "top" | "bottom" | "center";

export interface SocialMediaLink {
  name: string;
  link: string;
  svg: ReactNode;
}

export type SocialOrientation = "horizontal" | "vertical";

export interface SocialIconsProps {
  orientation: SocialOrientation;
  position?: SocialIconsPosition;
  alignment?: SocialIconsAlignment;
}
