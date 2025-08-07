'use client';

import clsx from 'clsx';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';

interface Props {
  type: 'success' | 'info' | 'error';
  dismissible?: boolean;
  visible?: boolean;
  onClose?: () => void;
  shadow?: string;
  size?: 'small' | 'default';
}

export const Infobox: React.FC<PropsWithChildren<Props>> = ({
  type,
  children,
  dismissible = true,
  visible = true,
  size = 'default',
  onClose,
  shadow
}) => {
  const [isShowing, setShowing] = useState(visible);

  const handleClose = () => {
    onClose && onClose();
    setShowing(false);
  };

  useEffect(() => {
    setShowing(visible);
  }, [visible]);

  if (!isShowing) return null;

  const color = (type: string) => {
    if (type === 'success') return 'text-success-dark';
    if (type === 'error') return 'text-error-dark';
    if (type === 'info') return 'text-alpha-dark-600';
  };

  const colorBorder = (type: string) => {
    if (type === 'success') return 'ring-success-dark';
    if (type === 'error') return 'ring-error-dark';
    if (type === 'info') return 'ring-alpha-dark-600';
  };

  const colorBackground = (type: string) => {
    if (type === 'success') return 'bg-success-lightest';
    if (type === 'error') return 'bg-error-lightest';
    if (type === 'info') return 'bg-alpha-light-100/50';
  };

  const icon = (type: string) => {
    if (type === 'success')
      return <CheckCircle strokeWidth={1.5} className="h-6 w-6 shrink-0" aria-hidden="true" />;
    if (type === 'error')
      return <AlertTriangle strokeWidth={1.5} className="h-6 w-6 shrink-0" aria-hidden="true" />;
    if (type === 'info') return <Info strokeWidth={1.5} className="h-6 w-6 shrink-0" aria-hidden="true" />;
  };

  return (
    <div
      className={clsx(
        'relative flex justify-between overflow-hidden rounded-lg ring-1',
        size === 'default' && 'p-6',
        size === 'small' && 'p-4',
        shadow,
        colorBackground(type),
        colorBorder(type)
      )}
    >
      <div className={clsx('flex flex-col lg:flex-row lg:items-center', size === 'default' && 'gap-4', size === 'small' && 'gap-3', color(type))}>
        {icon(type)}
        <div>{children}</div>
      </div>
      {dismissible && (
        <div>
          <button className="absolute right-0 top-0 p-2" onClick={handleClose}>
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Infobox;
