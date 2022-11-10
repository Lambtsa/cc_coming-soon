import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const Title = styled.h1`
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