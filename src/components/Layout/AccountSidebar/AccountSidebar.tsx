import { useRouter } from "next/router";
import { useCallback } from "react";
import { AccountDetails } from "./AccountDetails";
import { AccountSidebarWrapper } from "./AccountSidebar.styles";
import { SideBarLink } from "./SideBarLink";

const links = [
  {
    label: "Mon bébé",
    href: "/compte/mon-bebe",
    active: /^\/compte\/mon-bebe/,
  },
  {
    label: "Ma box",
    href: "/compte/mon-coffret",
    active: /^\/compte\/mon-coffret/,
  },
  {
    label: "Mes coordonnées",
    href: "/compte/mes-infos",
    active: /^\/compte\/mes-infos/,
  },
  {
    label: "Mes paiements",
    href: "/compte/paiements",
    active: /^\/compte\/paiements/,
  },
  {
    label: "Mes paramètres",
    href: "/compte/parametres",
    active: /^\/compte\/parametres/,
  },
];

export const AccountSidebar = (): JSX.Element => {
  const router = useRouter();

  const isActiveLink = useCallback(
    (regex: RegExp): boolean => {
      return regex.test(router.pathname);
    },
    [router.pathname]
  );

  const hasLinks = !!links.length;
  return (
    <AccountSidebarWrapper>
      <AccountDetails />
      {hasLinks &&
        links.map((link) => (
          <SideBarLink
            key={link.href}
            href={link.href}
            active={isActiveLink(link.active)}
          >
            {link.label}
          </SideBarLink>
        ))}
    </AccountSidebarWrapper>
  );
};
