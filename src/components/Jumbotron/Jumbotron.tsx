import { JumbotronTitle, JumbotronWrapper, Subtitle } from "./Jumbotron.styles";
import { Container } from "@components/Container";
import { useTranslation } from "@hooks/useTranslation";
import { Button } from "@components/Button";
import { JumbotronProps } from "./Jumbotron.types";

export const Jumbotron = ({
  title,
  height,
  subtitle,
  btnText,
  onClick,
}: JumbotronProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <JumbotronWrapper height={height}>
      <Container size="tablet">
        <JumbotronTitle>{t({ id: title })}</JumbotronTitle>
        <Subtitle>{t({ id: subtitle })}</Subtitle>
        <Button variant="Primary" themeColor="Beige/Red" onClick={onClick}>
          {t({ id: btnText })}
        </Button>
      </Container>
    </JumbotronWrapper>
  );
};
