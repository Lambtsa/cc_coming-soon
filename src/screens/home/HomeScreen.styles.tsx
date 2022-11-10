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

export const NoteLink = styled(Link)`
  flex: 1 1 auto;
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-right: 8px;
  text-align: right;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-decoration: "none";
  letter-spacing: 0px;
  &:hover {
    color: ${(props) => props.theme.colors.bridalHeath};
  }
`;

export const UnderBtnLink = styled(Link)`
  flex: 1 1 auto;
  margin: 0;
  margin-top: -8px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-decoration: "none";
  letter-spacing: 0px;
  &:hover {
    color: ${(props) => props.theme.colors.bridalHeath};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;
