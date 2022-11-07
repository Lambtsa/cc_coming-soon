import { InputHTMLAttributes, ReactNode } from "react";

export type BtnTheme =
  | "Beige/Red"
  | "Beige/Green"
  | "Red/Beige"
  | "Green/Beige";

export type BtnVariants = "Primary" | "Secondary";

export type BtnType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: BtnType;
  variant: BtnVariants;
  children: ReactNode;
  themeColor: BtnTheme;
  fullwidth?: boolean;
}
