'use client';

import { appNav } from '../../data/AppNavigation';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface AppNavProps {
  className?: string;
  toggleMenu?: () => void;
}

const AppNav: React.FC<AppNavProps> = (props) => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === '/app' && pathname !== '/app') return false;
    return pathname.startsWith(href);
  };

  return (
    <nav className={props.className}>
      <ul className="font-bravo border-b border-alpha-dark-800 font-semibold text-alpha-light-200">
        {appNav.map((item) => (
          <li key={item.id}>
            <Link
              className={clsx(
                'block border-t border-alpha-dark-800 p-6 duration-150 hover:bg-alpha-dark-800/80 hover:text-white'
                // isActive(item.link) && 'text-white'
              )}
              href={item.link}
              onClick={props.toggleMenu}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNav;
