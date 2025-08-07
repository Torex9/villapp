import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface CarouselNavigationButtonProps {
  direction: 'left' | 'right';
  disabled?: boolean;
  onClick: () => void;
}

export function CarouselNavigationButton(props: CarouselNavigationButtonProps) {
  return (
    <button
      disabled={props.disabled}
      className={clsx('flex items-center px-3 py-1.5 text-base uppercase duration-150', {
        'text-gray-400': props.disabled,
        'hover:text-gray-600': !props.disabled
      })}
      onClick={props.onClick}
    >
      {props.direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}
