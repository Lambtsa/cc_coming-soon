import { SplitSection } from "@components/SplitSection";
import { SectionWrapper } from "@components/SplitSection/SplitSection.styles";
import { useTranslation } from "@hooks/useTranslation";
import { ImageWrapper, Title, ContentText, TextWrapper } from "./About.styles";
import { Image } from "@components/Image";

export const AboutSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <SplitSection innerBorder color="Red">
        <TextWrapper>
          <Title>{t({ id: "section.about.title" })}</Title>
          <ContentText>{t({ id: "section.about.description" })}</ContentText>
        </TextWrapper>
      </SplitSection>
      <SplitSection color="Beige">
        <ImageWrapper>
          <Image alt="" src="/images/clothes/clothing-1.png" />
          <Image alt="" src="/images/clothes/clothing-2.png" />
          <Image alt="" src="/images/clothes/clothing-3.png" />
          <Image alt="" src="/images/clothes/clothing-4.png" />
          <Image alt="" src="/images/clothes/clothing-5.png" />
          <Image alt="" src="/images/clothes/clothing-6.png" />
        </ImageWrapper>
      </SplitSection>
    </SectionWrapper>
  );
};
