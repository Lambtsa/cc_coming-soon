import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.petiteOrchid};
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

export const BrandTitle = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 32px;
  line-height: 44px;
`;
