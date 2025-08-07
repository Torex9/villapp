import Logo from '../01-atoms/Logo';
import AppNav from '../02-molecules/AppNav';
import UserMenu from '../02-molecules/UserMenu';
import Link from 'next/link';

export interface AppNavbarProps {
  user?: {
    initials?: string;
    name?: string;
  };
}

const AppNavbar: React.FC<AppNavbarProps> = (props) => {
  return (
    <div className="fixed flex h-screen w-full max-w-[20rem] flex-col gap-6 overflow-y-auto bg-alpha-dark-900 2xl:max-w-[24rem]">
      <Link href="/app" className="px-6 py-12">
        <Logo className="h-6" color="#fff" />
      </Link>
      <AppNav />
      <div className="mt-auto bg-alpha-dark-800/20">
        <UserMenu user={{ initials: props.user?.initials, name: props.user?.name }} />
      </div>
    </div>
  );
};

export default AppNavbar;
