import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function AnimatedSection({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
  as = 'section',
  viewportMargin = '-60px',
  ...props
}) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
