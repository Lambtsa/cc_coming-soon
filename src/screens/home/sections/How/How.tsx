import { SplitSection } from "@components/SplitSection";
import { SectionWrapper } from "@components/SplitSection/SplitSection.styles";
import { TextDivider } from "@components/TextDivider";
import { useTranslation } from "@hooks/useTranslation";
import { Image } from "@components/Image";
import { Title, Subtitle, ContentText, TextWrapper } from "./How.styles";

export const HowSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <SplitSection color="Beige">
        <Image src="/images/box.webp" alt="Example of box" />
      </SplitSection>
      <SplitSection innerBorder color="Green">
        <TextWrapper>
          <Title>{t({ id: "section.how.title" })}</Title>
          <Subtitle>{t({ id: "section.how.subtitle1" })}</Subtitle>
          <ContentText>{t({ id: "section.how.description1" })}</ContentText>
          <TextDivider />
          <Subtitle>{t({ id: "section.how.subtitle2" })}</Subtitle>
          <ContentText>{t({ id: "section.how.description2" })}</ContentText>
          <TextDivider />
          <Subtitle>{t({ id: "section.how.subtitle3" })}</Subtitle>
          <ContentText>{t({ id: "section.how.description3" })}</ContentText>
        </TextWrapper>
      </SplitSection>
    </SectionWrapper>
  );
};
