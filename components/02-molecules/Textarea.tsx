import InputWrapper, { InputWrapperProps } from '../01-atoms/InputWrapper';
import { Textarea as HeadlessTextarea } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

export type TextareaProps = InputWrapperProps & {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  rows?: number;
};

const TextareaGroup = ({
  id,
  label,
  placeholder,
  required = false,
  value,
  disabled = false,
  showOptionalText = true,
  icon,
  error,
  rows = 5
}: TextareaProps) => {
  return (
    <InputWrapper
      icon={icon}
      id={id}
      required={required}
      showOptionalText={showOptionalText}
      label={label}
      disabled={disabled}
      error={error}
    >
      <HeadlessTextarea
        className={clsx(
          'flex w-full flex-col rounded-lg bg-transparent',
          'placeholder:text-gray-400',
          'data-[disabled]:bg-gray-200',
          'data-[focus]:outline-none data-[focus]:placeholder:text-gray-500',
          icon ? 'py-4 pl-14 pr-4' : 'p-4'
        )}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        defaultValue={value}
        disabled={disabled}
        rows={rows}
      />
    </InputWrapper>
  );
};

export default TextareaGroup;
