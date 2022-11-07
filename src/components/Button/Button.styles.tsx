import styled, { css } from "styled-components";
import { BtnTheme, BtnVariants } from "./Button.types";

export const Button = styled.button<{
  variant: BtnVariants;
  themeColor: BtnTheme;
  fullwidth?: boolean;
}>`
  // TODO: make buttons themed
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 14px;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "auto")};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  ${({ themeColor, variant }) => {
    const isPrimary = variant === "Primary";
    switch (themeColor) {
      case "Beige/Green":
        return css`
          border: 3px solid ${(props) => props.theme.colors.bridalHeath};
          background-color: ${(props) =>
            isPrimary ? props.theme.colors.bridalHeath : "transparent"};
          color: ${(props) =>
            isPrimary
              ? props.theme.colors.pewter
              : props.theme.colors.bridalHeath};

          &:hover {
            color: ${(props) =>
              isPrimary
                ? props.theme.colors.bridalHeath
                : props.theme.colors.opal};
            border: 3px solid
              ${(props) =>
                isPrimary
                  ? props.theme.colors.opal
                  : props.theme.colors.bridalHeath};
            background-color: ${(props) =>
              isPrimary
                ? props.theme.colors.opal
                : props.theme.colors.bridalHeath};
          }
        `;
      case "Beige/Red":
        return css`
          border: 3px solid ${(props) => props.theme.colors.bridalHeath};
          background-color: ${(props) =>
            isPrimary ? props.theme.colors.bridalHeath : "transparent"};
          color: ${(props) =>
            isPrimary
              ? props.theme.colors.oldRose
              : props.theme.colors.bridalHeath};

          &:hover {
            color: ${(props) =>
              isPrimary
                ? props.theme.colors.bridalHeath
                : props.theme.colors.oldRose};
            border: 3px solid
              ${(props) =>
                isPrimary
                  ? props.theme.colors.petiteOrchid
                  : props.theme.colors.bridalHeath};
            background-color: ${(props) =>
              isPrimary
                ? props.theme.colors.petiteOrchid
                : props.theme.colors.bridalHeath};
          }
        `;
      case "Green/Beige":
        return css`
          border: 3px solid ${(props) => props.theme.colors.pewter};
          background-color: ${(props) =>
            isPrimary ? props.theme.colors.pewter : "transparent"};
          color: ${(props) =>
            isPrimary
              ? props.theme.colors.bridalHeath
              : props.theme.colors.pewter};

          &:hover {
            color: ${(props) =>
              isPrimary
                ? props.theme.colors.opal
                : props.theme.colors.bridalHeath};
            border: 3px solid
              ${(props) =>
                isPrimary
                  ? props.theme.colors.bridalHeath
                  : props.theme.colors.opal};
            background-color: ${(props) =>
              isPrimary
                ? props.theme.colors.bridalHeath
                : props.theme.colors.opal};
          }
        `;
      case "Red/Beige":
        return css`
          border: 3px solid ${(props) => props.theme.colors.petiteOrchid};
          background-color: ${(props) =>
            isPrimary ? props.theme.colors.petiteOrchid : "transparent"};
          color: ${(props) =>
            isPrimary
              ? props.theme.colors.bridalHeath
              : props.theme.colors.oldRose};

          &:hover {
            color: ${(props) => props.theme.colors.bridalHeath};
            border: 3px solid
              ${(props) =>
                isPrimary
                  ? props.theme.colors.myPink
                  : props.theme.colors.petiteOrchid};
            background-color: ${(props) =>
              isPrimary
                ? props.theme.colors.myPink
                : props.theme.colors.petiteOrchid};
          }
        `;
    }
  }};
`;
