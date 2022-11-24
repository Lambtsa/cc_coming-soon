import { Link } from "@components/Link";
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

export const ToastLink = styled(Link)`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.notoSerif};
  text-align: left;
  text-decoration: underline;
  font-size: 14px;
  line-height: 24px;
`;
