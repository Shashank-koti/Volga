import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { assetManagementData } from '../data/services';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  Activity,
  Wrench,
  Users,
  BarChart3,
  FileCheck2,
  Receipt,
  Scale,
  ClipboardList,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export default function AssetManagement({ onNavigate }) {
  const technicalIcons = [Activity, Wrench, Users, BarChart3];
  const commercialIcons = [FileCheck2, Receipt, Scale, ClipboardList];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title={assetManagementData.title}
        highlight="Asset Management"
        description="Comprehensive management of solar assets, including performance monitoring, operational oversight, and reporting."
        onNavigate={onNavigate}
      />

      {/* Approach Summary Banner (Exact Approved Copy) */}
      <section className="py-20 bg-[#070A0F] border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Our Asset Management Approach
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              Our asset management approach combines <span className="text-white font-semibold">technical expertise</span>, <span className="text-white font-semibold">operational oversight</span>, and <span className="text-white font-semibold">performance analytics</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-3 text-white font-bold text-sm shadow-xl hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <span>Technical Expertise</span>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-3 text-white font-bold text-sm shadow-xl hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span>Operational Oversight</span>
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-3 text-white font-bold text-sm shadow-xl hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span>Performance Analytics</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Technical Asset Management (Exact Approved Copy) */}
      <section className="py-24 bg-[#0B0F17] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Technical Oversight"
            title={assetManagementData.technical.title}
            highlight="Technical Asset"
            subtitle={assetManagementData.technical.intro}
            dark
            align="left"
            className="mb-14 max-w-2xl"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {assetManagementData.technical.items.map((item, idx) => {
              const Icon = technicalIcons[idx] || Activity;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {item}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-mono font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Technical Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 2. Commercial Asset Management (Exact Approved Copy) */}
      <section className="py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary mb-4 font-mono">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Commercial Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {assetManagementData.commercial.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-300 leading-relaxed">
              {assetManagementData.commercial.intro}
            </p>
            <p className="mt-2 text-sm font-semibold text-primary font-mono">
              {assetManagementData.commercial.servicesIntro}
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {assetManagementData.commercial.items.map((item, idx) => {
              const Icon = commercialIcons[idx] || FileCheck2;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                      {item}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-1.5 text-xs font-mono font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Commercial Standard</span>
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
