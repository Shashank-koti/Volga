import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { useGsapContext, gsap } from '../../utils/gsapHelper';
import { ArrowRight } from 'lucide-react';
import heroBg from "/hero.png";
import heroBgVideo from "/videos/heroBG.mp4";

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);



  // GSAP subtle parallax on video
  useGsapContext(() => {
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }
  }, heroRef);

  const scrollToExplore = () => {
    const el = document.getElementById('why-solar') || document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('asset-management');
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center bg-[#070B11] overflow-hidden text-white pt-24 lg:pt-28 pb-16"
    >
      {/* Cinematic Solar Background Video (India Map removed) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-[125%] -top-[12%] object-cover object-center scale-105 filter saturate-[1.15] contrast-[1.12]"
        >
          <source src={heroBgVideo} type="video/mp4" />
          <img src={heroBg} alt="Solar Plant Infrastructure" className="w-full h-full object-cover" />
        </video>

        {/* Multi-layered cinematic gradient vignettes for ultra-premium dark atmosphere */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#070B11]/95 via-[#070B11]/75 to-[#070B11]/85 backdrop-blur-[1px]" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B11] via-transparent to-[#070B11]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070B11_95%)] opacity-80" />
      </div>

      <Container className="relative z-10 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline, Narrative & Primary Actions (7 cols) */}
          <motion.div
            variants={staggerContainer(0.12, 0.15)}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff3844] to-[#ff7575] relative inline-block">
                Energy Solutions
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-neutral-200 max-w-2xl leading-relaxed font-normal"
            >
              Volga Solar Solutions is a renewable energy services company specialising in solar asset management,opex solar, rooftop solutions andbattery energy storage systems (BESS).
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
                className="bg-primary hover:bg-primary-dark text-white shadow-glow-red hover:shadow-glow-red-lg transition-all"
              >
                Our Services
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                onClick={() => onNavigate('contact')}
                className="border-white/30 hover:bg-white/10 hover:border-white/50 text-white backdrop-blur-sm"
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
