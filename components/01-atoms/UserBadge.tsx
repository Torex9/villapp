import clsx from 'clsx';

export interface UserBadgeProps {
  initials?: string;
  size?: 'small' | 'large';
}

const UserBadge: React.FC<UserBadgeProps> = (props) => {
  const size = props.size ?? 'large';

  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full bg-alpha-light-100',
        size === 'large' ? 'h-16 w-16 text-2xl' : 'h-9 w-9'
      )}
    >
      <span className="font-heading font-semibold leading-none">{props.initials ?? '?'}</span>
    </div>
  );
};

export default UserBadge;
