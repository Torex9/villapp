// Not complete
import Dropzone from '../01-atoms/Dropzone';
import ErrorMessage from '../01-atoms/ErrorMessage';
import { InputWrapperProps } from '../01-atoms/InputWrapper';
import Label from '../01-atoms/Label';
import { Field } from '@headlessui/react';
import { Image } from 'lucide-react';
import React from 'react';

export type FileUploadProps = InputWrapperProps & {
  valid?: boolean;
  fileName?: string;
  allowMultiple?: boolean;
  onFileDrop: (acceptedFile: File) => void;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  required,
  valid,
  fileName,
  showOptionalText = required ? false : true,
  allowMultiple,
  error,
  onFileDrop
}) => {
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
    <Field className="flex flex-col gap-2">
      <Label id={id} showOptionalText={showOptionalText} label={label} required={required} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative aspect-video rounded-md border border-gray-300 bg-gray-100">
          {/* Should check to see if file already exists */}
          <Image className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 stroke-1 text-gray-400" />
        </div>
        <Dropzone
          id={id}
          required={required}
          valid={valid}
          allowMultiple={allowMultiple}
          fileName={fileName}
          onFileDrop={onFileDrop}
          error={error !== undefined}
        />
      </div>
      {isInvalid && errorMessage && <ErrorMessage error={errorMessage} />}
    </Field>
  );
};

export default FileUpload;
