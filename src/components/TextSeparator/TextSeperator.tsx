import {
  SeparationWrapper,
  Separator,
  SplitText,
} from "./TextSeparator.styles";

interface TextSeparatorProps {
  text: string;
}

export const TextSeparator = ({ text }: TextSeparatorProps): JSX.Element => {
  return (
    <SeparationWrapper>
      <Separator />
      <SplitText>{text}</SplitText>
      <Separator />
    </SeparationWrapper>
  );
};
