import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Image } from "@components/Image";
import { SocialIcons } from "@components/SocialIcons";
import { SplitSection } from "@components/SplitSection";
import {
  BrandLink,
  SectionWrapper,
} from "@components/SplitSection/SplitSection.styles";
import { routes } from "@helpers/routes";
import { useTranslation } from "@hooks/useTranslation";
import { ContentText, Title } from "./FourOhFour.styles";

export const FourOhFourScreen = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <SplitSection color="Beige">
        <BrandLink variant="Link" href={routes.index()}>
          {t({ id: "commons.brandName" })}
        </BrandLink>
        <Image src="/images/charlie-1.webp" alt="Thank you" />
        <SocialIcons position="Right" orientation="Vertical" />
      </SplitSection>
      <SplitSection innerBorder color="Green">
        <Container size="mobile">
          <Title>{t({ id: "screen.fourOhFour.title" })}</Title>
          <ContentText>{t({ id: "screen.fourOhFour.subtitle" })}</ContentText>
          <Button variant="Primary" themeColor="Beige/Red" fullwidth>
            {t({ id: "screen.fourOhFour.btnText" })}
          </Button>
        </Container>
      </SplitSection>
    </SectionWrapper>
  );
};
