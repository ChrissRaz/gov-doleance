import React from 'react';
import classNames from 'classnames';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  error,
  fullWidth = true,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <div className={classNames('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label className="text-sm font-medium text-text">
          {label}
        </label>
      )}
      <select
        className={classNames(
          'pl-4 pr-[21px] py-2 border rounded-lg outline-none transition-all duration-200',
          'focus:ring-2 focus:ring-primary/50 focus:border-primary',
          error ? 'border-red-500' : 'border-gray-300',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          'bg-white',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
