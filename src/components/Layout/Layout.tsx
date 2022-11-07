import { ReactNode } from "react";
import { AccountSidebar } from "./AccountSidebar";
import { Header } from "./Header";
import { AccountInnerGrid, AccountOuterGrid } from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <AccountOuterGrid>
      <Header />
      <AccountInnerGrid>
        <AccountSidebar />
        {children}
      </AccountInnerGrid>
    </AccountOuterGrid>
  );
};
