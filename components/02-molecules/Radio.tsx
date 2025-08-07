import { Field, Radio as HeadlessRadio, RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import React from 'react';
import ErrorMessage from '../01-atoms/ErrorMessage';
import Label from '../01-atoms/Label';
import { InputWrapperProps } from '../01-atoms/InputWrapper';

export interface RadioOption {
  id: string;
  label: string;
}

export type RadioProps = InputWrapperProps & {
  onChange: (value: string) => void;
  options: RadioOption[];
  selectedId?: string;
};

const Radio: React.FC<RadioProps> = (props) => {
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
    <RadioGroup className="flex flex-col gap-2" disabled={props.disabled} value={props.selectedId} onChange={props.onChange}>
      {props.label && <Label id={props.id} showOptionalText={false} label={props.label} required={props.required} />}
      
      {props.options.map((option) => (
        <Field key={option.id} className="flex items-center gap-2">
          <HeadlessRadio
            id={option.id}
            value={option.id}
            className={clsx(
              'group relative block h-6 w-6 rounded-full border border-gray-300 bg-white outline-none duration-150',
              'data-[focus]:ring-1 data-[focus]:ring-alpha',
              'data-[checked]:bg-alpha',
              'data-[disabled]:cursor-not-allowed data-[checked]:data-[disabled]:bg-gray-200 data-[disabled]:bg-gray-200'
            )}
          >
            <Check
              className={clsx(
                'absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 stroke-white opacity-0 duration-150',
                'group-data-[checked]:group-data-[disabled]:stroke-gray-400 group-data-[checked]:opacity-100'
              )}
            />
          </HeadlessRadio>
          <Label id={option.id} showOptionalText={false} label={option.label} />
        </Field>
      ))}

      {isInvalid && errorMessage && <ErrorMessage error={errorMessage} />}

    </RadioGroup>
  );
};

export default Radio;
