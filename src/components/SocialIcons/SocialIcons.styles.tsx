import styled, { css } from "styled-components";
import { SocialIconsPosition, SocialOrientation } from "./SocialIcons.types";

export const SocialIconsWrapper = styled.div<{
  orientation: SocialOrientation;
  position?: SocialIconsPosition;
}>`
  ${({ position }) => {
    switch (position) {
      case "Right":
        return css`
          position: absolute;
          right: 16px;
        `;
      case "Left":
        return css`
          position: absolute;
          left: 16px;
        `;
      default:
        return;
    }
  }};
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "Vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;
