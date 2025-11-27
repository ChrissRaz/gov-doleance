import React from 'react';
import classNames from 'classnames';

interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function PageTitle({
  children,
  subtitle,
  className,
}: PageTitleProps) {
  return (
    <div className={classNames('mb-6', className)}>
      <h1 className="text-2xl md:text-3xl font-bold text-text">{children}</h1>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
