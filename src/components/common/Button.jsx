import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  href,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group tracking-tight';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-dark font-bold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 focus:ring-secondary',
    accent: 'bg-accent hover:bg-accent-dark text-heading font-bold shadow-md shadow-accent/20 hover:shadow-accent/35 focus:ring-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    'outline-white': 'border-2 border-white/80 text-white hover:bg-white hover:text-dark focus:ring-white',
    white: 'bg-white hover:bg-neutral-50 text-heading shadow-md hover:shadow-lg focus:ring-neutral-200 border border-neutral-100',
    dark: 'bg-dark hover:bg-dark-900 text-white shadow-lg focus:ring-dark border border-white/10',
    text: 'bg-transparent text-primary hover:text-primary-dark p-0 hover:underline',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
    xl: 'text-lg px-8 py-4 gap-3',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-4 h-4 transition-transform group-hover:-translate-x-0.5 ${size === 'lg' ? 'w-5 h-5' : ''}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${size === 'lg' ? 'w-5 h-5' : ''}`} />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
