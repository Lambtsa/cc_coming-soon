import { InnerSection, Section } from "./SplitSection.styles";
import { SplitScreenProps } from "./SplitSection.types";

export const SplitSection = ({
  innerBorder = false,
  color = "Beige",
  children,
}: SplitScreenProps): JSX.Element => {
  return (
    <Section innerBorder={innerBorder} color={color}>
      {innerBorder ? (
        <InnerSection color={color}>{children}</InnerSection>
      ) : (
        <>{children}</>
      )}
    </Section>
  );
};
