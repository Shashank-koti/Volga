import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeLeft, fadeRight } from '../../utils/animations';
import {
  BatteryCharging,
  Layers,
  TrendingUp,
  Shield,
  Cpu,
  ArrowRight,
} from 'lucide-react';

export default function BESSFeature({ onNavigate }) {
  const applications = [
    {
      title: 'Renewable energy integration',
      icon: Layers,
    },
    {
      title: 'Peak load management',
      icon: TrendingUp,
    },
    {
      title: 'Backup power solutions',
      icon: Shield,
    },
    {
      title: 'Grid stabilization',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 text-heading relative overflow-hidden border-b border-border">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image (6 cols) */}
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
                alt="Battery Energy Storage Systems"
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
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary">
              Energy Storage
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
              Battery Energy Storage Systems
            </h2>

            <p className="text-base sm:text-lg text-body leading-relaxed font-medium">
              Battery Energy Storage Systems play a critical role in enabling the integration of renewable energy into modern power systems.
            </p>

            <p className="text-sm sm:text-base text-body leading-relaxed">
              Volga Solar Solutions provides solutions for the design, integration, and management of battery energy storage systems.
            </p>

            {/* Applications List */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                Applications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((app, idx) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-border shadow-subtle flex items-center gap-3"
                    >
                      <div className="p-2 rounded-lg bg-secondary/15 text-secondary shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-heading">
                        {app.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate('bess')}
              >
                Learn More About BESS
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

