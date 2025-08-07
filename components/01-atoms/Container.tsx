import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children, maxWidth = 'max-w-8xl' }) => {
  return <div className={`relative mx-auto w-full px-6 ${className} ${maxWidth}`}>{children}</div>;
};

export default Container;
