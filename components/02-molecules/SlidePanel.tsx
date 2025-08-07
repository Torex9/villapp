'use client';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import { Fragment, type PropsWithChildren } from 'react';

export interface SlideoutPanelProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  direction?: 'left' | 'right';
  panelColor?: string;
  buttonColor?: string;
  maxWidth?: string;
}

const SlideoutPanel: React.FC<PropsWithChildren<SlideoutPanelProps>> = (props) => {
  const direction = props.direction ?? 'right';
  const panelColor = props.panelColor ?? 'bg-white';
  const buttonColor = props.buttonColor ?? 'text-black';
  const maxWidth = props.maxWidth ?? 'max-w-[33rem]';

  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setOpen}>
        <TransitionChild
          as={Fragment}
          enter="transform transition ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform transition ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="bg-alpha-1000/80 fixed inset-0"
            onClick={() => props.setOpen(false)}
            onKeyUp={() => props.setOpen(false)}
          />
        </TransitionChild>
        <div className="absolute inset-0 overflow-hidden">
          <div className={clsx('fixed inset-y-0 right-0 flex w-full', direction === 'right' && 'justify-end')}>
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom={direction === 'left' ? '-translate-x-full' : 'translate-x-full'}
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo={direction === 'left' ? '-translate-x-full' : 'translate-x-full'}
            >
              <DialogPanel
                className={clsx(
                  'pointer-events-auto relative flex w-full flex-col items-end gap-16 overflow-y-auto shadow-xl',
                  panelColor,
                  maxWidth
                )}
              >
                <button type={'button'} className="p-4" onClick={() => props.setOpen(false)}>
                  <XIcon className={clsx('h-6 w-6', buttonColor)} />
                </button>
                {props.children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SlideoutPanel;
