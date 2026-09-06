import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeUp, fadeIn, staggerContainer } from '../../utils/animations';
import {
  ArrowRight,
  Sun,
  Activity,
  BatteryCharging,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import heroBg from "/hero.png";

export default function Hero({ onNavigate }) {
  const scrollToExplore = () => {
    const el = document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('asset-management');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white pt-16">
      {/* Cinematic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Solar Plant Infrastructure"
          className="w-full h-[100vh] object-cover object-center opacity-70 "
        />

      </div>

      <Container className="relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & Actions (7 cols) */}
          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              Reliable Renewable{' '}
              <span className="text-secondary relative inline-block">
                Energy Solutions
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-md lg:text-lg text-neutral-300 max-w-2xl leading-relaxed"
            >
              Volga Solar Solutions is a renewable energy services company specialising in{' '}
              <span className="text-white font-semibold">solar asset management</span>,{' '}
              <span className="text-white font-semibold">rooftop solar solutions</span>, and{' '}
              <span className="text-white font-semibold">battery energy storage systems (BESS)</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={scrollToExplore}
              >
                Our Services
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
