import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const renderTitle = () => {
    if (!highlight || !title) return title;
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span
              key={index}
              className="text-primary relative inline-block"
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`flex flex-col max-w-3xl ${alignments[align]} ${className}`}
    >

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white"
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300 font-normal"
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
