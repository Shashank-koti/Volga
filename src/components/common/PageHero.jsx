import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { fadeUp } from '../../utils/animations';
import defaultHeroImage from '/images/page-hero-backdrop.jpg';

export default function PageHero({
  title,
  highlight,
  description,
  image,
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
    <div className="relative pt-32 pb-16 md:pt-36 md:pb-16 bg-neutral-50 overflow-hidden text-heading border-b border-border">
      {/* Background image with clean subtle opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={image || defaultHeroImage}
          alt="Solar Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-neutral-50" />
      </div>

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
