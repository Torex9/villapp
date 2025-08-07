import { Select as HeadlessSelect } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import InputWrapper, { InputWrapperProps } from '../01-atoms/InputWrapper';

export interface SelectItem {
  text: string;
  value: string;
  disabled?: boolean;
}

export type SelectProps = InputWrapperProps & {
  name?: string;
  value?: string;
  options: Array<SelectItem>;
}

const Select = ({
  id,
  label,
  required = false,
  value,
  disabled = false,
  showOptionalText = true,
  icon,
  options,
  error
}: SelectProps) => {
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
      <ChevronDown
        className="absolute right-0 top-1/2 h-4 w-4 -translate-x-4 -translate-y-1/2 text-gray-400"
        strokeWidth={1}
      />
      <HeadlessSelect
        className={clsx(
          'w-full appearance-none truncate rounded-lg bg-transparent',
          'data-[disabled]:bg-gray-200',
          'focus:outline-none',
          icon ? 'py-4 pl-14 pr-12' : 'px-4 py-4 pr-12'
        )}
        id={id}
        name={id}
        required={required}
        defaultValue={value}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.text}
          </option>
        ))}
      </HeadlessSelect>
    </InputWrapper>
  );
};

export default Select;
