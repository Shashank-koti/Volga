import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Activity,
  Briefcase,
  Wrench,
  Cpu,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function About({ onNavigate }) {
  const expertiseAreas = [
    {
      title: 'Solar asset management',
      icon: Activity,
    },
    {
      title: 'Project management',
      icon: Briefcase,
    },
    {
      title: 'Operations',
      icon: Wrench,
    },
    {
      title: 'Engineering',
      icon: Cpu,
    },
    {
      title: 'Performance analytics',
      icon: BarChart3,
    },
  ];

  const focusPoints = [
    {
      title: 'Plant Performance',
      desc: 'Delivering solutions that enhance plant performance and generation efficiency.',
      icon: TrendingUp,
      color: '#D5000E',
    },
    {
      title: 'Operational Reliability',
      desc: 'Structured engineering and maintenance ensuring dependable operational reliability.',
      icon: ShieldCheck,
      color: '#EF4444',
    },
    {
      title: 'Long Term Asset Value',
      desc: 'Protecting and maximizing the capital and functional value of solar assets across their lifecycle.',
      icon: Zap,
      color: '#D5000E',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title="About Us"
        highlight="About"
        description="Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets."
        onNavigate={onNavigate}
      />

      {/* Main Narrative Section */}
      <section className="py-24 bg-[#070A0F] relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content (6 cols) */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Volga Solar Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Integrated Renewable Energy Services
              </h2>

              <p className="text-base sm:text-lg text-white leading-relaxed font-semibold">
                Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Our team combines deep expertise in solar asset management, project management, operations, engineering, and performance analytics, enabling us to support asset owners and businesses in achieving reliable and efficient clean energy generation.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                We focus on delivering solutions that enhance plant performance, operational reliability, and long term asset value.
              </p>

              {/* Team Expertise Areas */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                  Our Team Expertise
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {expertiseAreas.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-semibold text-white hover:border-primary/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Image (6 cols) */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 group">
                <img
                  src="/images/solar-asset-inspection.jpg"
                  alt="Volga Solar Solutions Field Engineers"
                  className="w-full h-[480px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-neutral-900/95 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-400">Engineering Oversight</div>
                      <div className="text-sm font-bold text-white">Full Lifecycle Support</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">Reliable Yield</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Focus Pillars Section (Exact Approved Copy) */}
      <section className="py-24 bg-[#0B0F17] relative border-t border-neutral-800 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block mb-2">
              Strategic Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Strategic Focus
            </h2>
            <p className="mt-3 text-base text-neutral-300 leading-relaxed">
              We focus on delivering solutions that enhance plant performance, operational reliability, and long term asset value.
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {focusPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${point.color}20`,
                        color: point.color,
                        border: `1px solid ${point.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                      Priority 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono font-bold text-primary">
                    <span>Key Priority 0{idx + 1}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
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
              Contact Volga Solar Solutions
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
