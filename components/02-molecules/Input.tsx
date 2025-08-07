import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';
import React, { HTMLInputTypeAttribute } from 'react';
import InputWrapper, { InputWrapperProps } from '../01-atoms/InputWrapper';

export type InputProps = InputWrapperProps & {
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  value?: any; // used any as I'm not sure what it should be with the input type being dynamic
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  datalistId?: string;
  datalistOptions?: Array<String>;
  readonly?: boolean;
  autocomplete?: string;
}

const Input = ({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  disabled = false,
  showOptionalText = true,
  onChange,
  onBlur,
  icon,
  datalistId,
  datalistOptions,
  readonly = false,
  error,
  autocomplete
}: InputProps) => {
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
      <HeadlessInput
        className={clsx(
          'w-full overflow-hidden rounded-lg bg-transparent',
          'placeholder:text-gray-400',
          'data-[focus]:outline-none data-[focus]:placeholder:text-gray-500',
          'data-[disabled]:bg-gray-200',
          icon ? 'py-4 pl-14 pr-4' : 'p-4'
        )}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        list={datalistId}
        readOnly={readonly}
        autoComplete={autocomplete}
      />
      {datalistId && (
        <datalist id={datalistId}>
          {datalistOptions?.map((option, i) => (
            <option key={`${i} + ${option}`}>{option}</option>
          ))}
        </datalist>
      )}
    </InputWrapper>
  );
};

export default Input;
