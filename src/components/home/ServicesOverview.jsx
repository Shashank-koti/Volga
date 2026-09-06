import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { servicesList } from '../../data/services';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { Activity, Sun, Zap, BatteryCharging, ArrowRight } from 'lucide-react';

const iconMap = {
  Activity,
  Sun,
  Zap,
  BatteryCharging,
};

export default function ServicesOverview({ onNavigate }) {
  return (
    <section id="services-overview" className="py-24 bg-background relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge="What We Do"
          title="Our Services"
          highlight="Services"
          align="center"
          className="mb-16"
        />

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {servicesList.map((service) => {
            const Icon = iconMap[service.icon] || Sun;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => onNavigate(service.link)}
                className="group rounded-2xl bg-surface border border-border p-7 shadow-subtle hover:shadow-elevated hover:border-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-body leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-dark">
                  <span>Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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

