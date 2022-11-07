import { AuthProviders } from "@constants/authProviders";
import { ReactComponent as GoogleIcon } from "@assets/icons/google.svg";
import { ReactComponent as GithubIcon } from "@assets/icons/github.svg";
import { ReactComponent as FacebookIcon } from "@assets/icons/facebook_color.svg";
import { HTMLProps } from "react";
import { LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { Button } from "./SocialButton.styles";

interface SocialButtonProps extends HTMLProps<HTMLButtonElement> {
  type: LiteralUnion<BuiltInProviderType, string>;
}

export const SocialButton = ({
  type,
  onClick,
}: SocialButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick}>
      {type && type === AuthProviders.Github && <GithubIcon />}
      {type && type === AuthProviders.Facebook && <FacebookIcon />}
      {type && type === AuthProviders.Google && <GoogleIcon />}
    </Button>
  );
};
