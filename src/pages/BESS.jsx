import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { bessData } from '../data/services';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  BatteryCharging,
  Layers,
  TrendingUp,
  Shield,
  Cpu,
  ArrowRight,
  Boxes,
  Activity,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

export default function BESS({ onNavigate }) {
  const applicationIcons = [Layers, TrendingUp, Shield, Cpu];
  const capabilityIcons = [Cpu, Boxes, Activity, Sliders];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={bessData.title}
        highlight="Battery Energy Storage"
        description={`${bessData.intro} ${bessData.subIntro}`}
        image="/images/bess-storage.jpg"
        onNavigate={onNavigate}
      />

      {/* Applications Section */}
      <section className="py-24 bg-white relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Use Cases"
            title="Applications"
            highlight="Applications"
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {bessData.applications.map((app, idx) => {
              const Icon = applicationIcons[idx] || Layers;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-neutral-50 border border-border shadow-subtle hover:shadow-elevated hover:border-secondary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted block mb-2">
                      Application 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-heading group-hover:text-secondary transition-colors">
                      {app}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>BESS Application</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 bg-neutral-50 relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Core Expertise"
            title="Our Capabilities"
            highlight="Capabilities"
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {bessData.capabilities.map((cap, idx) => {
              const Icon = capabilityIcons[idx] || Cpu;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted block mb-2">
                      Capability 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                      {cap}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineering Focus</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white relative">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 shadow-elevated text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Battery Energy Storage Systems
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Volga Solar Solutions provides solutions for the design, integration, and management of battery energy storage systems.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate('contact')}
              >
                Contact Volga Solar Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

