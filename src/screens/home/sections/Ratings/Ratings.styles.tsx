import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 32px;
  line-height: 32px;

  @media ${MEDIA.MOBILE} {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 24px;
  line-height: 32px;
`;

export const ContentText = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath60};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @media ${MEDIA.MOBILE} {
    font-size: 16px;
    line-height: 16px;
  }
`;
