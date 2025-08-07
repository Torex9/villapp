'use client';

import ErrorMessage from '../01-atoms/ErrorMessage';
import { InputWrapperProps } from '../01-atoms/InputWrapper';
import Label from '../01-atoms/Label';
import { Field, Checkbox as HeadlessCheckbox } from '@headlessui/react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import React from 'react';

export type CheckboxProps = InputWrapperProps & {
  checked?: boolean;
  onChange: () => unknown;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const defaultChecked = props.checked ?? false;

  const isInvalid = React.useMemo(() => {
    if (!props.error) return false;
    return true;
  }, [props.error]);

  const errorMessage = React.useMemo(() => {
    if (!props.error) return undefined;
    if (props.error instanceof Error) return props.error.message;
    return props.error;
  }, [props.error]);

  return (
    <Field className="flex flex-col gap-2" disabled={props.disabled}>
      <div className="flex items-center gap-2">
        <HeadlessCheckbox
          id={props.id}
          checked={defaultChecked}
          onChange={props.onChange}
          disabled={props.disabled}
          className={clsx(
            'group relative block h-6 w-6 rounded border border-gray-300 bg-white outline-none duration-150',
            'data-[focus]:ring-1 data-[focus]:ring-alpha',
            'data-[checked]:bg-alpha',
            'data-[disabled]:cursor-not-allowed data-[checked]:data-[disabled]:bg-gray-200 data-[disabled]:bg-gray-200',
            isInvalid && 'ring-1 ring-error-dark'
          )}
        >
          <Check
            className={clsx(
              'absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 stroke-white opacity-0 duration-150',
              'group-data-[checked]:group-data-[disabled]:stroke-gray-400 group-data-[checked]:opacity-100'
            )}
          />
        </HeadlessCheckbox>

        {props.label && <Label id={props.id} showOptionalText={false} label={props.label} required={props.required} />}
      </div>
      {isInvalid && errorMessage && <ErrorMessage error={errorMessage} />}
    </Field>
  );
};

export default Checkbox;
