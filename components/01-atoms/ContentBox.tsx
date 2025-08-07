import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export interface ContentBoxProps {
  className?: string;
  padding?: string;
  borderRadius?: string;
}

const ContentBox = ({ className, padding, borderRadius, children }: PropsWithChildren<ContentBoxProps>) => {
  return (
    <section
      className={clsx(
        'overflow-hidden bg-white',
        padding ? padding : 'p-6',
        borderRadius ? borderRadius : 'rounded-lg',
        className
      )}
    >
      {children}
    </section>
  );
};

export default ContentBox;
