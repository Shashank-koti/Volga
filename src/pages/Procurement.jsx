import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { procurementData } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Sun,
  Zap,
  Layers,
  Cpu,
  BatteryCharging,
  Handshake,
  ArrowRight
} from 'lucide-react';

const categoryIcons = [
  Sun,
  Zap,
  Layers,
  Cpu,
  BatteryCharging
];

export default function Procurement({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Equipment Procurement"
        highlight="Procurement"
        description="A structured procurement approach focused on quality, reliability, and long-term performance."
        onNavigate={onNavigate}
      />

      {/* Procurement Philosophy */}
      <section className="py-20 lg:py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold uppercase tracking-wider">
                Our Approach
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                {procurementData.title}
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                {procurementData.intro}
              </p>

              <p className="text-base text-body leading-relaxed">
                {procurementData.subIntro}
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/solar-procurement.jpg"
                  alt="Solar Procurement"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 lg:py-24 bg-background relative border-y border-border">
        <Container>
          <SectionHeading
            badge="Categories"
            title="Equipment Categories"
            highlight="Equipment Categories"
            subtitle="We work with trusted manufacturers and suppliers across core renewable energy components."
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {procurementData.categories.map((cat, idx) => {
              const Icon = categoryIcons[idx % categoryIcons.length];
              return (
                <motion.div
                  key={cat}
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                      Category {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                      {cat}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Vendor Partnerships Section */}
      <section className="py-20 lg:py-24 bg-white relative">
        <Container>
          <div className="max-w-3xl mx-auto rounded-3xl bg-neutral-50 border border-border p-8 sm:p-12 shadow-subtle text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary mx-auto flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              {procurementData.vendorPartnerships.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
              {procurementData.vendorPartnerships.text}
            </p>

            <p className="mt-2 text-sm text-muted leading-relaxed">
              {procurementData.vendorPartnerships.ctaText}
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate('contact')}
              >
                Contact Procurement Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
