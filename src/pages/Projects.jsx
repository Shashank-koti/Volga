import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { projectsData, projectCategories } from '../data/projects';
import { fadeUp, staggerContainer } from '../utils/animations';
import { MapPin, ArrowRight, Sun, Activity, Zap, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';

export default function Projects({ onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Our Projects"
        highlight="Projects"
        description="Volga Solar Solutions has suppo  rted renewable energy projects across multiple segments including utility-scale solar plants, commercial rooftops, and multi-gigawatt asset management mandates."
        onNavigate={onNavigate}
      />

      {/* Filterable Portfolio Section */}
      <section className="py-24 bg-background relative">
        <Container>
          {/* Project Capabilities Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-subtle flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary-light text-primary shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-heading text-base">Utility-Scale Solar</h3>
                <p className="text-xs text-body mt-1 leading-relaxed">
                  Single-axis tracking, high-voltage substations, and dry-cleaning automation.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border shadow-subtle flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary-light text-secondary-dark shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-heading text-base">C&I Rooftop Solar</h3>
                <p className="text-xs text-body mt-1 leading-relaxed">
                  Non-penetrative industrial sheet & concrete roof installations with zero downtime.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border shadow-subtle flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neutral-100 text-heading shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-heading text-base">Asset Management</h3>
                <p className="text-xs text-body mt-1 leading-relaxed">
                  Pan-portfolio SCADA monitoring, yield recovery, and preventive maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
            {projectCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedFilter(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${selectedFilter === cat.key
                  ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                  : 'bg-surface text-body border border-border hover:bg-neutral-100'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl bg-surface border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-heading shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-primary text-white shadow-md">
                        {project.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-muted font-medium mb-2">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm text-body leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technical Highlights */}
                      <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                        {project.highlights.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-muted bg-neutral-100 px-2 py-0.5 rounded-md"
                          >
                            <CheckCircle2 className="w-3 h-3 text-secondary" />
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Performance Specs */}
                      <div className="mt-5 p-3 rounded-xl bg-neutral-50 border border-neutral-100 grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-muted block text-[10px]">Annual Generation</span>
                          <span className="font-bold text-heading">{project.annualGen}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-muted block text-[10px]">CO₂ Abated</span>
                          <span className="font-bold text-emerald-600">{project.co2Reduction}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-muted uppercase tracking-wider">
                        Scope: {project.scope}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Project Focus Pillars */}
      <section className="py-20 bg-white border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary mx-auto flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-heading">High System Performance</h4>
              <p className="text-xs sm:text-sm text-body mt-2 leading-relaxed">
                Engineered for maximum specific yield (kWh/kWp) using optimal azimuth tilt and high-efficiency bifacial topologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary-light text-secondary-dark mx-auto flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-heading">Reliable Energy Generation</h4>
              <p className="text-xs sm:text-sm text-body mt-2 leading-relaxed">
                Guaranteed generation curves protected by Tier-1 OEM warranties and rapid field preventive maintenance SLAs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-heading mx-auto flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-heading">Long-Term Stability</h4>
              <p className="text-xs sm:text-sm text-body mt-2 leading-relaxed">
                25+ year structural and electrical design life built to withstand extreme climatic variations and corrosion.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
