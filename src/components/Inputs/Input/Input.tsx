import {
  ErrorMessage,
  InputWrap,
  MessageWrapper,
  StyledInput,
} from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({
  type = "text",
  error,
  note,
  inputTheme = "light",
  span = 1,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <InputWrap columnSpan={span}>
      <StyledInput inputTheme={inputTheme} {...rest} type={type} />
      <MessageWrapper>
        {error && (
          <ErrorMessage inputTheme={inputTheme}>{error.message}</ErrorMessage>
        )}
        {note}
      </MessageWrapper>
    </InputWrap>
  );
};
