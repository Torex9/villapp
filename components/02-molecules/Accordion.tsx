'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronDown, Lock } from 'lucide-react';
import { PropsWithChildren } from 'react';

export interface LogoProps {
  title: string;
  startOpen?: boolean;
  truncateTitle?: boolean;
  disabled?: boolean | null;
}

const Accordion: React.FC<PropsWithChildren<LogoProps>> = ({
  title,
  startOpen = false,
  truncateTitle = false,
  disabled,
  children
}) => {
  const titleCode = <span className="text-xl font-semibold text-gray-900">{title}</span>;

  return (
    <Disclosure as="div" defaultOpen={startOpen}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={clsx(
              'flex w-full items-center justify-between rounded-md p-6 text-left',
              disabled && 'bg-gray-200'
            )}
          >
            <div className="flex min-w-0 items-center gap-3">
              <>
                {truncateTitle ? (
                  <div className="min-w-0 flex-1 truncate pr-6" title={title}>
                    {titleCode}
                  </div>
                ) : (
                  titleCode
                )}
              </>
            </div>
            {disabled ? (
              <Lock className={clsx('h-5 w-5 shrink-0 text-gray-400 duration-150')} aria-hidden="true" />
            ) : (
              <ChevronDown
                className={clsx(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 shrink-0 text-gray-400 duration-150')}
                aria-hidden="true"
              />
            )}
          </DisclosureButton>
          {!disabled && (
            <DisclosurePanel as="div" className="-mt-6 p-6">
              {children}
            </DisclosurePanel>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
