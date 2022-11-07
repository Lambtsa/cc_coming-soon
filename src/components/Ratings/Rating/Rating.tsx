import { StarRatings } from "@components/Ratings/StarRatings";
import {
  ContentText,
  RatingsWrapper,
  Subtitle,
  Title,
  TitleWrapper,
} from "./Rating.styles";

interface RatingProps {
  displayName: string;
  familyLink: string;
  feedback: string;
}

export const Rating = ({
  displayName,
  familyLink,
  feedback,
}: RatingProps): JSX.Element => {
  return (
    <RatingsWrapper>
      <TitleWrapper>
        <Title>{displayName}</Title>
        <Subtitle>{familyLink}</Subtitle>
      </TitleWrapper>
      <ContentText>{feedback}</ContentText>
      {/* TODO: make the stars actually dynamic when real data is connected */}
      <StarRatings size="Small" />
    </RatingsWrapper>
  );
};
