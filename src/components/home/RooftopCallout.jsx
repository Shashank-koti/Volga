import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeUp } from '../../utils/animations';
import { Sun, Zap, ArrowRight } from 'lucide-react';

export default function RooftopCallout({ onNavigate }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-black text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-elevated"
        >
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-secondary border border-white/10">
              <Sun className="w-3.5 h-3.5 text-secondary" />
              <span>Rooftop Solar Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Solar rooftop is not a requirement but an essential.
            </h2>

            <div className="text-xl sm:text-2xl font-bold text-secondary">
              Reduced Power Bills Now
            </div>

            <p className="text-sm sm:text-base text-neutral-300">
              Get a solar rooftop by choosing any one of the two options below:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('rooftop-opex')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-heading font-bold text-sm hover:bg-neutral-100 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Zap className="w-4 h-4 text-primary" />
                <span>Rooftop Solar OPEX</span>
                <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5" />
              </button>

              <span className="text-neutral-500 font-bold hidden sm:inline">||</span>

              <button
                onClick={() => onNavigate('rooftop-capex')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Sun className="w-4 h-4 text-white" />
                <span>Rooftop Solar CAPEX</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
