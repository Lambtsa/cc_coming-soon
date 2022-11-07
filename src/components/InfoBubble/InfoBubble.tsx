import { ColumnQty } from "@components/Form/Form.types";
import { ReactElement } from "react";
import {
  IconContainer,
  InfoBubbleContainer,
  InfoTextContent,
} from "./InfoBubble.styles";

interface InfoBubbleProps {
  children: string;
  icon?: ReactElement;
  span?: ColumnQty;
}

export const InfoBubble = ({
  children,
  icon,
  span = 1,
}: InfoBubbleProps): JSX.Element => {
  return (
    <InfoBubbleContainer columnSpan={span}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <InfoTextContent>{children}</InfoTextContent>
    </InfoBubbleContainer>
  );
};
