import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { fadeUp } from '../../utils/animations';

export default function PageHero({
  title,
  highlight,
  description,
  onNavigate,
}) {
  const renderTitle = () => {
    if (!highlight || !title) return title;
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="text-primary">
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
    <div className="relative pt-32 pb-16 md:pt-36 md:pb-16 bg-neutral-50 text-heading border-b border-border">
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-heading">
              {renderTitle()}
            </h1>
            {description && (
              <p className="mt-5 text-base sm:text-lg text-body leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
