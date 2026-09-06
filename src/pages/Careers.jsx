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
  Send
} from 'lucide-react';

export default function Careers({ onNavigate }) {
  const careerAreas = [
    {
      title: 'Solar engineering',
      icon: Sun,
    },
    {
      title: 'Operations and maintenance',
      icon: Wrench,
    },
    {
      title: 'Project management',
      icon: Briefcase,
    },
    {
      title: 'Energy analytics',
      icon: BarChart3,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Careers at Volga Solar Solutions"
        highlight="Careers"
        description="Volga Solar Solutions offers opportunities for professionals who are passionate about renewable energy and engineering innovation. We provide a dynamic work environment with opportunities to work on impactful renewable energy projects."
        onNavigate={onNavigate}
      />

      {/* Career Areas */}
      <section className="py-20 lg:py-24 bg-white relative">
        <Container>
          <SectionHeading
            badge="Opportunities"
            title="Career Areas"
            highlight="Career Areas"
            subtitle="Career areas include:"
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {careerAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
                    Area 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Resume Submission CTA */}
      <section className="py-20 bg-background relative border-t border-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center rounded-3xl bg-white border border-border p-8 sm:p-12 shadow-subtle">
            <div className="w-14 h-14 rounded-2xl bg-secondary-light text-secondary-dark mx-auto flex items-center justify-center mb-6">
              <Send className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-heading">
              Join Our Team
            </h3>

            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
              Interested candidates may submit their resumes through the contact page.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => onNavigate('contact')}
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
