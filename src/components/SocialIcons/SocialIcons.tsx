import { v4 as uuid } from "uuid";
import { SocialIconsWrapper } from "./SocialIcons.styles";
import URL from "@constants/url";

import { ReactComponent as FacebookIcon } from "@assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram.svg";
// import { ReactComponent as TiktokIcon } from "@assets/icons/tiktok.svg";
// import { ReactComponent as TwitterIcon } from "@assets/icons/twitter.svg";
import { Link } from "@components/Link";
import { SocialIconsProps, SocialMediaLink } from "./SocialIcons.types";

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "facebook",
    link: URL.FACEBOOK,
    svg: <FacebookIcon />,
  },
  {
    name: "instagram",
    link: URL.INSTAGRAM,
    svg: <InstagramIcon />,
  },
  // {
  //   name: "twitter",
  //   link: URL.TWITTER,
  //   svg: <TwitterIcon />,
  // },
  // {
  //   name: "tiktok",
  //   link: URL.TIKTOK,
  //   svg: <TiktokIcon />,
  // },
];

export const SocialIcons = ({
  orientation = "horizontal",
  position,
  alignment = "center"
}: SocialIconsProps): JSX.Element => {
  return (
    <SocialIconsWrapper position={position} orientation={orientation} alignment={alignment}>
      {socialMediaLinks &&
        socialMediaLinks.map((icon) => (
          <Link
            aria-label={icon.name}
            variant="Link"
            newTab
            key={`${icon.name}-${uuid()}`}
            href={icon.link}
          >
            {icon.svg}
          </Link>
        ))}
    </SocialIconsWrapper>
  );
};
