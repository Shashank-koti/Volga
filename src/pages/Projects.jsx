import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { projectsPageData } from '../data/projects';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import { Sun, Building2, Activity, Zap, ShieldCheck, Gauge, ArrowRight } from 'lucide-react';

const capabilityMeta = [
  {
    icon: Sun,
    image: '/images/solar-farm-aerial.jpg'
  },
  {
    icon: Building2,
    image: '/images/commercial-rooftop.jpg'
  },
  {
    icon: Activity,
    image: '/images/solar-engineer.jpg'
  }
];

const focusIcons = [
  Gauge,
  Zap,
  ShieldCheck
];

export default function Projects({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title={projectsPageData.title}
        highlight="Projects"
        description={projectsPageData.intro}
        onNavigate={onNavigate}
      />

      {/* Portfolio Statement */}
      <section className="py-16 bg-white border-b border-border">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl sm:text-2xl font-medium text-heading leading-relaxed">
              "{projectsPageData.subIntro}"
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Project Capabilities */}
      <section className="py-20 lg:py-24 bg-background relative">
        <Container>
          <SectionHeading
            badge="Experience"
            title={projectsPageData.capabilities.title}
            highlight="Capabilities"
            subtitle={projectsPageData.capabilities.intro}
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {projectsPageData.capabilities.items.map((item, idx) => {
              const meta = capabilityMeta[idx % capabilityMeta.length];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-surface border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={meta.image}
                      alt={item}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-primary flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">
                        Capability 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                        {item}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Project Focus */}
      <section className="py-20 lg:py-24 bg-white border-t border-border">
        <Container>
          <SectionHeading
            badge="Standards"
            title={projectsPageData.focus.title}
            highlight="Focus"
            subtitle={projectsPageData.focus.intro}
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {projectsPageData.focus.items.map((item, idx) => {
              const Icon = focusIcons[idx % focusIcons.length];
              return (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-neutral-50 border border-border text-center shadow-subtle hover:shadow-elevated transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary mx-auto flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-heading">
                    {item}
                  </h4>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-16 text-center">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate('contact')}
            >
              Discuss Your Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
