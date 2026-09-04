import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { homeServices } from '../../data/services';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { Activity, Sun, BatteryCharging, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Activity,
  Sun,
  BatteryCharging,
  ShieldCheck,
};

export default function ServicesOverview({ onNavigate }) {
  return (
    <section id="services-overview" className="py-24 bg-background relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge="Integrated Capabilities"
          title="Our Renewable Energy Solutions"
          highlight="Renewable Energy"
          subtitle="Engineered for institutional investors, independent power producers, and commercial enterprises seeking dependable clean energy yields."
          align="center"
          className="mb-16"
        />

        {/* 4 Cards Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {homeServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Sun;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => onNavigate(service.link)}
                className="group relative rounded-2xl bg-surface border border-border/80 shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Icon Emblem */}
                  <div className="absolute bottom-3.5 left-4 w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-body leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-muted bg-neutral-100 px-2 py-0.5 rounded-md"
                        >
                          <CheckCircle2 className="w-3 h-3 text-secondary" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-dark">
                    <span>Explore Solution</span>
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
