import { gql } from "graphql-tag";

export const query = gql`
  query GetAllRatings {
    ratings {
      id
      baby {
        firstName
        gender
      }
      customer {
        displayName
      }
      rating
      feedback
    }
  }
`;
