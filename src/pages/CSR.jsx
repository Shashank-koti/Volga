import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import { Leaf, Sun, Users, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export default function CSR({ onNavigate }) {
  const focusAreas = [
    {
      title: 'Environmental sustainability',
      icon: Leaf,
      image: '/images/solar-water-ecology.jpg',
    },
    {
      title: 'Renewable energy awareness',
      icon: Sun,
      image: '/images/about-preview.jpg',
    },
    {
      title: 'Community development initiatives',
      icon: Users,
      image: '/images/csr-community.jpg',
    },
    {
      title: 'Educational support programs',
      icon: GraduationCap,
      image: '/images/women-solar-engineers.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title="Corporate Social Responsibility"
        highlight="Social Responsibility"
        description="At Volga Solar Solutions, sustainability extends beyond renewable energy generation."
        onNavigate={onNavigate}
      />

      {/* Introductory Narrative (Exact Approved Copy) */}
      <section className="py-20 lg:py-24 bg-[#070A0F] relative border-b border-neutral-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider font-mono border border-primary/30">
                <Heart className="w-3.5 h-3.5" />
                <span>Sustainability & Society</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Corporate Social Responsibility
              </h2>

              <p className="text-lg text-neutral-300 leading-relaxed font-normal">
                We believe in contributing positively to society and supporting community development initiatives.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Community Empowerment
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Sustainable Impact
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <img
                  src="/images/csr-community.jpg"
                  alt="Community Development"
                  className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4 Focus Areas (Exact Approved Copy) */}
      <section className="py-20 lg:py-24 bg-[#0B0F17] relative border-t border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Focus Areas"
            title="Our CSR Focus Areas"
            highlight="Focus Areas"
            subtitle="Our CSR focus areas include:"
            dark
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900/90 backdrop-blur-md text-primary border border-neutral-700 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {area.title}
                      </h3>
                    </div>
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
