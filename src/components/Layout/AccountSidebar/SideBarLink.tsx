import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { StyledLink } from "./AccountSidebar.styles";

interface SideBarLinkProps extends LinkProps {
  children: ReactNode;
  active?: boolean;
}

export const SideBarLink = ({
  href,
  as,
  active = false,
  children,
}: SideBarLinkProps): JSX.Element => {
  return (
    <Link href={href} passHref as={as}>
      <StyledLink active={active}>{children}</StyledLink>
    </Link>
  );
};
