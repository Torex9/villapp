import clsx from 'clsx';
import { AlertTriangle, Check } from 'lucide-react';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  id: string;
  allowMultiple?: boolean;
  required?: boolean;
  valid?: boolean;
  fileName?: string;
  onFileDrop: (acceptedFile: File) => void;
  error?: boolean;
}

const Dropzone: React.FC<DropzoneProps> = ({ id, required, valid, allowMultiple, fileName, onFileDrop, error }) => {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => onFileDrop(file));
    },
    [id]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: allowMultiple ? undefined : 1 });

  return (
    <>
      <div
        className={clsx(
          'group flex items-center justify-center rounded border p-6 duration-150 hover:border-alpha hover:text-alpha',
          'border-dashed border-gray-300 text-gray-500',
          valid && 'border-success text-gray-800',
          error && 'border-error-dark text-error-dark'
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} id={id} className="hidden" required={required} />
        <div className="flex flex-col items-center justify-center gap-3">
          {valid ? (
            <p className="flex items-center gap-2 py-9 text-sm">
              <Check className="h-4 w-4 text-success" />
              <span>{fileName ?? 'No file(s) uploaded'}</span>
            </p>
          ) : error ? (
            <p className="flex items-center gap-2 py-9 text-sm text-error-dark">
              <AlertTriangle className="h-4 w-4 text-error-dark" />
              <span>An error has occurred</span>
            </p>
          ) 
          : (
            <p className="py-9 text-sm text-gray-400">Click or drop files here to upload</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropzone;
