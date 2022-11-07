import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

export interface Props extends LinkProps {
  variant: LinkVariants;
  underline?: boolean;
  children: ReactNode;
  newTab?: boolean;
}

export type LinkVariants = "Link" | "Button" | "TextLink";
