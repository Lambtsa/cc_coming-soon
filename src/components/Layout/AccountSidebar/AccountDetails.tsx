import { useGetAuthCustomerQuery } from "@customTypes";
import { useMemo } from "react";
import {
  AccountDetailsOuterWrapper,
  AccountDetailsTitleWrapper,
  LogoText,
  LogoWrapper,
  Subtitle,
  Title,
} from "./AccountSidebar.styles";

export const AccountDetails = (): JSX.Element | null => {
  const { data } = useGetAuthCustomerQuery();

  const meUser = useMemo(() => {
    return data?.authCustomer;
  }, [data?.authCustomer]);

  const getInitialsFromName = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  if (!meUser) {
    return null;
  }

  return (
    <AccountDetailsOuterWrapper>
      <LogoWrapper>
        <LogoText>
          {getInitialsFromName(meUser.firstName, meUser.lastName)}
        </LogoText>
      </LogoWrapper>
      <AccountDetailsTitleWrapper>
        <Title>{meUser.displayName}</Title>
        <Subtitle>{meUser.email}</Subtitle>
      </AccountDetailsTitleWrapper>
    </AccountDetailsOuterWrapper>
  );
};
