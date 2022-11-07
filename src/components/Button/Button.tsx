import { Button as ButtonUI } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  variant,
  type = "button",
  themeColor,
  children,
  fullwidth,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <ButtonUI
      variant={variant}
      {...rest}
      type={type}
      themeColor={themeColor}
      fullwidth={fullwidth}
    >
      {children}
    </ButtonUI>
  );
};
