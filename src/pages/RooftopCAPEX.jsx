import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { rooftopCapexData } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Zap,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Check,
} from 'lucide-react';

export default function RooftopCAPEX({ onNavigate }) {
  const benefitIcons = [TrendingDown, TrendingUp, ShieldCheck, Zap];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title={rooftopCapexData.title}
        highlight="CAPEX Model"
        description="End to end EPC services for commercial and industrial rooftop solar installations."
        onNavigate={onNavigate}
      />

      {/* Model Overview Section */}
      <section className="py-20 lg:py-24 bg-[#070A0F] border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-5"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 font-mono">
                Direct Ownership Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Turnkey EPC Solutions
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                {rooftopCapexData.subIntro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
                <video
                  src="/videos/capexPage.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our EPC Scope */}
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Execution Framework"
            title="Our EPC Scope"
            highlight="EPC Scope"
            dark
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {rooftopCapexData.scope.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-primary/50 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 font-mono">
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Advantages"
            title="Benefits"
            highlight="Benefits"
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
            {rooftopCapexData.benefits.map((benefit, idx) => {
              const Icon = benefitIcons[idx] || Check;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {benefit}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-mono font-semibold text-primary">
                    <Check className="w-4 h-4" />
                    <span>CAPEX Benefit</span>
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
