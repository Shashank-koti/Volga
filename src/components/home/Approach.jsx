import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { ShieldCheck, Cpu, Clock } from 'lucide-react';

export default function Approach() {
  const principles = [
    {
      num: '01',
      title: 'Operational Excellence',
      desc: 'Structured maintenance and monitoring processes ensure high plant availability.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'Performance Optimization',
      desc: 'Data driven insights help maximise energy generation.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Long Term Reliability',
      desc: 'We ensure solar assets perform efficiently throughout their lifecycle.',
      icon: Clock,
    }
  ];

  return (
    <section id="approach" className="py-24 bg-neutral-50 relative overflow-hidden border-y border-border">
      <Container className="relative z-10">
        <SectionHeading
          badge="Core Principles"
          title="Our Approach"
          highlight="Approach"
          subtitle="We focus on three core principles:"
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.num}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white border border-border p-8 shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted uppercase tracking-widest">
                      Principle {p.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-base text-body leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 h-1 w-12 bg-neutral-200 rounded group-hover:w-full group-hover:bg-primary transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

