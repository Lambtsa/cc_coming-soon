import { TextareaHTMLAttributes } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type InputType = "text" | "email" | "tel" | "password" | "url";

export interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> extends InputTextAreaProps {
  control: Control<TFieldValues, object>;
  name: TName;
}

export interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError | undefined;
}
