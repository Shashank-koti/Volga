import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { ShieldCheck, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      num: '01',
      title: 'Operational Excellence',
      desc: 'Structured maintenance and monitoring processes ensure high plant availability.',
      icon: ShieldCheck,
      details: [
        'Real-time automated alarm triage',
        'ISO-certified preventive maintenance cycles',
        'Rapid SLA-bound emergency site dispatch',
      ]
    },
    {
      num: '02',
      title: 'Performance Optimization',
      desc: 'Data-driven insights help maximise energy generation.',
      icon: Cpu,
      details: [
        'Continuous string-level telemetry analysis',
        'Intelligent soiling index tracking',
        'Automated inverter degradation alerts',
      ]
    },
    {
      num: '03',
      title: 'Long-Term Reliability',
      desc: 'We ensure solar assets perform efficiently throughout their lifecycle.',
      icon: Clock,
      details: [
        'Bankable component lifecycle preservation',
        '25-year structural integrity inspections',
        'Comprehensive warranty dispute governance',
      ]
    }
  ];

  return (
    <section id="approach" className="py-24 bg-background relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge="Engineering Rigor"
          title="Built for Long-Term Performance"
          highlight="Long-Term Performance"
          subtitle="Our systematic methodology ensures every solar asset achieves its designed generation curve with minimal lifecycle degradation."
          align="center"
          className="mb-16"
        />

        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/40 to-accent/40 z-0" />

          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-surface border border-border p-8 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Watermark large number */}
                  <span className="absolute -top-4 -right-2 text-7xl font-black text-neutral-100/90 group-hover:text-primary-light transition-colors pointer-events-none select-none font-mono">
                    {step.num}
                  </span>

                  <div>
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center font-black group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted uppercase tracking-widest">
                        Phase {step.num}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Bullet details */}
                    <div className="mt-6 pt-6 border-t border-neutral-100 space-y-2.5">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-body font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 h-1 w-12 bg-neutral-200 rounded group-hover:w-full group-hover:bg-primary transition-all duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
