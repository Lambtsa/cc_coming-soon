import styled, { css } from "styled-components";
import { MEDIA } from "@constants/layout";
import { BackgroundColor } from "@constants/custom";

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;

  @media ${MEDIA.MOBILE} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const FooterWrapper = styled.footer<{
  color: BackgroundColor;
}>`
  padding: 96px 0;
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
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const FooterTitle = styled.h3`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: 400;
  text-align: center;
  font-size: 32px;
  line-height: 32px;
  font-family: ${(props) => props.theme.fonts.oleoScript};
  margin-bottom: 16px;
`;

export const FooterSubtitle = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath70};
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
`;
