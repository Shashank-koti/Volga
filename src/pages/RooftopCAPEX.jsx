import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { rooftopCapexData, rooftopCallout } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Sun,
  Zap,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Compass,
  FileCheck,
  Cpu,
  Boxes,
  Check,
} from 'lucide-react';

export default function RooftopCAPEX({ onNavigate }) {
  const scopeIcons = [Compass, Cpu, Boxes, WrenchCheck, CheckCircle2];
  function WrenchCheck(props) {
    return <Sun {...props} />;
  }

  const benefitIcons = [TrendingDown, TrendingUp, ShieldCheck, Zap];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={rooftopCapexData.title}
        highlight="CAPEX Model"
        description={rooftopCapexData.intro}
        onNavigate={onNavigate}
      />

      {/* Model Overview Section */}
      <section className="py-20 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-light text-primary">
                Direct Ownership Model
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading leading-tight">
                Turnkey EPC Solutions
              </h2>
              <p className="text-base sm:text-lg text-body leading-relaxed">
                {rooftopCapexData.subIntro}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/rooftop-capex.jpg"
                  alt="Industrial Rooftop Solar CAPEX Installation"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our EPC Scope */}
      <section className="py-24 bg-neutral-50 relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Execution Framework"
            title="Our EPC Scope"
            highlight="EPC Scope"
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
                className="p-7 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light text-primary font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-muted block mb-1">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-heading leading-snug">
                    {item}
                  </h3>
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
            {rooftopCapexData.benefits.map((benefit, idx) => {
              const Icon = benefitIcons[idx] || Check;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-2xl bg-neutral-50 border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                      {benefit}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Check className="w-4 h-4" />
                    <span>CAPEX Benefit</span>
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
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-heading font-bold text-sm hover:bg-neutral-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Rooftop Solar OPEX</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </button>
              <span className="text-neutral-500 font-bold hidden sm:inline">||</span>
              <button
                onClick={() => onNavigate('rooftop-capex')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
              >
                <span>Rooftop Solar CAPEX</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

