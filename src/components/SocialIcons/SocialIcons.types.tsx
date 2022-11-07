import { ReactNode } from "react";

export type SocialIconsPosition = "Left" | "Right";

export interface SocialMediaLink {
  name: string;
  link: string;
  svg: ReactNode;
}

export type SocialOrientation = "Horizontal" | "Vertical";

export interface SocialIconsProps {
  orientation: SocialOrientation;
  position?: SocialIconsPosition;
}
