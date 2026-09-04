import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Award,
  ShieldCheck,
  TrendingUp,
  Leaf,
  Users,
  Target,
  CheckCircle2,
  Cpu,
  Compass,
} from 'lucide-react';

export default function About({ onNavigate }) {
  const values = [
    {
      title: 'Expertise',
      desc: 'Decades of multi-gigawatt engineering acumen, deep domain knowledge in PV string dynamics, SCADA telemetry, and grid code compliance.',
      icon: Award,
      badge: 'Knowledge Driven',
    },
    {
      title: 'Reliability',
      desc: 'Predictable energy yield through rigorous ISO preventive maintenance, 99.4% guaranteed uptime SLAs, and zero-compromise safety protocols.',
      icon: ShieldCheck,
      badge: 'Unwavering SLAs',
    },
    {
      title: 'Performance',
      desc: 'Optimizing the levelized cost of energy (LCOE) through algorithmic analytics, proactive soiling management, and rapid field intervention.',
      icon: TrendingUp,
      badge: 'Data Optimized',
    },
    {
      title: 'Sustainability',
      desc: 'Accelerating the global transition away from carbon-intensive fuels while safeguarding local biodiversity and social community vitality.',
      icon: Leaf,
      badge: 'Net-Zero Impact',
    },
  ];

  const pillars = [
    'Solar Asset Management',
    'Project Management & Turnkey EPC',
    'Operations & Preventive Maintenance',
    'Engineering & Grid Interconnection',
    'Telemetry & Performance Analytics',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="About Volga Solar Solutions"
        highlight="Volga Solar"
        description="Pioneering integrated renewable energy stewardship across the entire lifecycle of utility-scale and commercial solar power assets."
        onNavigate={onNavigate}
      />

      {/* Storytelling & Mission Section */}
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
                Empowering Clean Energy with Engineering Precision
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets. Founded by seasoned clean-energy technologists and project veterans, we recognized that generating power is only the first step—preserving asset health, optimizing generation ratio, and assuring bankable revenue streams are where true value is unlocked.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                Our team combines deep expertise in:
              </p>

              <div className="space-y-2.5 pt-1">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-heading">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/solar-asset-inspection.jpg"
                  alt="Volga Solar Field Engineers and Asset Inspection"
                  className="w-full h-[480px] sm:h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background relative overflow-hidden border-y border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-heading">Our Mission</h3>
                <p className="mt-4 text-base text-body leading-relaxed">
                  To deliver reliable, highly efficient, and long-term clean energy solutions that protect client capital, minimize operational downtime, and empower industries with clean, affordable power.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-primary">
                <span>RELIABILITY &bull; INTEGRITY &bull; VALUE</span>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-heading">Our Vision</h3>
                <p className="mt-4 text-base text-body leading-relaxed">
                  To be the most trusted renewable energy services platform across Asia, setting benchmark standards for solar asset stewardship, battery storage integration, and industrial decarbonization.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-secondary">
                <span>INNOVATION &bull; DECARBONIZATION &bull; FUTURE</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <SectionHeading
            badge="Guiding Principles"
            title="Our Core Values"
            highlight="Values"
            subtitle="The fundamental tenets that guide our engineering decisions, client partnerships, and operational governance."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-neutral-100 text-heading group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-body leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <span className="text-xs font-bold text-secondary group-hover:text-primary transition-colors flex items-center gap-1">
                      <span>Principle 0{idx + 1}</span>
                    </span>
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
