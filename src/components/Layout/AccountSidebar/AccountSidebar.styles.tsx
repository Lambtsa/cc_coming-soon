import styled, { css } from "styled-components";

export const AccountSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.petiteOrchid20};
  height: 100%;
  width: 100%;
  min-width: 200px;
  padding: 16px;
`;

export const StyledLink = styled.a<{
  active: boolean;
}>`
  display: block;
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: none;
  font-size: 14px;
  padding: 10px 12px;
  width: 100%;
  border-radius: 5px;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.petiteOrchid30};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${(props) => props.theme.colors.petiteOrchid20};
    `};
}`;

export const AccountDetailsOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const AccountDetailsTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  font-size: 16px;
  line-height: 20px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.quickSand};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 12px;
  line-height: 16px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.opal};
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const LogoText = styled.p`
  color: ${(props) => props.theme.colors.bridalHeath};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 24px;
  line-height: 24px;
`;
