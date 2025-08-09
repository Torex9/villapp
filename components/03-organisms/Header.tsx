"use client";

import Container from "../01-atoms/Container";
import Logo from "../01-atoms/Logo";
import MobileNav from "../02-molecules/MobileNav";
import Navigation from "../02-molecules/Navigation";
import { Nav } from "../../types/Nav";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface HeaderProps {
  nav: Array<Nav>;
}

export const Header: React.FC<HeaderProps> = ({ nav }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state after scrolling down a bit
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <header
            className={`
              fixed z-50 transition-all duration-500 ease-out translate-y-0
              ${
                isScrolled
                  ? "top-4 left-4 right-4 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl backdrop-saturate-150"
                  : "top-0 left-0 right-0 bg-[#f4f3e1]"
              }
            `}
          >
            <Container className="flex items-center justify-between gap-6 py-4">
              <Link href="/">
                <Logo />
              </Link>

              <div className="hidden lg:block">
                <Navigation nav={nav} />
              </div>

              {/* Join Waitlist Button for Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/#waitlist"
                  className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                >
                  Join the Waitlist
                </Link>
              </div>

              <div className="py-3 lg:hidden">
                <Popover.Button className="flex aspect-square w-12 shrink-0 items-center justify-center text-black duration-150 hover:text-gray-700 relative">
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  >
                    <Menu />
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      open ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                    }`}
                  >
                    <X />
                  </div>
                </Popover.Button>
              </div>
            </Container>
          </header>

          {/* Spacer to prevent content from being hidden under fixed header */}
          <div className="h-20 lg:h-24" />

          <div className="lg:hidden">
            <MobileNav
              nav={nav}
              open={open}
              isScrolled={isScrolled}
              onClose={close}
            />
          </div>
        </>
      )}
    </Popover>
  );
};

export default Header;
