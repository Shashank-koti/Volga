import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  Sun,
  Wrench,
  Briefcase,
  BarChart3,
  ArrowRight,
  Send,
  CheckCircle2,
} from 'lucide-react';

export default function Careers({ onNavigate }) {
  const careerAreas = [
    {
      title: 'Solar engineering',
      icon: Sun,
      desc: 'System design, engineering blueprints, electrical architecture, and interconnection planning.',
    },
    {
      title: 'Operations and maintenance',
      icon: Wrench,
      desc: 'Preventive maintenance, field testing, equipment servicing, and plant uptime optimization.',
    },
    {
      title: 'Project management',
      icon: Briefcase,
      desc: 'EPC execution, procurement logistics, contractor coordination, and timeline delivery.',
    },
    {
      title: 'Energy analytics',
      icon: BarChart3,
      desc: 'SCADA performance tracking, yield benchmarking, loss diagnostics, and generation modeling.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#070A0F] text-white">
      {/* Page Hero */}
      <PageHero
        title="Careers at Volga Solar Solutions"
        highlight="Careers"
        description="Volga Solar Solutions offers opportunities for professionals who are passionate about renewable energy and engineering innovation. We provide a dynamic work environment with opportunities to work on impactful renewable energy projects."
        onNavigate={onNavigate}
      />

      {/* Career Areas (Exact Approved Copy) */}
      <section className="py-20 lg:py-24 bg-[#070A0F] relative border-b border-neutral-800 overflow-hidden text-white">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            badge="Opportunities"
            title="Career Areas"
            highlight="Career Areas"
            subtitle="Explore engineering, management, and technical roles across our renewable energy portfolio."
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
            {careerAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                      Department 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-primary font-semibold">
                    <span>Engineering Focus</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Resume Submission CTA (Exact Approved Copy) */}
      <section className="py-24 bg-[#0B0F17] relative text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center rounded-3xl bg-neutral-900/90 text-white border border-neutral-800 p-8 sm:p-14 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary mx-auto flex items-center justify-center border border-primary/30">
              <Send className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block">
              Talent Recruitment
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Join Our Team
            </h3>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto font-normal">
              Interested candidates may submit their resumes through the contact page.
            </p>

            <div className="pt-4 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate('contact')}
                className="shadow-glow-red"
              >
                Go to Contact Page
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
