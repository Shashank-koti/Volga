import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { Gauge, ShieldCheck, Sun, Leaf } from 'lucide-react';

export default function Stats() {
  return null;
}

function DisabledStats() {
  const stats = [
    {
      value: '1.8 GW+',
      label: 'Assets Under Management',
      desc: 'Active technical & commercial stewardship across utility and C&I plants',
      icon: Gauge,
      accentColor: 'text-primary',
      bgGlow: 'from-primary/10 to-transparent',
    },
    {
      value: '450+ MW',
      label: 'Rooftops Commissioned',
      desc: 'High-density industrial and commercial rooftop systems across India',
      icon: Sun,
      accentColor: 'text-secondary',
      bgGlow: 'from-secondary/10 to-transparent',
    },
    {
      value: '99.4%',
      label: 'Plant Availability SLA',
      desc: 'Consistently delivered through AI telemetry and rapid field O&M teams',
      icon: ShieldCheck,
      accentColor: 'text-emerald-500',
      bgGlow: 'from-emerald-500/10 to-transparent',
    },
    {
      value: '1.4M MT',
      label: 'Annual CO₂ Offset',
      desc: 'Direct carbon reduction helping clients meet strict Net-Zero targets',
      icon: Leaf,
      accentColor: 'text-accent',
      bgGlow: 'from-accent/10 to-transparent',
    }
  ];

  return (
    <section className="py-20 bg-surface text-heading relative overflow-hidden border-y border-border">
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-neutral-50 border border-border shadow-subtle hover:shadow-elevated transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${stat.bgGlow} blur-xl pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-mono ${stat.accentColor}`}>
                      {stat.value}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white text-heading shadow-sm border border-border">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-heading tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs text-body leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
