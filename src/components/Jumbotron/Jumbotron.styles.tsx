import { MEDIA } from "@constants/layout";
import styled from "styled-components";
import { JumbotronHeight } from "./Jumbotron.types";

export const JumbotronWrapper = styled.div<{
  height?: JumbotronHeight;
}>`
  position: relative;
  width: 100vw;
  height: ${({ height }) => (height ? `${height}vh` : "100vh")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/images/charlie-jumbotron.webp");
`;

export const JumbotronTitle = styled.h1`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 48px;
  line-height: 48px;

  @media ${MEDIA.MOBILE} {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @media ${MEDIA.MOBILE} {
    font-size: 16px;
    line-height: 16px;
  }
`;
