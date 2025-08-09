"use client";

import { Nav } from "../../types/Nav";
import { handleSmoothScrollWithDelay } from "../../lib/smoothScroll";
import { PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

export interface MobileNavProps {
  nav?: Array<Nav>;
  open: boolean;
  isScrolled?: boolean;
  onClose?: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  nav,
  isScrolled = false,
  onClose,
}) => {
  const pathname = usePathname();
  const activeLink = (url: string) => pathname == url;

  const handleMobileNavScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    // Close the mobile menu first
    if (onClose) onClose();

    // Use the utility function with delay
    handleSmoothScrollWithDelay(e, url, 100);
  };

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 -translate-y-4"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-4"
    >
      <PopoverPanel
        className={`
          fixed left-4 right-4 z-40 overflow-hidden shadow-2xl transition-all duration-500 ease-out
          ${
            isScrolled
              ? "top-8 mt-24 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/30 backdrop-saturate-150"
              : "top-28 mt-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-gray-200/50"
          }
        `}
      >
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {nav &&
              nav.map((item) => (
                <li key={item.name}>
                  {item.url && (
                    <PopoverButton
                      as={Link}
                      href={item.url}
                      onClick={(e) => handleMobileNavScroll(e, item.url!)}
                      className="w-full"
                    >
                      <div
                        className={clsx(
                          "block py-3 px-4 rounded-lg font-medium text-left transition-all duration-200",
                          activeLink(item.url)
                            ? "bg-[#ed5a2e]/10 text-[#ed5a2e] font-semibold"
                            : "text-gray-700 hover:bg-[#ed5a2e]/5 hover:text-[#ed5a2e]"
                        )}
                      >
                        {item.name}
                      </div>
                    </PopoverButton>
                  )}
                </li>
              ))}
          </ul>

          {/* Join Waitlist Button for Mobile */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href="/#waitlist"
              onClick={(e) => {
                if (onClose) onClose();
                // Small delay to allow menu to start closing before navigating/scrolling
                setTimeout(() => {
                  handleSmoothScrollWithDelay(e, "/#waitlist", 50);
                }, 100);
              }}
              className="block w-full px-4 py-3 rounded-lg bg-[#ed5a2e] text-white text-sm font-bold text-center cursor-pointer hover:bg-[#d54d26] transition-all duration-200 shadow-lg"
            >
              Join the Waitlist
            </Link>
          </div>
        </nav>
      </PopoverPanel>
    </Transition>
  );
};

export default MobileNav;
