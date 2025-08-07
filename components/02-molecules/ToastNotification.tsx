import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ToastNotificationProps {
  message: string;
  duration?: number;
}

const ToastNotification = ({ message, duration }: ToastNotificationProps) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const showToastNotification = () => {
    setShow(true);
    if (duration) {
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 100 / (duration / 100);
        });
      }, 100);

      setTimeout(() => {
        setShow(false);
      }, duration);
    }
  };

  useEffect(() => {
    if (message) {
      showToastNotification();
    }
  }, [message]);

  return (
    <Transition
      show={show}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-x-full"
      enterTo="opacity-100 transform translate-x-0"
      leave="transition ease-in duration-500"
      leaveFrom="opacity-100 transform translate-x-0"
      leaveTo="opacity-0 transform translate-x-full"
    >
      <div className={clsx('flex flex-col gap-2 rounded-lg bg-white p-4 text-black shadow-xl')}>
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button className="rounded p-1.5 duration-150 hover:bg-gray-200" onClick={() => setShow(false)}>
            <X className="h-4 w-4 text-black" />
          </button>
        </div>
        {duration && (
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-alpha-light-300">
            <div
              className="absolute left-0 top-0 h-full w-full rounded-full bg-alpha-dark-700"
              style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }}
            />
          </div>
        )}
      </div>
    </Transition>
  );
};

export default ToastNotification;
