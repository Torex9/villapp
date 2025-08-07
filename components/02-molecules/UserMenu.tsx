'use client';

import UserBadge from '../01-atoms/UserBadge';
import UserNav from './UserNav';
import { Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { Fragment, useState } from 'react';

interface UserMenuProps {
  user?: {
    initials?: string;
    name?: string;
  };
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="group flex items-center justify-between gap-6 bg-alpha-dark-800/20 p-6 hover:bg-alpha-dark-800/60"
        onClick={() => toggleMenu()}
      >
        <div className="flex items-center gap-3">
          <UserBadge initials={props.user?.initials} />
          <div className="flex flex-col items-start">
            <p className="font-bravo font-semibold text-alpha-light-100">{props.user?.name}</p>
          </div>
        </div>
        <ChevronDown
          className={clsx(
            'h-6 w-6 text-alpha-light-200 duration-150 group-hover:text-white',
            !menuOpen && '-rotate-180'
          )}
        />
      </button>
      <Transition show={menuOpen} as={Fragment}>
        <TransitionChild
          as={Fragment}
          enter="transform transition ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform transition ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="contents">
            <UserNav toggleMenu={toggleMenu} />
          </div>
        </TransitionChild>
      </Transition>
    </div>
  );
};

export default UserMenu;
