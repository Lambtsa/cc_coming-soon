import { useTranslation } from "@hooks/useTranslation";
import { useCallback, useEffect, useState } from "react";
import {
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";
import {
  InputRadioBtn,
  InputRadioLabel,
  InputRadioWrapper,
} from "./InputRadio.styles";
import { ControlledRadioProps } from "./InputRadio.types";

export const InputRadio = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  control,
  accessibilityName,
  name,
  error,
  label,
  setValue,
}: ControlledRadioProps<TFieldValues, TName>): JSX.Element => {
  const { t } = useTranslation();
  const { field } = useController({ control, name });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (field.value) {
      setActive(field.value);
    }
  }, [field.value]);

  const handleOnClick = useCallback(() => {
    setActive(!active);
    setValue(
      name,
      !active as PathValue<TFieldValues, TName>,
      { shouldValidate: true }
    );
  }, [active, name, setValue]);

  return (
    <InputRadioWrapper>
      <InputRadioBtn
        aria-label={accessibilityName}
        error={!!error}
        onClick={handleOnClick}
        active={active}
        type="button"
      />
      <InputRadioLabel>{t({ id: label })}</InputRadioLabel>
    </InputRadioWrapper>
  );
};
