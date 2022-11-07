import styled from "styled-components";

export const ServicesWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
`;

export const ServicesInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ServiceTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 32px;
  line-height: 32px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.quickSand};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`;
