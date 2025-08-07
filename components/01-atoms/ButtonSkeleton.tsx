import clsx from 'clsx';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export interface ButtonSkeletonProps {
  href?: string;
  onClick?: () => unknown;
  className?: string;
  disabled?: boolean;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

const ButtonSkeleton: React.FC<PropsWithChildren<ButtonSkeletonProps>> = (props) => {
  const size = props.size ?? 'medium';

  return (
    <LinkWrapper
      href={props.href}
      className={clsx(
        size === 'medium' && 'px-4 py-3',
        size === 'small' && 'px-3 py-2',
        size === 'large' && 'px-6 py-4 text-lg',
        props.className
      )}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.title}
    >
      {props.children}
    </LinkWrapper>
  );
};

export default ButtonSkeleton;

const LinkWrapper = (
  p: React.PropsWithChildren<{
    href?: string;
    className?: string;
    onClick?: () => unknown;
    disabled?: boolean;
    title?: string;
  }>
) => {
  if (p.href) {
    return <Link {...p} href={p.href} />;
  }
  return <button {...p} onClick={p.onClick} disabled={p.disabled ?? false} />;
};
