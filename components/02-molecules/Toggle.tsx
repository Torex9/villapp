'use client';

import Label from '../01-atoms/Label';
import { Field, Switch } from '@headlessui/react';
import clsx from 'clsx';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

export interface ToggleProps {
  toggled?: boolean;
  disabled?: boolean;
  id: string;
  label?: string;
  required?: boolean;
}

export default function Toggle({ toggled = false, disabled, label, id, required = false }: ToggleProps) {
  const [isEnabled, setIsEnabled] = useState(toggled);
  const onSwitchEnabledChanged = (checked: boolean) => {
    setIsEnabled(checked);
  };

  return (
    <Field className="flex items-center gap-3">
      <Switch
        checked={isEnabled}
        onChange={onSwitchEnabledChanged}
        className={clsx(
          isEnabled ? 'bg-success-dark' : disabled ? 'bg-gray-700' : 'bg-error-dark',
          'focus:ring-comBravo relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-alpha focus:ring-offset-1'
        )}
        disabled={disabled}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={clsx(
            isEnabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-150 ease-in-out'
          )}
        >
          <span
            className={clsx(
              isEnabled || disabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-150 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <X className="h-2.5 w-2.5 stroke-[4px] text-error-dark" />
          </span>
          <span
            className={clsx(
              isEnabled && !disabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
              disabled && 'opacity-0'
            )}
            aria-hidden="true"
          >
            <Check className="h-2.5 w-2.5 stroke-[4px] text-success-dark" />
          </span>
        </span>
      </Switch>
      {label && <Label id={id} showOptionalText={false} label={label} required={required} />}
    </Field>
  );
}
