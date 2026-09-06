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
} from 'lucide-react';

export default function About({ onNavigate }) {
  const expertiseAreas = [
    {
      title: 'Solar Asset Management',
      icon: Activity,
    },
    {
      title: 'Project Management',
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
      title: 'Performance Analytics',
      icon: BarChart3,
    },
  ];

  const focusPoints = [
    {
      title: 'Plant Performance',
      desc: 'Delivering solutions that enhance plant performance and generation efficiency.',
      icon: TrendingUp,
    },
    {
      title: 'Operational Reliability',
      desc: 'Structured engineering and maintenance ensuring dependable operational reliability.',
      icon: ShieldCheck,
    },
    {
      title: 'Long-Term Asset Value',
      desc: 'Protecting and maximizing the capital and functional value of solar assets across their lifecycle.',
      icon: Zap,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="About Us"
        highlight="About"
        description="Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets."
        onNavigate={onNavigate}
      />

      {/* Main Narrative Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary">
                About Volga Solar Solutions
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight leading-tight">
                Integrated Renewable Energy Services
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed font-medium">
                Volga Solar Solutions provides integrated renewable energy services across the lifecycle of solar power assets.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                Our team combines deep expertise in solar asset management, project management, operations, engineering, and performance analytics, enabling us to support asset owners and businesses in achieving reliable and efficient clean energy generation.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                We focus on delivering solutions that enhance plant performance, operational reliability, and long-term asset value.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-3">
                  Our Team Expertise
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {expertiseAreas.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-sm font-semibold text-heading"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/solar-asset-inspection.jpg"
                  alt="Volga Solar Solutions Field Engineers"
                  className="w-full h-[480px] sm:h-[540px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Focus Pillars Section */}
      <section className="py-24 bg-neutral-50 relative border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
              Our Strategic Focus
            </h2>
            <p className="mt-3 text-base text-body leading-relaxed">
              We focus on delivering solutions that enhance plant performance, operational reliability, and long-term asset value.
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
                  className="p-8 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-heading mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-primary">
                    <span>Key Priority 0{idx + 1}</span>
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

