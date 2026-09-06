import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeLeft, fadeRight } from '../../utils/animations';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPreview({ onNavigate }) {
  const expertiseItems = [
    'Solar asset management',
    'Project management',
    'Operations',
    'Engineering',
    'Performance analytics',
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image (6 cols) */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
              <img
                src="/images/about-preview.jpg"
                alt="Volga Solar Solutions Team"
                className="w-full h-[460px] sm:h-[500px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Content (6 cols) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
              Volga Solar Solutions
            </h2>

            <p className="text-base sm:text-lg text-body leading-relaxed font-medium">
              Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets.
            </p>

            <p className="text-sm sm:text-base text-body leading-relaxed">
              Our team combines deep expertise in solar asset management, project management, operations, engineering, and performance analytics, enabling us to support asset owners and businesses in achieving reliable and efficient clean energy generation.
            </p>

            <p className="text-sm sm:text-base text-body leading-relaxed">
              We focus on delivering solutions that enhance plant performance, operational reliability, and long term asset value.
            </p>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {expertiseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 text-xs font-semibold text-heading"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate('about')}
              >
                About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

