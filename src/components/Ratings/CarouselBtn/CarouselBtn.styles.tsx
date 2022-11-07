import styled, { css } from "styled-components";
import { CarouselBtnType } from "./CarouselBtn.types";
import { ReactComponent as ArrowIcon } from "@assets/icons/chevron.svg";

export const CarouselBtnWrapper = styled.div<{
  btnType: CarouselBtnType;
}>`
  position: absolute;
  display: flex;
  height: inherit;
  top: 0;
  padding-bottom: 0;
  align-items: center;
  justify-content: center;
  ${({ btnType }) => {
    switch (btnType) {
      case "Next":
        return css`
          right: 0;
          padding-left: 32px;
          background: linear-gradient(
            90deg,
            rgba(255, 249, 244, 0.1),
            rgba(255, 249, 244, 0.6),
            rgba(255, 249, 244)
          );
        `;
      case "Previous":
        return css`
          left: 0;
          padding-right: 32px;
          background: linear-gradient(
            90deg,
            rgba(255, 249, 244),
            rgba(255, 249, 244, 0.6),
            rgba(255, 249, 244, 0.1)
          );
          & svg {
            transform: rotate(180deg);
          }
        `;
    }
  }};
  z-index: ${(props) => props.theme.zIndexes.carouselBtn};
`;

export const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.petiteOrchid30};
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colors.petiteOrchid50};
  }
`;

export const CarouselBtnIcon = styled(ArrowIcon)`
  display: block;
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.petiteOrchid};
`;
