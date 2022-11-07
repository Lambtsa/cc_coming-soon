import { FieldValues, Path, useController } from "react-hook-form";
import { ControlledInputProps } from "./InputTextArea.types";
import {
  ErrorMessage,
  MessageWrapper,
  NoteMessage,
  StyledInput,
  TextAreaWrapper,
} from "./InputTextArea.styles";
import { useMemo } from "react";
import { useTranslation } from "@hooks/useTranslation";

const MAX_MESSAGE_LENGTH = 160;

export const InputTextArea = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  control,
  name,
  error,
  ...rest
}: ControlledInputProps<TFieldValues, TName>): JSX.Element => {
  const { t } = useTranslation();
  const { field } = useController({ control, name });

  const characterCount = useMemo(() => {
    return MAX_MESSAGE_LENGTH - field.value.length;
  }, [field.value.length]);

  return (
    <TextAreaWrapper>
      <StyledInput {...rest} {...field} maxLength={MAX_MESSAGE_LENGTH} />
      <MessageWrapper>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <NoteMessage>
          {t({ id: "commons.textareaCount" }, { count: characterCount })}
        </NoteMessage>
      </MessageWrapper>
    </TextAreaWrapper>
  );
};
