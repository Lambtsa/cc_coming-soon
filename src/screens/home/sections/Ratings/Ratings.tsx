import { SplitSection } from "@components/SplitSection";
import { SectionWrapper } from "@components/SplitSection/SplitSection.styles";
import { StarRatings } from "@components/Ratings";
import { useTranslation } from "@hooks/useTranslation";
import { Title, TextWrapper } from "./Ratings.styles";
import { Image } from "@components/Image";
import { Ratings } from "@components/Ratings";

export const RatingsSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <SplitSection innerBorder color="Beige">
        <TextWrapper>
          <StarRatings size="Large" />
          <Title>{t({ id: "section.thankYou.title" })}</Title>
          <Ratings />
        </TextWrapper>
      </SplitSection>
      <SplitSection color="Beige">
        <Image src="/images/thanks.webp" alt="Thank you" />
      </SplitSection>
    </SectionWrapper>
  );
};
