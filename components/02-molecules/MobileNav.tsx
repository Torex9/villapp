"use client";

import { Nav } from "../../types/Nav";
import {
  handleSmoothScrollWithDelay,
  scrollToElement,
} from "../../lib/smoothScroll";
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
  open,
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
    <>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="backdrop-blur-xs fixed inset-0 z-30 bg-alpha-dark-800/80"></div>
      </Transition>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <PopoverPanel
          className={`
            fixed right-0 z-40 flex shadow-md transition-all duration-500 ease-out
            ${
              isScrolled
                ? "top-4 mr-4 mt-16 rounded-2xl h-[calc(100vh-5rem)] w-[85vw] max-w-[24rem]"
                : "top-0 mt-16 h-[calc(100vh-4rem)] w-[85vw] max-w-[24rem]"
            }
          `}
        >
          <nav className="flex grow flex-col bg-alpha-dark-800 py-6">
            <div className="relative flex grow flex-col overflow-y-auto">
              <ul className="flex grow flex-col">
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
                              "relative block py-4 pr-3 font-heading font-bold text-left",
                              activeLink(item.url)
                                ? "pl-4 text-white"
                                : "pl-3 text-black dark:text-black hover:text-[#ed5a2e]"
                            )}
                          >
                            {item.name}
                          </div>
                        </PopoverButton>
                      )}
                      <hr className="border-b border-t-0 border-b-white/20" />
                    </li>
                  ))}
              </ul>

              {/* Join Waitlist Button for Mobile */}
              <div className="mt-6 px-4 pb-4">
                <button
                  onClick={() => {
                    if (onClose) onClose();
                    // Small delay to allow menu to start closing before scrolling
                    setTimeout(() => {
                      scrollToElement("waitlist");
                    }, 100);
                  }}
                  className="block w-full px-4 py-3 rounded-md bg-white text-black text-sm font-bold text-center cursor-pointer hover:-translate-y-0.5 transition duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                >
                  Join the Waitlist
                </button>
              </div>
            </div>
          </nav>
        </PopoverPanel>
      </Transition>
    </>
  );
};

export default MobileNav;
