import { MEDIA } from "@constants/layout";
import styled from "styled-components";

export const Logo = styled.img`
  max-height: 100px;

  @media ${MEDIA.MOBILE} {
    max-height: 75px;
  }
`;
