"use client";

import { Nav } from "../../types/Nav";
import { doesUrlMatch } from "./Navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

export interface MobileNavProps {
  nav?: Array<Nav>;
  open: boolean;
  isScrolled?: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  nav,
  open,
  isScrolled = false,
}) => {
  const pathname = usePathname();
  const activeLink = (url: string) => pathname == url;

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
        <div className="backdrop-blur-xs fixed inset-0 z-20 bg-alpha-dark-800/80"></div>
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
            fixed right-0 z-20 flex shadow-md transition-all duration-500 ease-out
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
                      {item.children ? (
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              {item.url && (
                                <DisclosureButton
                                  className={clsx(
                                    "relative flex w-full items-center justify-between py-4 pr-3 font-heading font-bold",
                                    activeLink(item.url) ||
                                      doesUrlMatch(item.urlMatcher, pathname)
                                      ? "pl-4 text-white"
                                      : "pl-3 text-alpha-light-400",
                                    open && "bg-alpha-dark-400 text-white"
                                  )}
                                >
                                  <span>{item.name}</span>
                                  <span className="flex items-center">
                                    <ChevronDown
                                      className={clsx(
                                        open ? "-rotate-180" : "rotate-0",
                                        activeLink(item.url)
                                          ? "text-white"
                                          : "text-alpha-light-400",
                                        "h-4 w-4 duration-150"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </DisclosureButton>
                              )}

                              <hr className="border-b border-t-0 border-b-white/20" />

                              <DisclosurePanel
                                as="div"
                                className="bg-alpha-dark-100"
                              >
                                <ul>
                                  {item.children?.map(
                                    (child) =>
                                      child.url && (
                                        <li
                                          key={child.name}
                                          className="border-b border-white/20"
                                        >
                                          <PopoverButton
                                            as={Link}
                                            href={child.url}
                                          >
                                            <div
                                              className={clsx(
                                                "flex items-center gap-2 py-4 pl-6 pr-3 font-heading",
                                                activeLink(child.url)
                                                  ? "font-bold text-white"
                                                  : "font-medium text-gray-50"
                                              )}
                                            >
                                              {activeLink(child.url) && (
                                                <ArrowRight className="text-comBravo h-4 w-4" />
                                              )}
                                              {child.name}
                                            </div>
                                          </PopoverButton>
                                        </li>
                                      )
                                  )}
                                </ul>
                              </DisclosurePanel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <>
                          {item.url && (
                            <Link
                              href={item.url}
                              className={clsx(
                                "relative block py-4 pr-3 font-heading font-bold",
                                activeLink(item.url)
                                  ? "pl-4 text-white"
                                  : "pl-3 text-alpha-light-400"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                          <hr className="border-b border-t-0 border-b-white/20" />
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </nav>
        </PopoverPanel>
      </Transition>
    </>
  );
};

export default MobileNav;
