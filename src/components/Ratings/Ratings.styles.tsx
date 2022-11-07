import styled from "styled-components";

export const RATING_GAP = 16;

export const RatingsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  overflow: hidden;
`;

export const InnerCarousel = styled.div<{
  carouselPosition: number;
}>`
  display: flex;
  align-items: stretch;
  gap: ${RATING_GAP}px;
  width: 100%;
  height: 100%;
  padding: 16px 48px;
  transform: ${({ carouselPosition }) => `translateX(-${carouselPosition}px)`};
  transition: 300ms ease-in all;
`;
