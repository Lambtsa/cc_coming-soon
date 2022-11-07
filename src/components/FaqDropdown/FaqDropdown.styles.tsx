import styled from "styled-components";
import { ReactComponent as Chevron } from "@assets/icons/chevron.svg";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.black20};
  border-radius: 10px;
`;

export const QuestionWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const QuestionText = styled.h2`
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.notoSerif};
  text-align: left;
  font-size: 14px;
  line-height: 24px;
`;

export const TextContent = styled.p`
  color: ${(props) => props.theme.colors.quickSand};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.notoSerif};
  text-align: left;
  border-top: 1px solid ${(props) => props.theme.colors.black10};
  padding: 16px;
  font-size: 14px;
  line-height: 24px;
`;

export const ChevronIcon = styled(Chevron)<{
  expanded: boolean;
}>`
  fill: ${(props) => props.theme.colors.petiteOrchid};
  width: 20px;
  height: 20px;
  transform: ${({ expanded }) => (expanded ? "rotate(90deg)" : "none")};
  transition: 100ms linear all;
`;
