import styled, { css } from "styled-components";
import { StarSize } from "./StarRatings.types";
import { ReactComponent as Star } from "@assets/icons/star.svg";

export const StarRatingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StarIcon = styled(Star)<{
  size: StarSize;
}>`
  ${({ size }) => {
    switch (size) {
      case "Large":
        return css`
          width: 30px;
          height: 30px;
        `;
      case "Medium":
        return css`
          width: 24px;
          height: 24px;
        `;
      case "Small":
        return css`
          width: 18px;
          height: 18px;
        `;
    }
  }}
  & > path {
    fill: ${(props) => props.theme.colors.gold};
  }
`;
