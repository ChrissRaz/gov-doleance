import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  fullWidth = true,
  className,
  ...props
}: InputProps) {
  return (
    <div className={classNames('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}
      <input
        className={classNames(
          'px-4 py-2 border rounded-lg outline-none transition-all duration-200',
          'focus:ring-2 focus:ring-primary/50 focus:border-primary',
          error ? 'border-red-500' : 'border-gray-300',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
