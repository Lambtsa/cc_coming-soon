import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: left;
  font-size: 48px;
  line-height: 48px;

  @media ${MEDIA.MOBILE} {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const ContentText = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath60};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 20px;
  text-align: left;

  @media ${MEDIA.MOBILE} {
    font-size: 16px;
    line-height: 16px;
  }
`;
