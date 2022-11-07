import { BackgroundColor } from "@constants/custom";
import styled, { css } from "styled-components";

export const CopyrightWrapper = styled.section<{
  color: BackgroundColor;
}>`
  text-align: center;
  padding: 16px;
  color: ${(props) => props.theme.colors.bridalHeath};
  font-size: 12px;
  ${({ color }) => {
    switch (color) {
      case "Red":
        return css`
          background-color: ${(props) => props.theme.colors.myPink};
        `;
      case "Green":
        return css`
          background-color: ${(props) => props.theme.colors.pewter};
        `;
      case "Beige":
        return css`
          background-color: ${(props) => props.theme.colors.pampas};
        `;
    }
  }};
  width: 100%;
`;
