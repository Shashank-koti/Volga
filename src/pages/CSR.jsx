import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import { Leaf, Sun, Users, GraduationCap } from 'lucide-react';

export default function CSR({ onNavigate }) {
  const focusAreas = [
    {
      title: 'Environmental sustainability',
      icon: Leaf,
      image: '/images/solar-water-ecology.jpg'
    },
    {
      title: 'Renewable energy awareness',
      icon: Sun,
      image: '/images/about-preview.jpg'
    },
    {
      title: 'Community development initiatives',
      icon: Users,
      image: '/images/csr-community.jpg'
    },
    {
      title: 'Educational support programs',
      icon: GraduationCap,
      image: '/images/women-solar-engineers.jpg'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Corporate Social Responsibility"
        highlight="Social Responsibility"
        description="At Volga Solar Solutions, sustainability extends beyond renewable energy generation. We believe in contributing positively to society and supporting community development initiatives."
        image="/images/csr-community.jpg"
        onNavigate={onNavigate}
      />

      {/* Introductory Narrative */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-light text-secondary-dark text-xs font-semibold uppercase tracking-wider">
                Sustainability & Society
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                Corporate Social Responsibility
              </h2>

              <p className="text-lg text-body leading-relaxed">
                At Volga Solar Solutions, sustainability extends beyond renewable energy generation. We believe in contributing positively to society and supporting community development initiatives.
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
                  src="/images/csr-community.jpg"
                  alt="Community Development"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4 Focus Areas */}
      <section className="py-20 lg:py-24 bg-background relative border-t border-border">
        <Container>
          <SectionHeading
            badge="Focus Areas"
            title="Our CSR Focus Areas"
            highlight="Focus Areas"
            subtitle="Our CSR focus areas include:"
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
                  className="rounded-2xl bg-surface border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-secondary-dark flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-muted uppercase tracking-wider block mb-1">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
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
