import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { projectsPageData } from '../data/projects';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  Sun,
  Building2,
  Activity,
  Zap,
  ShieldCheck,
  Gauge,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const capabilityDetails = [
  {
    title: 'Utility scale solar power plants',
    icon: Sun,
    image: '/images/solar-farm-aerial.jpg',
    category: 'Utility Scale',
    highlights: 'Large-scale photovoltaic infrastructure designed for bulk clean energy transmission.',
  },
  {
    title: 'Commercial and industrial rooftop solar systems',
    icon: Building2,
    image: '/images/commercial-rooftop.jpg',
    category: 'Commercial & Industrial',
    highlights: 'Engineered rooftop installations delivering on-site clean energy for commercial enterprises.',
  },
  {
    title: 'Solar asset management services',
    icon: Activity,
    image: '/images/solar-engineer.jpg',
    category: 'Lifecycle Oversight',
    highlights: 'Continuous operational governance and technical oversight ensuring sustained asset performance.',
  },
];

const focusIcons = [
  Gauge,
  Zap,
  ShieldCheck,
];

export default function Projects({ onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title={projectsPageData.title}
        highlight="Projects"
        description={projectsPageData.intro}
        onNavigate={onNavigate}
      />
      {/* Featured Project Showcase (Cinematic Gallery) */}
      <section className="py-24 bg-[#0B0F17] text-white relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            badge="Project Capabilities"
            title="Portfolio Showcase"
            highlight="Showcase"
            subtitle={projectsPageData.capabilities.intro}
            dark
            align="center"
            className="mb-14"
          />

          {/* Interactive Project Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {capabilityDetails.map((cap, idx) => (
              <button
                key={cap.title}
                onClick={() => setSelectedProject(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${selectedProject === idx
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }`}
              >
                {cap.category}
              </button>
            ))}
          </div>

          {/* Active Project Cinematic Card */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image Frame with Technical Overlays (7 cols) */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] overflow-hidden group">
                <img
                  src={capabilityDetails[selectedProject].image}
                  alt={capabilityDetails[selectedProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {capabilityDetails[selectedProject].title}
                  </h3>
                </div>
              </div>

              {/* Narrative Content (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                    Segment Focus
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">
                    {capabilityDetails[selectedProject].category}
                  </h4>
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {capabilityDetails[selectedProject].highlights}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-800">
                  <span className="text-xs font-mono text-neutral-400 uppercase font-semibold block">
                    Execution Highlights
                  </span>
                  <div className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Rigorous engineering and safety standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Optimized generation and lifecycle support</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    onClick={() => onNavigate('contact')}
                  >
                    Discuss This Capability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Capabilities Grid (All 3 Items - Exact Approved Copy) */}
      <section className="py-20 lg:py-24 bg-[#070A0F] relative border-b border-neutral-800 text-white">
        <Container>
          <SectionHeading
            badge="Capabilities"
            title={projectsPageData.capabilities.title}
            highlight="Capabilities"
            subtitle={projectsPageData.capabilities.intro}
            dark
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
              const meta = capabilityDetails[idx % capabilityDetails.length];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col group"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={meta.image}
                      alt={item}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900/90 backdrop-blur-md text-primary border border-neutral-700 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                        Capability 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
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

      {/* Project Focus Section (Exact Approved Copy) */}
      <section className="py-20 lg:py-24 bg-[#0B0F17] text-white">
        <Container>
          <SectionHeading
            badge="Engineering Standards"
            title={projectsPageData.focus.title}
            highlight="Focus"
            subtitle={projectsPageData.focus.intro}
            dark
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
                  className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 text-center shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary mx-auto flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                    Priority 0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
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
