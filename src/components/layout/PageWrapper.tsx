import React from 'react';
import classNames from 'classnames';

interface PageWrapperProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export default function PageWrapper({
  children,
  maxWidth = 'xl',
  className,
}: PageWrapperProps) {
  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className={classNames(
          'container mx-auto px-4 py-6 md:py-8',
          maxWidths[maxWidth],
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
