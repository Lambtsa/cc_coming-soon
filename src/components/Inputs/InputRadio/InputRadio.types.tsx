import { ButtonHTMLAttributes } from "react";
import {
  Control,
  FieldError,
  FieldValues,
  Path,
  UseFormSetValue,
} from "react-hook-form";
import { TranslationKey } from "@customTypes";

export interface ControlledRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> extends InputRadioProps {
  control: Control<TFieldValues, object>;
  name: TName;
  setValue: UseFormSetValue<TFieldValues>;
}

export interface InputRadioProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  error?: FieldError | undefined;
  label: TranslationKey;
}
