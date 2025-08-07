import Container from "../01-atoms/Container";
import Logo from "../01-atoms/Logo";
import MobileNav from "../02-molecules/MobileNav";
import Navigation from "../02-molecules/Navigation";
import { Nav } from "../../types/Nav";
import { Popover } from "@headlessui/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface HeaderProps {
  nav: Array<Nav>;
}

export const Header: React.FC<HeaderProps> = ({ nav }) => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <header className="relative w-full bg-alpha-light-400">
            <Container className="flex items-center justify-between gap-6">
              <Link href="/">
                <Logo />
              </Link>

              <div className="hidden lg:block">
                <Navigation nav={nav} />
              </div>

              <div className="py-3 lg:hidden">
                <Popover.Button className="flex aspect-square w-12 shrink-0 items-center justify-center text-alpha-dark-800 duration-150 hover:text-alpha-dark-600">
                  <Menu />
                </Popover.Button>
              </div>
            </Container>
          </header>

          <div className="lg:hidden">
            <MobileNav nav={nav} open={open} />
          </div>
        </>
      )}
    </Popover>
  );
};

export default Header;
