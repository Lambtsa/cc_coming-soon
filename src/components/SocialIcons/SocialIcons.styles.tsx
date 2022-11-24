import styled, { css } from "styled-components";
import {
  SocialIconsAlignment,
  SocialIconsPosition,
  SocialOrientation,
} from "./SocialIcons.types";

export const SocialIconsWrapper = styled.div<{
  orientation: SocialOrientation;
  position?: SocialIconsPosition;
  alignment?: SocialIconsAlignment;
}>`
  position: absolute;
  ${({ alignment }) => {
    switch (alignment) {
      case "top":
        return css`
          top: 16px;
        `;
      case "bottom":
        return css`
          bottom: 16px;
        `;
      default:
        return;
    }
  }};
  ${({ position }) => {
    switch (position) {
      case "right":
        return css`
          right: 16px;
        `;
      case "left":
        return css`
          /* position: absolute; */
          left: 16px;
        `;
      case "center":
        return css`
          /* position: absolute; */
          left: 50%;
          right: 50%;
        `;
      default:
        return;
    }
  }};
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;
