import { useState } from "react";
import {
  ChevronIcon,
  DropdownWrapper,
  QuestionText,
  QuestionWrapper,
  TextContent,
} from "./FaqDropdown.styles";

interface FaqDropdownProps {
  question: string;
  answer: string;
}

export const FaqDropdown = ({
  question,
  answer,
}: FaqDropdownProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <DropdownWrapper>
      <QuestionWrapper type="button" onClick={() => setIsExpanded(!isExpanded)}>
        <QuestionText>{question}</QuestionText>
        <ChevronIcon expanded={isExpanded} />
      </QuestionWrapper>
      {isExpanded && <TextContent>{answer}</TextContent>}
    </DropdownWrapper>
  );
};
