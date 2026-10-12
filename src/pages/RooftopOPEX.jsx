import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { rooftopOpexData } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  TrendingDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Check,
  Building,
} from 'lucide-react';

export default function RooftopOPEX({ onNavigate }) {
  const benefitIcons = [DollarSign, TrendingDown, ShieldCheck, Clock];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title={rooftopOpexData.title}
        highlight="OPEX Model"
        description="Zero investment solar power solutions enabling businesses to adopt renewable energy with predictable electricity costs."
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
                <Building className="w-3.5 h-3.5" />
                <span>Zero Upfront Investment</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Zero Capital Solar Energy
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                {rooftopOpexData.subIntro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group relative">
                <img
                  src="/images/rooftop-opex.jpg"
                  alt="Commercial Rooftop Solar OPEX Installation"
                  className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Process"
            title="How It Works"
            highlight="How It Works"
            dark
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {rooftopOpexData.howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-primary">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full">
                      Step 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-lg font-bold text-white leading-snug">
                    {step}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Volga Handled</span>
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
            {rooftopOpexData.benefits.map((benefit, idx) => {
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
                    <span>OPEX Advantage</span>
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
