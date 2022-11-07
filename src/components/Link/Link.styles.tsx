import styled, { css } from "styled-components";
import { LinkVariants } from "./Link.types";

export const StyledLink = styled.a<{
  variant: LinkVariants;
  underline?: boolean;
}>`
  ${({ variant, underline }) => {
    switch (variant) {
      case "Button":
        return css`
          border: 3px solid ${(props) => props.theme.colors.bridalHeath};
          background-color: ${(props) => props.theme.colors.bridalHeath};
          padding: 12px 24px;
          border-radius: 5px;
          font-size: 14px;
          color: ${(props) => props.theme.colors.oldRose};
          font-weight: ${(props) => props.theme.fontWeights.bold};
          text-decoration: none;

          &:hover {
            color: ${(props) => props.theme.colors.oldRose};
            border: 3px solid ${(props) => props.theme.colors.bridalHeath};
            background-color: ${(props) => props.theme.colors.bridalHeath};
          }
        `;
      case "Link":
        return css`
          color: ${(props) => props.theme.colors.bridalHeath};
          font-weight: ${(props) => props.theme.fontWeights.bold};
          text-decoration: ${underline ? "underline" : "none"};
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.6px;
        `;
      case "TextLink":
        return css`
          color: ${(props) => props.theme.colors.bridalHeath70};
          font-weight: ${(props) => props.theme.fontWeights.regular};
          text-decoration: ${underline ? "underline" : "none"};
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.6px;

          &:hover {
            color: ${(props) => props.theme.colors.bridalHeath};
          }
        `;
    }
  }};
  & > svg path {
    fill: ${(props) => props.theme.colors.white};

    &:hover {
      fill: ${(props) => props.theme.colors.black20};
    }
  }
`;
