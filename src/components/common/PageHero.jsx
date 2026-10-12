import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { fadeUp } from '../../utils/animations';

export default function PageHero({
  title,
  highlight,
  description,
  badge = 'Volga Solar Solutions',
  onNavigate,
}) {
  const renderTitle = () => {
    if (!highlight || !title) return title;
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff2b38] to-[#ff5b5b]">
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
    <div className="relative pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-[#070A0F] text-white border-b border-neutral-800 overflow-hidden">
      {/* Background Engineering Grids & Atmosphere */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              {renderTitle()}
            </h1>

            {description && (
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-3xl font-normal">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
