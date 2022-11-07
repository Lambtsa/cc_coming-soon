import { useTranslation } from "@hooks/useTranslation";
import { TranslationKey } from "@customTypes";
import {
  CloseBtn,
  CloseIcon,
  InfoIcon,
  InnerWrapper,
  ToastText,
  ToastWrapper,
  WarningIcon,
} from "./Toast.styles";
import { ToastType } from "./Toast.types";

interface ToastProps {
  type: ToastType;
  message: TranslationKey | undefined;
  onClose: () => void;
}

export const Toast = ({ type, message, onClose }: ToastProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ToastWrapper type={type}>
      <InnerWrapper>
        {type === "Error" ? <WarningIcon /> : <InfoIcon />}
        <ToastText>{t({ id: message })}</ToastText>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
      </InnerWrapper>
    </ToastWrapper>
  );
};
