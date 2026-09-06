import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { rooftopOpexData, rooftopCallout } from '../data/services';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  Zap,
  ArrowRight,
  TrendingDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Sun,
  Check,
} from 'lucide-react';

export default function RooftopOPEX({ onNavigate }) {
  const benefitIcons = [DollarSign, TrendingDown, ShieldCheck, Clock];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={rooftopOpexData.title}
        highlight="OPEX Model"
        description={rooftopOpexData.intro}
        onNavigate={onNavigate}
      />

      {/* Model Overview Section */}
      <section className="py-20 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary">
                Zero Upfront Investment
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
                Zero Capital Solar Energy
              </h2>
              <p className="text-base sm:text-lg text-body leading-relaxed">
                {rooftopOpexData.subIntro}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/rooftop-opex.jpg"
                  alt="Commercial Rooftop Solar OPEX Installation"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="py-24 bg-neutral-50 relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Process"
            title="How It Works"
            highlight="How It Works"
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
                className="p-8 rounded-3xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-secondary">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted bg-neutral-100 px-3 py-1 rounded-full">
                      Step 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-lg font-bold text-heading leading-snug">
                    {step}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-secondary">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Volga Handled</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Advantages"
            title="Benefits"
            highlight="Benefits"
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
                  className="p-7 rounded-2xl bg-neutral-50 border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-secondary transition-colors">
                      {benefit}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <Check className="w-4 h-4" />
                    <span>OPEX Advantage</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Rooftop Solar Solutions Callout Banner */}
      <section className="py-20 bg-neutral-50 relative">
        <Container>
          <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-elevated">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {rooftopCallout.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {rooftopCallout.tagline}
            </h2>
            <div className="text-xl font-bold text-secondary">
              {rooftopCallout.action}
            </div>
            <p className="text-sm sm:text-base text-neutral-300">
              {rooftopCallout.instructions}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('rooftop-opex')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                <span>Rooftop Solar OPEX</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <span className="text-neutral-500 font-bold hidden sm:inline">||</span>
              <button
                onClick={() => onNavigate('rooftop-capex')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-heading font-bold text-sm hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Rooftop Solar CAPEX</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

