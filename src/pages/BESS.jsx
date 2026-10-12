import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { bessData } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
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
  Zap,
  ShieldCheck,
} from 'lucide-react';

export default function BESS({ onNavigate }) {
  const applicationIcons = [Layers, TrendingUp, Shield, Cpu];
  const capabilityIcons = [Cpu, Boxes, Activity, Sliders];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title={bessData.title}
        highlight="Battery Energy Storage"
        description="Energy storage solutions supporting renewable integration and grid reliability."
        onNavigate={onNavigate}
      />

      {/* Subintro & Featured Image Section */}
      <section className="py-20 lg:py-24 bg-[#070A0F] relative border-b border-neutral-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content Column */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 font-mono">
                <BatteryCharging className="w-3.5 h-3.5" />
                <span>Advanced Storage Systems</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Battery Energy <span className="text-primary">Storage Systems</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-medium">
                {bessData.subIntro}
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                By integrating state-of-the-art battery technologies with renewable generation, we help industrial, commercial, and utility clients overcome intermittency, mitigate peak demand charges, and achieve uninterruptible grid resiliency.
              </p>

              {/* Feature Highlights Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Grid Resiliency</span>
                    <span className="text-xs text-neutral-400">Rapid response & backup power</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Asset Protection</span>
                    <span className="text-xs text-neutral-400">Intelligent thermal control</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => onNavigate('contact')}
                >
                  Consult Our Storage Engineers
                </Button>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <video
                  src="/videos/batteryPage.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Use Cases"
            title="Applications"
            highlight="Applications"
            dark
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
                  className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      Application 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {app}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-mono font-semibold text-primary">
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
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Core Expertise"
            title="Our Capabilities"
            highlight="Capabilities"
            dark
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
                  className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      Capability 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cap}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-mono font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineering Focus</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
