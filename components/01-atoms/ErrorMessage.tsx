import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <p className="flex items-center gap-1.5">
      <AlertTriangle strokeWidth={1.5} className="h-6 w-6 shrink-0 text-error-dark" aria-hidden="true" />
      <span className="text-error-dark">{props.error}</span>
    </p>
  );
}