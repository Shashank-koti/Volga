import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Heart,
  Leaf,
  Sun,
  GraduationCap,
  Users,
  CheckCircle2,
  TreePine,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export default function CSR({ onNavigate }) {
  const focusAreas = [
    {
      title: 'Environmental Sustainability',
      desc: 'Protecting rural ecosystems surrounding our solar parks with water-neutral robotic cleaning, local tree afforestation, and topsoil conservation.',
      icon: Leaf,
      image: '/images/solar-water-ecology.jpg',
      stats: '15,000+ Saplings Planted',
    },
    {
      title: 'Renewable Energy Awareness',
      desc: 'Conducting community seminars and student workshops across rural districts to demystify clean power and highlight solar vocational opportunities.',
      icon: Sun,
      image: '/images/about-preview.jpg',
      stats: '45+ Community Workshops',
    },
    {
      title: 'Community Development Initiatives',
      desc: 'Supplying localized off-grid solar kits to village primary health centers, solar-powered clean drinking water filtration systems, and street lighting.',
      icon: Users,
      image: '/images/csr-community.jpg',
      stats: '30+ Solar Health Clinics',
    },
    {
      title: 'Educational Support Programs',
      desc: 'Sponsoring STEM clean-tech scholarships for underprivileged engineering students and providing digital solar lab equipment to regional schools.',
      icon: GraduationCap,
      image: '/images/women-solar-engineers.jpg',
      stats: '250+ Scholarships Granted',
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

      {/* Warm Introductory Narrative */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                Empowering Communities Alongside Clean Energy
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                At Volga Solar Solutions, sustainability extends beyond renewable energy generation. We believe in contributing positively to society and supporting community development initiatives that foster inclusive, resilient growth.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                Whenever Volga develops a solar park or installs an industrial rooftop, we engage closely with local panchayats, schools, and youth councils. We provide fair-wage local employment, fund vocational solar technician training, and invest in essential community infrastructure like solar-powered water filtration.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex-1 min-w-[140px]">
                  <div className="text-2xl font-bold text-heading">100%</div>
                  <div className="text-xs text-muted mt-0.5">Waterless Module Cleaning</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 flex-1 min-w-[140px]">
                  <div className="text-2xl font-bold text-emerald-600">65%</div>
                  <div className="text-xs text-muted mt-0.5">Local Workforce Infield</div>
                </div>
              </div>
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
                  alt="Volga CSR Community Solar Empowerment Project"
                  className="w-full h-[480px] sm:h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4 Focus Areas */}
      <section className="py-24 bg-neutral-50 relative border-y border-border">
        <Container>
          <SectionHeading
            badge="Pillars of Impact"
            title="Our CSR Focus Areas"
            highlight="Focus Areas"
            subtitle="Targeted initiatives designed to generate tangible, multi-generational benefits for local ecosystems and communities."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-surface border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-heading group-hover:text-emerald-700 transition-colors">
                          {area.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-body leading-relaxed">
                        {area.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Direct Ground-Level Governance</span>
                      </div>
                      <span className="font-bold text-emerald-600">{area.stats}</span>
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
