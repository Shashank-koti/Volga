import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { bessApplications } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  BatteryCharging,
  Layers,
  TrendingUp,
  Shield,
  Cpu,
  ArrowRight,
  Zap,
  Activity,
  CheckCircle,
  Sliders,
  CheckCircle2,
  Boxes,
} from 'lucide-react';

const iconMap = {
  Layers,
  TrendingUp,
  Shield,
  Cpu,
};

export default function BESS({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('integration');

  const capabilities = [
    {
      title: 'System Design & Engineering',
      desc: 'Sizing optimization, thermal simulations, arc flash hazard mitigation, and IEEE 1547 grid compliance modeling.',
      icon: Cpu,
    },
    {
      title: 'Battery System Integration',
      desc: 'Turnkey containerized integration of Tier-1 LFP cell racks, liquid-cooling manifolds, and bi-directional PCS inverters.',
      icon: Boxes,
    },
    {
      title: 'Monitoring & Control Systems',
      desc: 'Intelligent Energy Management Systems (EMS) with millisecond response times, automated peak detection, and cloud telemetry.',
      icon: Activity,
    },
    {
      title: 'Operations & Maintenance',
      desc: 'Cell-level impedance testing, state of health (SOH) prognostics, thermal loop maintenance, and scheduled battery augmentation.',
      icon: Sliders,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Battery Energy Storage Systems"
        highlight="Battery Energy Storage"
        description="Battery Energy Storage Systems play a critical role in enabling the integration of renewable energy into modern power systems. Volga Solar Solutions provides solutions for the design, integration, and management of battery energy storage systems."
        image="/images/bess-storage.jpg"
        onNavigate={onNavigate}
      />

      {/* Applications Section */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden border-b border-border">
        <Container className="relative z-10">
          <SectionHeading
            badge="Storage Applications"
            title="Enabling Next-Generation Grid Resilience"
            highlight="Grid Resilience"
            subtitle="Tailored storage architectures engineered for commercial microgrids, high-energy industrial facilities, and utility-scale solar parks."
            align="center"
            dark={false}
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bessApplications.map((app, idx) => {
              const Icon = iconMap[app.icon] || Layers;
              return (
                <motion.div
                  key={app.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:border-secondary/40 hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-secondary transition-colors">
                      {app.title}
                    </h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Industrial Grade</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Interactive Architecture & System Overview */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Interactive Diagram / Telemetry */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-border shadow-elevated relative">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-heading">
                      BESS Containerized Energy Architecture
                    </span>
                  </div>
                  <span className="text-xs text-secondary font-mono font-bold">EMS v4.2</span>
                </div>

                {/* Subsystem Flow Blocks */}
                <div className="py-6 space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-border shadow-subtle flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="font-bold text-heading">Solar PV Generation Input</span>
                    </div>
                    <span className="font-mono text-emerald-600 font-semibold">Up to 1500V DC</span>
                  </div>

                  <div className="flex justify-center text-neutral-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  <div className="p-4 rounded-xl bg-secondary-light border border-secondary/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <BatteryCharging className="w-4 h-4 text-secondary" />
                      <span className="font-bold text-heading">LFP Battery Racks & Liquid Cooling</span>
                    </div>
                    <span className="font-mono text-secondary font-bold">UL 9540A Verified</span>
                  </div>

                  <div className="flex justify-center text-neutral-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-border shadow-subtle flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="font-bold text-heading">Bi-Directional PCS & Grid Interconnection</span>
                    </div>
                    <span className="font-mono text-heading font-semibold">415V / 11kV / 33kV</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                  <span>Cycle Life: 6,000+ Cycles (90% DOD)</span>
                  <span className="text-emerald-600 font-semibold">Round-Trip Efficiency: &gt; 88%</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Capabilities */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
                Complete Lifecycle BESS Engineering
              </h2>

              <p className="text-base text-body leading-relaxed">
                From pre-project financial modeling to battery degradation mitigation, Volga delivers end-to-end integration for utility and industrial storage systems.
              </p>

              <div className="space-y-4 pt-2">
                {capabilities.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="p-4 rounded-xl bg-neutral-50 border border-border shadow-subtle hover:border-secondary/30 transition-colors flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-lg bg-secondary/15 text-secondary shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-heading">
                          {cap.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-body mt-1 leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

    </div>
  );
}
