import styled from "styled-components";

export const RATING_WIDTH = 280;

export const RatingsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 32px 16px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${(props) => props.theme.colors.black20};
  min-width: ${RATING_WIDTH}px;
  flex: 1 1 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.petiteOrchid};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.oleoScript};
  text-align: center;
  font-size: 24px;
  line-height: 24px;
`;

export const Subtitle = styled.h4`
  color: ${(props) => props.theme.colors.petiteOrchid70};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.notoSerif};
  text-align: center;
  font-size: 12px;
  margin-top: 2px;
  line-height: 16px;
`;

export const ContentText = styled.p`
  color: ${(props) => props.theme.colors.quickSand};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 12px;
  line-height: 12px;
  max-height: 80px;
  line-height: 20px;
  text-align: center;
  /**
  * NOTE: Line clamping for multiline ellipsis https://stackoverflow.com/a/41137262
  */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
