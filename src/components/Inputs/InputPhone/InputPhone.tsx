import { FieldValues, Path, useController } from "react-hook-form";
import { ControlledInputProps } from "@components/Inputs/Input/Input.types";
import { Input } from "../Input";

export const InputPhone = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  control,
  name,
  type,
  ...rest
}: ControlledInputProps<TFieldValues, TName>): JSX.Element => {
  const { field } = useController({ control, name });

  return <Input {...rest} {...field} type={type} />;
};
