'use client';

import { userNav } from '../../data/AppNavigation';
import clsx from 'clsx';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface UserNavProps {
  className?: string;
  toggleMenu?: () => void;
}

const UserNav: React.FC<UserNavProps> = (props) => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === '/app' && pathname !== '/app') return false;
    return pathname.startsWith(href);
  };

  return (
    <nav className={clsx('grow', props.className)}>
      <ul className="font-bravo flex h-full flex-col border-t border-t-alpha-dark-800 font-semibold text-alpha-light-100">
        {userNav.map((item) => (
          <li key={item.id}>
            <Link
              className={clsx(
                'flex w-full items-center gap-3 border-b border-b-alpha-dark-800 p-6 text-left duration-150 hover:bg-alpha-dark-800/60 hover:text-white'
                // isActive(item.link) && 'text-white'
              )}
              href={item.link}
              onClick={props.toggleMenu}
            >
              {item.text}
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <button
            type="button"
            onClick={() => {}}
            className="flex w-full items-center gap-3 border-t border-t-alpha-dark-800 p-6 text-left duration-150 hover:bg-error-dark/60 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
