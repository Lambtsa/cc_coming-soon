import styled from "styled-components";

export const SeparationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Separator = styled.span`
  background-color: ${(props) => props.theme.colors.bridalHeath70};
  height: 1px;
  width: 100%;
`;

export const SplitText = styled.p`
  flex: 1 1 auto;
  margin: 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.bridalHeath70};
  line-height: 16px;
  text-align: center;
  min-width: fit-content;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-decoration: "none";
  letter-spacing: 1.2;
`;
