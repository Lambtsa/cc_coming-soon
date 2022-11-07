import { Container } from "@components/Container";
import { useTranslation } from "@hooks/useTranslation";
import {
  ServicesInner,
  ServicesWrapper,
  ServiceTextContent,
  Subtitle,
  Title,
} from "./Services.styles";

export const ServicesSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ServicesWrapper>
      <Container size="pc">
        <ServicesInner>
          <ServiceTextContent>
            <Title>{t({ id: "section.services.ethical.title" })}</Title>
            <Subtitle>
              {t({ id: "section.services.ethical.description" })}
            </Subtitle>
          </ServiceTextContent>
          <ServiceTextContent>
            <Title>{t({ id: "section.services.eco.title" })}</Title>
            <Subtitle>{t({ id: "section.services.eco.description" })}</Subtitle>
          </ServiceTextContent>
          <ServiceTextContent>
            <Title>{t({ id: "section.services.bio.title" })}</Title>
            <Subtitle>{t({ id: "section.services.bio.description" })}</Subtitle>
          </ServiceTextContent>
          <ServiceTextContent>
            <Title>{t({ id: "section.services.cost.title" })}</Title>
            <Subtitle>
              {t({ id: "section.services.cost.description" })}
            </Subtitle>
          </ServiceTextContent>
        </ServicesInner>
      </Container>
    </ServicesWrapper>
  );
};
