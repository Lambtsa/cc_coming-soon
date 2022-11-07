import {
  CarouselBtnIcon,
  CarouselBtnWrapper,
  CarouselButton,
} from "./CarouselBtn.styles";
import { CarouselBtnType } from "./CarouselBtn.types";

interface CarouselBtnProps {
  onClick: () => void;
  btnType: CarouselBtnType;
}

export const CarouselBtn = ({
  onClick,
  btnType,
}: CarouselBtnProps): JSX.Element => {
  return (
    <CarouselBtnWrapper btnType={btnType}>
      <CarouselButton type="button" onClick={onClick}>
        <CarouselBtnIcon />
      </CarouselButton>
    </CarouselBtnWrapper>
  );
};
