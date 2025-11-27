import React from 'react';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export default function Card({
  children,
  className,
  padding = 'md',
  hover = false,
}: CardProps) {
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
  };

  return (
    <div
      className={classNames(
        'bg-white rounded-xl shadow-sm border border-gray-100',
        paddings[padding],
        hover && 'transition-shadow duration-200 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}
