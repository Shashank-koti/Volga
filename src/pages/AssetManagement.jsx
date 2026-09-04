import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { assetManagementDetails } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Gauge,
  Wrench,
  Users,
  BarChart3,
  FileCheck2,
  Coins,
  Scale,
  ClipboardList,
  Activity,
  ArrowRight,
  TrendingUp,
  Sliders,
  CheckCircle,
  Database,
  Cpu,
} from 'lucide-react';

const iconMap = {
  Gauge,
  Wrench,
  Users,
  BarChart3,
  FileCheck2,
  Coins,
  Scale,
  ClipboardList,
};

export default function AssetManagement({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Solar Asset Management"
        highlight="Asset Management"
        description="Specialized technical, operational, and commercial solar asset management designed to maximize energy generation and protect the long-term capital value of solar investments."
        onNavigate={onNavigate}
      />

      {/* 1. Technical Asset Management */}
      <section className="py-24 bg-white relative">
        <Container>
          <SectionHeading
            badge="Engineering Stewardship"
            title="Technical Asset Management"
            highlight="Technical Asset"
            subtitle="Maximizing physical plant uptime and component health through proactive surveillance, rapid field dispatch, and multi-tier contractor governance."
            align="left"
            className="mb-16 max-w-2xl"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {assetManagementDetails.technical.map((item, idx) => {
              const Icon = iconMap[item.icon] || Gauge;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>IEC 62446 Aligned</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 2. Commercial Asset Management */}
      <section className="py-24 bg-neutral-50 relative border-y border-border">
        <Container>
          <SectionHeading
            badge="Financial & Contractual Governance"
            title="Commercial Asset Management"
            highlight="Commercial Asset"
            subtitle="Protecting shareholder return on capital with rigorous invoice reconciliation, statutory compliance, and bank-grade reporting."
            align="left"
            className="mb-16 max-w-2xl"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {assetManagementDetails.commercial.map((item, idx) => {
              const Icon = iconMap[item.icon] || FileCheck2;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary-dark flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-dark transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-secondary-dark transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Lender Grade Audit</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 3. Performance Optimization (Visual Data-Inspired Design) */}
      <section className="py-24 bg-neutral-50 text-heading relative overflow-hidden border-y border-border">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/25">
                <Cpu className="w-3.5 h-3.5" />
                <span>Algorithmic Yield Intelligence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-[1.15]">
                Performance Optimization
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Through detailed analysis of plant data, we identify opportunities to improve performance and minimize generation losses.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                By synthesizing continuous string-level currents, global tilted irradiance (GTI), ambient cell temperatures, and historical degradation curves, our engineering algorithms pinpoint clipping losses, bypass diode failures, and localized soiling clusters before they impact quarterly EBITDA.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {assetManagementDetails.optimizationPoints.map((pt, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-border shadow-subtle">
                    <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">
                      {pt.metric}
                    </div>
                    <div className="text-xs font-semibold text-heading mt-1">
                      {pt.label}
                    </div>
                    <div className="text-[11px] text-body mt-1 leading-snug">
                      {pt.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => onNavigate('contact')}
                >
                  Request Portfolio Audit
                </Button>
              </div>
            </motion.div>

            {/* Right: Sleek Data-Inspired Telemetry Visual Card */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/15 text-secondary">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-heading tracking-wide">
                        Volga Telemetry Sentinel
                      </div>
                      <div className="text-[11px] text-muted">
                        Fleet Performance Analytics
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold border border-emerald-200">
                    STATUS: OPTIMAL
                  </span>
                </div>

                {/* Simulated Generation Curve Bars */}
                <div className="py-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-body font-medium">Expected Generation Curve</span>
                      <span className="font-mono text-muted">100% Baseline</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-neutral-100 overflow-hidden">
                      <div className="h-full bg-neutral-400 rounded-full w-full" />
                    </div>
                  </div>

                  {/* Telemetry Matrix Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border text-xs">
                    <div className="p-3 rounded-lg bg-neutral-50 border border-border">
                      <span className="text-muted text-[11px] block">String Mismatch Loss</span>
                      <span className="text-sm font-bold text-emerald-600 font-mono">-0.12% (Negligible)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-50 border border-border">
                      <span className="text-muted text-[11px] block">Inverter Efficiency</span>
                      <span className="text-sm font-bold text-heading font-mono">98.9% Average</span>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-50 border border-border">
                      <span className="text-muted text-[11px] block">Soiling Loss Mitigation</span>
                      <span className="text-sm font-bold text-primary font-mono">+2.4% Recovery</span>
                    </div>
                    <div className="p-3 rounded-lg bg-neutral-50 border border-border">
                      <span className="text-muted text-[11px] block">Corrective Dispatch Mean</span>
                      <span className="text-sm font-bold text-heading font-mono">1.8 Hours SLA</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-muted">
                    Live telemetry stream synchronized across 1,800+ MW active solar portfolio
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

    </div>
  );
}
