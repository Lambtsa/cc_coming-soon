import { StarIcon, StarRatingsWrapper } from "./StarRatings.styles";
import { StarRatingsProps } from "./StarRatings.types";

export const StarRatings = ({ size }: StarRatingsProps): JSX.Element => {
  return (
    <StarRatingsWrapper>
      <StarIcon size={size} />
      <StarIcon size={size} />
      <StarIcon size={size} />
      <StarIcon size={size} />
      <StarIcon size={size} />
    </StarRatingsWrapper>
  );
};
