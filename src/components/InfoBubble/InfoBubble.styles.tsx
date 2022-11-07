import { ColumnQty } from "@components/Form/Form.types";
import styled, { css } from "styled-components";

export const InfoBubbleContainer = styled.div<{
  columnSpan: ColumnQty;
}>`
  ${({ columnSpan }) => {
    switch (columnSpan) {
      case 1:
        return css`
          grid-column: span 1;
        `;
      case 2:
        return css`
          grid-column: span 2;
        `;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 16px;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.bridalHeath20};
  border-left: 10px solid ${(props) => props.theme.colors.bridalHeath};
`;

export const InfoTextContent = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath60};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.notoSerif};
  text-align: left;
  font-size: 12px;
  line-height: 16px;
`;

export const IconContainer = styled.div`
  & > svg {
    fill: ${(props) => props.theme.colors.bridalHeath};
    height: 24px;
    width: 21px;
  }
`;
