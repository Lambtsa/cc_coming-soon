import Link from "next/link";

import type { Props } from "./Link.types";

import { StyledLink } from "./Link.styles";
import { useMemo } from "react";

export const LinkWrap = function LinkWrap({
  variant,
  underline = false,
  href,
  children,
  as,
  newTab = false,
  ...props
}: Props) {
  const handleNewTab = useMemo(() => {
    if (newTab) {
      return {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return {};
  }, [newTab]);
  return (
    <Link href={href} passHref as={as}>
      <StyledLink
        underline={underline}
        {...props}
        variant={variant}
        {...handleNewTab}
      >
        {children}
      </StyledLink>
    </Link>
  );
};
