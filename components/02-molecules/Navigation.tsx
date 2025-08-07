'use client';

import { Nav } from '../../types/Nav';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

export interface NavigationProps {
  nav: Array<Nav>;
}

export const doesUrlMatch = (urlMatcher: string | undefined, pathname: string | null) => {
  if (!urlMatcher || !pathname) return false;
  return new RegExp(urlMatcher, 'g').test(pathname);
};

export const Navigation: React.FC<NavigationProps> = ({ nav }) => {
  const pathname = usePathname();
  const activeLink = (url: string) => pathname == url;

  return (
    <nav>
      <ul className="flex items-center">
        {nav.map((item) => (
          <li key={item.name}>
            {item.children ? (
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className={clsx(
                        open || doesUrlMatch(item.urlMatcher, pathname) ? 'text-alpha-dark-600' : 'text-alpha-dark-800',
                        'outline-bravo group relative z-20 flex items-center gap-1 px-6 duration-150 hover:text-alpha-dark-600'
                      )}
                    >
                      <span className="relative py-9">{item.name}</span>
                      <ChevronDown
                        className={clsx(
                          open ? 'rotate-0 text-alpha' : '-rotate-90 text-alpha-dark-100',
                          'h-4 w-4 duration-150 group-hover:text-alpha'
                        )}
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-300"
                      enterFrom="opacity-0 -translate-y-1/2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1/2"
                    >
                      <PopoverPanel className="absolute left-0 z-0 w-screen max-w-xs">
                        <ul className="overflow-hidden rounded-b-lg bg-alpha-light-100 shadow-lg">
                          {item.children?.map(
                            (child) =>
                              child.url && (
                                <li key={child.name} className="border-b border-b-white/20 last:border-b-0">
                                  <Link href={child.url}>
                                    <div
                                      className={clsx(
                                        'outline-bravo flex items-center gap-3 px-6 py-4 duration-150',
                                        'hover:bg-black/10 hover:text-alpha',
                                        activeLink(child.url)
                                          ? 'font-bold text-alpha'
                                          : 'font-medium text-alpha-dark-600'
                                      )}
                                    >
                                      {activeLink(child.url) && <ArrowRight className="text-bravo h-4 w-4" />}
                                      {child.name}
                                    </div>
                                  </Link>
                                </li>
                              )
                          )}
                        </ul>
                      </PopoverPanel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <>
                {item.url && (
                  <Link
                    href={item.url}
                    className={clsx(
                      'outline-bravo | relative z-20 block px-6 py-9 duration-150 hover:text-alpha-dark-400',
                      activeLink(item.url) ? 'text-alpha-dark-400' : 'text-alpha-dark-800'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
