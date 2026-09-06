import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { assetManagementData } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
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
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export default function AssetManagement({ onNavigate }) {
  const technicalIcons = [Activity, Wrench, Users, BarChart3];
  const commercialIcons = [FileCheck2, Receipt, Scale, ClipboardList];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Solar Asset Management"
        highlight="Asset Management"
        description="Volga Solar Solutions provides specialized solar asset management services designed to maximize energy generation and protect the long-term value of solar investments."
        onNavigate={onNavigate}
      />

      {/* Approach Summary Banner */}
      <section className="py-16 bg-white border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Our Asset Management Approach
            </h2>
            <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl mx-auto">
              Our asset management approach combines <span className="text-heading font-semibold">technical expertise</span>, <span className="text-heading font-semibold">operational oversight</span>, and <span className="text-heading font-semibold">performance analytics</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center gap-3 text-heading font-bold text-sm">
                <Cpu className="w-5 h-5 text-primary" />
                <span>Technical Expertise</span>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center gap-3 text-heading font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>Operational Oversight</span>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center gap-3 text-heading font-bold text-sm">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Performance Analytics</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Technical Asset Management */}
      <section className="py-24 bg-neutral-50 relative border-b border-border">
        <Container>
          <SectionHeading
            badge="Technical Oversight"
            title={assetManagementData.technical.title}
            highlight="Technical Asset"
            subtitle={assetManagementData.technical.intro}
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
                  className="p-7 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted block mb-2">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                      {item}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 2. Commercial Asset Management */}
      <section className="py-24 bg-white relative border-b border-border">
        <Container>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary mb-4">
              Commercial Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
              {assetManagementData.commercial.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-body leading-relaxed">
              {assetManagementData.commercial.intro}
            </p>
            <p className="mt-2 text-sm font-semibold text-heading">
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
                  className="p-7 rounded-2xl bg-neutral-50 border border-border shadow-subtle hover:shadow-elevated hover:border-secondary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted block mb-2">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-heading group-hover:text-secondary transition-colors leading-snug">
                      {item}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* 3. Performance Optimization */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-border p-8 sm:p-12 shadow-elevated text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary mx-auto flex items-center justify-center">
              <TrendingUp className="w-7 h-7" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
              {assetManagementData.optimization.title}
            </h2>

            <p className="text-base sm:text-xl text-body leading-relaxed max-w-2xl mx-auto font-medium">
              {assetManagementData.optimization.desc}
            </p>

            <div className="pt-4">
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

