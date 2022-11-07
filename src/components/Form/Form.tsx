import { FormContent, FormWrapper, TitleWrapper } from "./Form.styles";
import { FormProps } from "./Form.types";

export const Form = ({
  title,
  subtitle,
  children,
  columns = 2,
  ...props
}: FormProps): JSX.Element => {
  return (
    <FormWrapper>
      {title && (
        <TitleWrapper>
          {title}
          {subtitle}
        </TitleWrapper>
      )}
      <FormContent columns={columns} {...props}>
        {children}
      </FormContent>
    </FormWrapper>
  );
};
