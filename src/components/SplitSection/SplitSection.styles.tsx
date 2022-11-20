import { BackgroundColor } from "@constants/custom";
import { MEDIA } from "@constants/layout";
import styled, { css } from "styled-components";
import { Link } from "@components/Link";

export const BrandLink = styled(Link)<{
  customColor?: string;
}>`
  position: absolute;
  top: 32px;

  font-size: 48px;
  min-width: 100%;
  text-align: center;
  color: ${(props) => props.customColor ?? props.theme.colors.pewter};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  &:hover {
    color: ${(props) => props.theme.colors.opal};
  }

  @media ${MEDIA.TABLET} {
    margin-top: 32px;
  }
`;

export const SectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  align-items: center;
  justify-content: center;
  width: 100vw;

  @media ${MEDIA.TABLET} {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div<{
  color: BackgroundColor;
  backgroundImageUrl?: string;
  innerBorder?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${({ innerBorder }) => (innerBorder ? "16px" : "0")};
  ${({ color }) => {
    switch (color) {
      case "Red":
        return css`
          background-color: ${(props) => props.theme.colors.petiteOrchid};
        `;
      case "Green":
        return css`
          background-color: ${(props) => props.theme.colors.pewter};
        `;
      case "Beige":
        return css`
          background-color: ${(props) => props.theme.colors.bridalHeath};
        `;
    }
  }};
  width: 100%;
  height: 100%;
  ${({ backgroundImageUrl }) =>
    backgroundImageUrl
      ? css`
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url("${backgroundImageUrl}");

          @media ${MEDIA.MOBILE} {
            order: 1;
            min-height: 50vh;
          }
        `
      : css`
          @media ${MEDIA.MOBILE} {
            order: 2;
          }
        `};
`;

export const InnerSection = styled.div<{
  color: BackgroundColor;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => {
      switch (props.color) {
        case "Red":
          return props.theme.colors.bridalHeath;
        case "Green":
          return props.theme.colors.bridalHeath;
        case "Beige":
          return props.theme.colors.oldRose;
      }
    }};
`;

export const BrandingTitle = styled.h3`
  position: absolute;
  top: 32px;

  font-size: 32px;
  color: ${(props) => props.theme.colors.bridalHeath};
  font-family: ${(props) => props.theme.fonts.oleoScript};
`;
