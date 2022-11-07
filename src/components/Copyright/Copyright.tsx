import { useTranslation } from "@hooks/useTranslation";
import { CopyrightWrapper } from "./Copyright.styles";

export const Copyright = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <CopyrightWrapper color="Red">
      {t({ id: "commons.copyright" }, { year: new Date().getFullYear() })}
    </CopyrightWrapper>
  );
};
