import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { fadeLeft, fadeRight } from '../../utils/animations';
import {
  BatteryCharging,
  Layers,
  TrendingUp,
  Shield,
  Cpu,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function BESSFeature({ onNavigate }) {
  const badges = [
    {
      title: 'Renewable Integration',
      desc: 'Smooth intermittency & curtailment mitigation',
      icon: Layers,
    },
    {
      title: 'Peak Load Management',
      desc: 'Demand charge reduction via off-peak charging',
      icon: TrendingUp,
    },
    {
      title: 'Backup Power Solutions',
      desc: 'Sub-20ms switchover replacing diesel gensets',
      icon: Shield,
    },
    {
      title: 'Grid Stabilization',
      desc: 'Fast frequency response and synthetic inertia',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 text-heading relative overflow-hidden border-b border-border">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with containerized BESS visualization (6 cols) */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elevated">
              <img
                src="/images/bess-storage.jpg"
                alt="Volga Commercial Containerized Battery Energy Storage System"
                className="w-full h-[480px] sm:h-[520px] object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Content & Application Badges (6 cols) */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-[1.15]">
              Power Beyond Generation:{' '}
              <span className="text-secondary">Battery Energy Storage Systems</span>
            </h2>

            <p className="text-base sm:text-lg text-body leading-relaxed">
              Modern power grids require dispatchable flexibility. Volga Solar Solutions engineers turnkey utility and industrial BESS to bridge the gap between generation variability and uninterrupted demand.
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-border shadow-subtle hover:border-secondary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-secondary/15 text-secondary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-heading tracking-wide">
                        {badge.title}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-body leading-snug pl-8">
                      {badge.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                variant="secondary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate('bess')}
              >
                Explore BESS Engineering
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
