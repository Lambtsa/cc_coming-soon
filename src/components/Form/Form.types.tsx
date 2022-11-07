import { FormHTMLAttributes, ReactNode } from "react";

export type ColumnQty = 1 | 2;

export interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
  title?: ReactNode;
  subtitle?: ReactNode;
  columns?: ColumnQty;
}
