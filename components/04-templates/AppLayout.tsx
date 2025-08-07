import CookieConsentPopup from '../02-molecules/CookieConsentPopup';
import AppNavbar from '../03-organisms/AppNavbar';
import AppNavbarMobile from '../03-organisms/AppNavbarMobile';
import type { PropsWithChildren } from 'react';

export interface AppLayoutProps {
  user?: {
    initials?: string;
    name?: string;
  };
}

export const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = (props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col overflow-x-hidden xl:flex-row">
        <div className="xl:hidden">
          <AppNavbarMobile />
        </div>
        <div className="relative hidden w-full max-w-[20rem] overflow-hidden bg-alpha-dark-900 xl:block 2xl:max-w-[24rem]">
          <AppNavbar user={{ initials: props.user?.initials, name: props.user?.name }} />
        </div>
        <main className="relative mt-6 flex grow flex-col gap-12 p-12 px-6 py-6 lg:mt-0">{props.children}</main>
      </div>
      <CookieConsentPopup privacyPolicyLink="#" />
    </>
  );
};

export default AppLayout;
