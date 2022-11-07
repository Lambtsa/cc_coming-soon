import { Link } from "@components/Link";
import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const HeaderWrapper = styled.header<{
  fixed: boolean;
  isScrolled: boolean;
}>`
  position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
  top: 0;
  display: flex;
  align-items: center;
  z-index: ${(props) => props.theme.zIndexes.navigation};
  width: 100%;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.colors.black30 : "transparent"};
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: ${MEDIA.PC}px;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrandTitle = styled(Link)`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  font-size: 32px;
  line-height: 32px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
