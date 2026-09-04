import React from 'react';

export default function Container({
  children,
  size = 'xl',
  className = '',
  clean = false,
  ...props
}) {
  const maxSizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const padding = clean ? '' : 'px-4 sm:px-6 lg:px-8';

  return (
    <div className={`mx-auto w-full ${maxSizes[size] || maxSizes.xl} ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
}
