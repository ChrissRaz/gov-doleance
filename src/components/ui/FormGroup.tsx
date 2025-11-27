import React from 'react';
import classNames from 'classnames';

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

export default function FormGroup({
  children,
  className,
  spacing = 'md',
}: FormGroupProps) {
  const spacings = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  return (
    <div className={classNames('flex flex-col', spacings[spacing], className)}>
      {children}
    </div>
  );
}
