import ErrorMessage from "../01-atoms/ErrorMessage";
import Label from "../01-atoms/Label";
import { IconType } from "@/types/Icon";
import { Field } from "@headlessui/react";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export interface InputWrapperProps {
  id: string;
  label?: string;
  required?: boolean;
  showOptionalText: boolean;
  icon?: IconType | undefined | null;
  disabled?: boolean;
  error?: string | Error;
}

const InputWrapper = ({
  id,
  label,
  required = true,
  showOptionalText,
  icon,
  disabled,
  error,
  children,
}: PropsWithChildren<InputWrapperProps>) => {
  const InputIcon = icon ?? null;
  const isDisabled = disabled ?? false;

  const isInvalid = React.useMemo(() => {
    if (!error) return false;
    return true;
  }, [error]);

  const errorMessage = React.useMemo(() => {
    if (!error) return undefined;
    if (error instanceof Error) return error.message;
    return error;
  }, [error]);

  return (
    <Field className="flex w-full flex-col gap-2" disabled={isDisabled}>
      {label && (
        <Label
          id={id}
          showOptionalText={showOptionalText}
          label={label}
          required={required}
        />
      )}
      <div
        className={clsx(
          "group relative w-full rounded-lg border border-gray-300 bg-white duration-150",
          "focus-within:ring-1 focus-within:ring-alpha",
          isInvalid && "ring-1 ring-error-dark"
        )}
      >
        {icon && (
          <div className="pointer-events-none absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 translate-x-4">
            {InputIcon !== null && (
              <InputIcon className="text-gray-400 duration-150 group-focus-within:text-alpha" />
            )}
          </div>
        )}
        {children}
      </div>
      {isInvalid && errorMessage && <ErrorMessage error={errorMessage} />}
    </Field>
  );
};

export default InputWrapper;
