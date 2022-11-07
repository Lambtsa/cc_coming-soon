import { ColumnQty } from "@components/Form/Form.types";
import { InputHTMLAttributes, ReactNode } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type InputType = "text" | "email" | "tel" | "password" | "url";
export type InputTheme = "light" | "dark";

export interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> extends InputProps {
  control: Control<TFieldValues, object>;
  name: TName;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: InputType;
  error?: FieldError | undefined;
  note?: ReactNode;
  span?: ColumnQty;
  inputTheme?: InputTheme;
}
