import Styled, { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const StyledLoader = Styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;

  div {
    position: absolute;
    border: 4px solid ${(props) => props.theme.colors.pewter};
    opacity: 1;
    border-radius: 50%;
    animation-name: ${LoaderAnimation};
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
    animation-iteration-count: infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
