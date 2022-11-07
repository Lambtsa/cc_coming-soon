import { useCallback, useMemo, useState } from "react";
import { Rating } from "./Rating";
import { InnerCarousel, RatingsWrapper, RATING_GAP } from "./Ratings.styles";
import { v4 as uuid } from "uuid";
import {
  Gender,
  GetAllRatingsQuery,
  useGetAllRatingsQuery,
} from "@customTypes";
import { CarouselBtn } from "./CarouselBtn";
import { RATING_WIDTH } from "./Rating/Rating.styles";

interface RatingType {
  displayName: string;
  familyLink: string;
  feedback: string;
}

type RatingResult = NonNullable<GetAllRatingsQuery>["ratings"][number];

/* FIXME: Make this into a carrousel */
export const Ratings = (): JSX.Element => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  // TODO: Add limit/only recent to ratings
  const { data } = useGetAllRatingsQuery();

  const getFamilyLink = (rating: RatingResult) => {
    switch (rating.baby.gender) {
      case Gender.Boy:
        return `Parent du petit ${rating.baby.firstName}`;
      case Gender.Girl:
        return `Parent de la petite ${rating.baby.firstName}`;
    }
  };

  const ratings: RatingType[] = useMemo(() => {
    if (!data || !data.ratings || !data.ratings[0]) {
      return [];
    }
    console.log({ ratings: data.ratings });
    return data?.ratings.map((rating) => ({
      displayName: rating.customer.displayName,
      familyLink: getFamilyLink(rating),
      feedback: rating.feedback,
    }));
  }, [data]);

  const ratingWidthWithPadding = useMemo(() => {
    return RATING_WIDTH + RATING_GAP;
  }, []);

  const handleClickNext = useCallback(() => {
    if (!data?.ratings.length) {
      return;
    }
    if (
      carouselPosition <
      (data?.ratings.length - 1) * ratingWidthWithPadding
    ) {
      setCarouselPosition(carouselPosition + ratingWidthWithPadding);
    }
  }, [carouselPosition, data?.ratings.length, ratingWidthWithPadding]);

  const handleClickPrevious = useCallback(() => {
    if (carouselPosition >= ratingWidthWithPadding) {
      setCarouselPosition(carouselPosition - ratingWidthWithPadding);
    }
  }, [carouselPosition, ratingWidthWithPadding]);

  const hasRatings = !!ratings.length;

  return (
    <RatingsWrapper>
      <CarouselBtn onClick={handleClickPrevious} btnType="Previous" />
      <CarouselBtn onClick={handleClickNext} btnType="Next" />
      <InnerCarousel carouselPosition={carouselPosition}>
        {hasRatings &&
          ratings.map((rating) => (
            <Rating
              key={`${rating.displayName}-${uuid()}`}
              displayName={rating.displayName}
              familyLink={rating.familyLink}
              feedback={rating.feedback}
            />
          ))}
      </InnerCarousel>
    </RatingsWrapper>
  );
};
