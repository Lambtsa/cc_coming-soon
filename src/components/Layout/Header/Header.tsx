import { useTranslation } from "@hooks/useTranslation";
import { BrandTitle, HeaderWrapper } from "./Header.styles";

export const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <BrandTitle>{t({ id: "commons.brandName" })}</BrandTitle>
    </HeaderWrapper>
  );
};
