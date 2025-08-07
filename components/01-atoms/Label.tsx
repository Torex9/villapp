import { Label as HeadlessLabel } from '@headlessui/react';

export interface LabelProps {
  id: string;
  label?: string;
  required?: boolean;
  showOptionalText: boolean;
}

const Label = ({ id, label, required = true, showOptionalText }: LabelProps) => {
  return (
    <HeadlessLabel className="flex justify-between gap-6 text-gray-600" htmlFor={id}>
      {label} {!required && showOptionalText && <small>(optional)</small>}
    </HeadlessLabel>
  );
};

export default Label;
