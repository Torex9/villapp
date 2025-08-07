'use client';

import Logo from '../01-atoms/Logo';
import UserBadge from '../01-atoms/UserBadge';
import AppNav from '../02-molecules/AppNav';
import SlidePanel from '../02-molecules/SlidePanel';
import UserMenu from '../02-molecules/UserMenu';
import UserNav from '../02-molecules/UserNav';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export interface AppNavbarMobileProps {
  user?: {
    initials?: string;
  };
}

const AppNavbarMobile: React.FC<AppNavbarMobileProps> = (props) => {
  const [menuAppOpen, setMenuAppOpen] = useState(false);
  const [menuUserOpen, setMenuUserOpen] = useState(false);

  const toggleAppMenu = () => {
    setMenuAppOpen(!menuAppOpen);
  };

  const toggleUserMenu = () => {
    setMenuUserOpen(!menuUserOpen);
  };

  return (
    <>
      <div className="bg-alpha-900 flex justify-between gap-6 p-4 lg:p-6">
        <button type="button" onClick={() => setMenuAppOpen(true)}>
          <Menu className="text-alpha-100 h-6 w-6" />
        </button>
        <Link href="/app">
          <Logo />
        </Link>
        <button type="button" onClick={() => setMenuUserOpen(true)}>
          <UserBadge initials={props.user?.initials} size="small" />
        </button>
      </div>

      {/* App Nav */}
      <SlidePanel
        open={menuAppOpen}
        setOpen={setMenuAppOpen}
        direction="left"
        panelColor="bg-alpha-dark-900"
        buttonColor="text-white"
      >
        <AppNav className="w-full" toggleMenu={toggleAppMenu} />
      </SlidePanel>

      {/* User Nav */}
      <SlidePanel
        open={menuUserOpen}
        setOpen={setMenuUserOpen}
        direction="right"
        panelColor="bg-alpha-dark-900"
        buttonColor="text-white"
      >
        <UserNav className="w-full" />
      </SlidePanel>
    </>
  );
};

export default AppNavbarMobile;
