import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeLeft, fadeRight } from '../../utils/animations';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutPreview({ onNavigate }) {
  const highlights = [
    'Integrated Lifecycle Solar Asset Management',
    'Certified Engineering & Turnkey EPC Execution',
    'Comprehensive C&I CAPEX & OPEX Solutions',
    'Proprietary Telemetry & Predictive Analytics',
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
                alt="Volga Solar Engineers Inspecting Commercial Installation"
                className="w-full h-[480px] sm:h-[520px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Content & Story (6 cols) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-[1.15]">
              Powering Reliable{' '}
              <span className="text-primary">Clean Energy</span>
            </h2>

            <p className="text-base sm:text-lg text-body leading-relaxed">
              Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets.
            </p>

            <p className="text-sm sm:text-base text-body leading-relaxed">
              Our team combines expertise in solar asset management, project management, operations, engineering, and performance analytics. We bridge technical precision with commercial rigor, enabling asset owners to unlock peak kilowatt-hour generation and protect project profitability.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-heading leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate('about')}
              >
                About Volga Solar Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
