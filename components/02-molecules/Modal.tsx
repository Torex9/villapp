'use client';

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import { Fragment } from 'react';
import type { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  contentClassName?: string;
  modalClassName?: string;
}

export function Modal(props: ModalProps) {
  const contentClassName = props.contentClassName ?? 'p-6';

  return (
    <Transition appear as={Fragment} show={props.open}>
      <Dialog as="div" open={props.open} onClose={props.setOpen} className="relative z-50">
        <TransitionChild
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <div className="fixed inset-0 bg-alpha-dark-800/60" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 flex w-screen flex-col items-stretch justify-center sm:items-center">
          <TransitionChild
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <DialogPanel
              className={clsx(
                'mx-2 w-full max-w-screen-md overflow-y-auto rounded-lg bg-white shadow sm:mx-auto',
                props.modalClassName
              )}
            >
              <DialogTitle className="relative flex w-full items-center justify-between gap-6 rounded-lg bg-white p-6 text-left">
                <span className="font-bravo text-lg font-semibold lg:w-full lg:text-2xl">{props.title}</span>
                <button
                  type="button"
                  title="Close"
                  onClick={() => props.setOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <XIcon />
                </button>
              </DialogTitle>
              <div className={clsx('flex flex-grow flex-col', contentClassName)}>{props.children}</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
