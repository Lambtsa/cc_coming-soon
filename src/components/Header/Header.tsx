import { Container } from "@components/Container";
import { Link } from "@components/Link";
import { routes } from "@helpers/routes";
import { useTranslation } from "@hooks/useTranslation";
import React, { useState, useEffect, useCallback } from "react";
import {
  HeaderWrapper,
  HeaderSection,
  HeaderNavigation,
  HeaderBrandTitle,
} from "./Header.styles";

interface HeaderProps {
  fixed: boolean;
}

export const Header = ({ fixed = false }: HeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const handleScrolling = useCallback(() => {
    if (typeof window === "undefined" || !fixed) {
      return;
    }
    /* scroll position for navbar colour */
    const scrollPos = window.scrollY;
    /* navbar scroll logic (colour when scrolled) */
    if (scrollPos !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [fixed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, [handleScrolling]);

  return (
    <HeaderWrapper isScrolled={isScrolled} fixed={fixed}>
      <Container size="pc">
        <HeaderNavigation>
          <HeaderSection>
            <Link variant="Link" href={routes.formules()}>
              {t({ id: "header.link.box" })}
            </Link>
            <Link variant="Link" href={routes.aboutUs()}>
              {t({ id: "header.link.whoAreWe" })}
            </Link>
          </HeaderSection>
          <HeaderSection>
            <HeaderBrandTitle variant="Link" href={routes.index()}>
              {t({ id: "commons.brandName" })}
            </HeaderBrandTitle>
          </HeaderSection>
          <HeaderSection>
            <Link variant="Link" href={routes.signUp()}>
              {t({ id: "header.link.signUp" })}
            </Link>
            <Link variant="Link" href={routes.login()}>
              {t({ id: "header.link.login" })}
            </Link>
          </HeaderSection>
        </HeaderNavigation>
      </Container>
    </HeaderWrapper>
  );
};
