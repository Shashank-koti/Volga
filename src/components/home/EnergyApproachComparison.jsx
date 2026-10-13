import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import {
  AlertTriangle,
  Sun,
} from 'lucide-react';

/**
 * EnergyApproachComparison
 * 
 * Cinematic 15-second animated comparison between Traditional Electricity
 * Approach and Modern Solar Energy Approach for Volga Solar Solutions.
 *
 * Left: Two simple, clear boxes comparing Traditional Grid vs. Modern Solar Energy.
 * Right: Pure cinematic animation viewport in an ultra-premium frame.
 */
export default function EnergyApproachComparison({ onNavigate }) {
  // Playback state (15.0s loop)
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const animFrameRef = useRef(null);
  const svgRef = useRef(null);

  const TOTAL_DURATION = 15.0;

  // Just 2 Simple, Easy to Understand Approaches
  const approaches = [
    {
      id: 1,
      range: [0, 6.0],
      jumpTo: 0.1,
      title: 'Traditional Grid Electricity',
      desc: '100% utility dependency with rising tariffs, heavy peak demand surcharges, and costly power outages.',
      icon: AlertTriangle,
      accent: '#E25121',
      accentBg: 'bg-[#E25121]/15 text-[#E25121] border-[#E25121]/30',
      activeBorder: 'border-[#E25121]/90 shadow-[0_0_24px_rgba(226,81,33,0.3)]',
    },
    {
      id: 2,
      range: [6.0, 15.0],
      jumpTo: 6.2,
      title: 'Modern Solar + Battery System',
      desc: 'Generate clean electricity on your factory roof, cutting power bills by up to 50% with battery backup during grid failures.',
      icon: Sun,
      accent: '#19ABCF',
      accentBg: 'bg-[#19ABCF]/15 text-[#19ABCF] border-[#19ABCF]/30',
      activeBorder: 'border-[#19ABCF]/90 shadow-[0_0_25px_rgba(25,171,207,0.3)]',
    },
  ];

  // Active approach synced with animation
  const activeApproachIndex = currentTime < 6.0 ? 0 : 1;

  // 60FPS animation loop
  useEffect(() => {
    let prevTimestamp = performance.now();

    const loop = (timestamp) => {
      if (isPlaying) {
        const delta = (timestamp - prevTimestamp) / 1000;
        setCurrentTime((prev) => {
          let next = prev + delta;
          if (next >= TOTAL_DURATION) {
            next = 0; // Seamless loop back to Scene 1
          }
          return next;
        });
      }
      prevTimestamp = timestamp;
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const jumpToApproach = (index) => {
    const target = approaches[index];
    if (target) {
      setCurrentTime(target.jumpTo);
    }
  };

  // Interpolation calculations based on currentTime:
  const t = currentTime;

  // Scene transition progress
  const s2Progress = Math.min(1, Math.max(0, (t - 4.0) / 2.0));
  const sweepX = s2Progress * 2100 - 100;

  // Scene opacities
  const s1Opacity = t < 4.0 ? 1 : Math.max(0, 1 - (t - 4.0) / 1.0);
  const s3Opacity = t < 4.0 ? 0 : t < 6.0 ? s2Progress : 1;

  // Animation pulse offsets
  const powerPulseOffset = (t * 110) % 300;
  const solarPulseOffset = (t * 160) % 300;
  const meterDialRotation = (t * 300) % 360;

  // Dynamic oscillating split-screen calculation for Scene 4 (11-15s)
  const currentSplitX = t >= 11 && t < 15
    ? 960 + Math.sin((t - 11) * 1.8) * 80
    : 960;


  return (
    <section
      id="energy-comparison"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#070A0F] text-white overflow-hidden"
    >
      {/* Background Architectural Blueprint & Ambient Glows */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#C0020F]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#19ABCF]/12 blur-[170px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* ============================================================== */}
          {/* LEFT SIDE: Narrative & Just 2 Simple, Easy-to-Understand Boxes */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 text-left">

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold tracking-tight text-white leading-[1.14]"
            >
              Traditional Electricity{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C0020F] via-[#E25121] to-[#19ABCF]">
                vs. Modern Solar Energy
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
            >
              Compare the cost and reliability of utility grid dependence versus generating your own on-site solar power.
            </motion.p>

            {/* Just Two Simple & Easy to Understand Boxes */}
            <div className="space-y-4 pt-1">
              {approaches.map((app, idx) => {
                const isActive = activeApproachIndex === idx;
                const Icon = app.icon;

                return (
                  <div
                    key={app.id}
                    onClick={() => jumpToApproach(idx)}
                    className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                      ? `bg-[#0E131F]/95 ${app.activeBorder}`
                      : 'bg-[#0B0F17]/65 border-white/10 hover:border-white/20 hover:bg-[#0E131F]/75'
                      }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? app.accentBg : 'bg-white/5 text-slate-400 group-hover:text-white'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors mb-1.5 ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                            }`}
                        >
                          {app.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {app.desc}
                        </p>
                      </div>
                    </div>

                    {/* Active Glow Accent Line */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full"
                        style={{ backgroundColor: app.accent }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT SIDE: Pure Cinematic Animation Viewport (Clean Frame)     */}
          {/* Boundary clutter (headers, scrubbers, timers, buttons) removed  */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative group">
              {/* Luxury Ambient Glow Behind Animation Box */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C0020F]/20 via-[#E25121]/20 to-[#19ABCF]/20 rounded-2xl lg:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Ultra-Clean Cinematic Viewport Container */}
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-[#0B0F17] shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer select-none"
                title={isPlaying ? 'Click animation to Pause' : 'Click animation to Play'}
              >
                {/* 16:9 Aspect Ratio SVG Stage */}
                <div className="relative w-full aspect-video bg-[#070A0F] overflow-hidden">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 1920 1080"
                    className="w-full h-full block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Day / Dusk Environmental Gradients */}
                      <linearGradient id="skyGradDay" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0B1320" />
                        <stop offset="60%" stopColor="#080E18" />
                        <stop offset="100%" stopColor="#070A0F" />
                      </linearGradient>

                      <linearGradient id="skyGradGrid" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0B1320" />
                        <stop offset="60%" stopColor="#080E18" />
                        <stop offset="100%" stopColor="#070A0F" />
                      </linearGradient>

                      {/* Building Facade Gradients (Dark Tech Blueprint) */}
                      <linearGradient id="bldgFacadeDay" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0E1726" />
                        <stop offset="50%" stopColor="#0B1320" />
                        <stop offset="100%" stopColor="#070A0F" />
                      </linearGradient>

                      <linearGradient id="bldgFacadeGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0D1522" />
                        <stop offset="50%" stopColor="#09101C" />
                        <stop offset="100%" stopColor="#070A0F" />
                      </linearGradient>

                      <linearGradient id="bldgRoofDay" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0A1424" />
                        <stop offset="100%" stopColor="#070E18" />
                      </linearGradient>

                      <linearGradient id="bldgRoofGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#09101C" />
                        <stop offset="100%" stopColor="#060B12" />
                      </linearGradient>

                      <linearGradient id="solarGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0C2033" />
                        <stop offset="50%" stopColor="#143657" />
                        <stop offset="100%" stopColor="#081524" />
                      </linearGradient>

                      <linearGradient id="sunRayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E25121" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#19ABCF" stopOpacity="0" />
                      </linearGradient>

                      <linearGradient id="sweepLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="42%" stopColor="#C0020F" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="58%" stopColor="#19ABCF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>

                      {/* Filters */}
                      <filter id="neonGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="solarOrangeGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      {/* Clip Paths for Split-Screen Comparison (Scene 4) */}
                      <clipPath id="splitLeftClip">
                        <rect x="0" y="0" width={currentSplitX} height="1080" />
                      </clipPath>
                      <clipPath id="splitRightClip">
                        <rect x={currentSplitX} y="0" width={1920 - currentSplitX} height="1080" />
                      </clipPath>

                      {/* Solar Panel Monocrystalline Grid Pattern */}
                      <pattern id="pvGridPattern" width="34" height="22" patternUnits="userSpaceOnUse">
                        <rect width="32" height="20" fill="#0C1B2B" stroke="#19ABCF" strokeWidth="0.8" />
                        <line x1="16" y1="0" x2="16" y2="20" stroke="#C0020F" strokeWidth="0.5" strokeOpacity="0.8" />
                        <line x1="0" y1="10" x2="32" y2="10" stroke="#C0020F" strokeWidth="0.5" strokeOpacity="0.8" />
                      </pattern>
                    </defs>

                    {/* Sky Background */}
                    <rect
                      x="0"
                      y="0"
                      width="1920"
                      height="1080"
                      fill={t < 4 ? 'url(#skyGradGrid)' : 'url(#skyGradDay)'}
                      className="transition-colors duration-1000"
                    />

                    {/* Ground Horizon & Architectural Perspective Ground Plane */}
                    <rect x="0" y="600" width="1920" height="480" fill={t < 4 ? '#090D16' : '#070A0F'} />

                    {/* Perspective Ground Grid */}
                    <g opacity="0.3">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <line
                          key={`gh-${i}`}
                          x1="0"
                          y1={600 + i * 28}
                          x2="1920"
                          y2={600 + i * 28}
                          stroke="#1E293B"
                          strokeWidth="1"
                          strokeDasharray="4 8"
                        />
                      ))}
                      {Array.from({ length: 32 }).map((_, i) => (
                        <line
                          key={`gv-${i}`}
                          x1={i * 65}
                          y1="600"
                          x2={i * 65 - 180}
                          y2="1080"
                          stroke="#1E293B"
                          strokeWidth="1"
                          strokeDasharray="4 8"
                        />
                      ))}
                    </g>

                    {/* ============================================================== */}
                    {/* SCENE 1 & 4 LEFT: TRADITIONAL GRID INFRASTRUCTURE              */}
                    {/* ============================================================== */}
                    <g
                      id="traditional-grid-layer"
                      opacity={t >= 11 && t < 15 ? 1 : s1Opacity}
                      clipPath={t >= 11 && t < 15 ? 'url(#splitLeftClip)' : undefined}
                    >
                      {/* Distant Substation Silhouette */}
                      <path
                        d="M0,610 Q200,580 400,600 T800,590 L800,700 L0,700 Z"
                        fill="#0B1320"
                        opacity="0.8"
                      />

                      {/* Transmission Tower 1 (Tall Left Lattice Pylon) */}
                      <g transform="translate(100, 240) scale(1.15)">
                        <polygon points="50,0 70,0 95,360 25,360" fill="none" stroke="#283548" strokeWidth="2.5" />
                        <line x1="60" y1="0" x2="60" y2="360" stroke="#1E293B" strokeWidth="1.5" />
                        <line x1="10" y1="65" x2="110" y2="65" stroke="#334155" strokeWidth="2.5" />
                        <line x1="18" y1="125" x2="102" y2="125" stroke="#334155" strokeWidth="2.5" />
                        <line x1="0" y1="185" x2="120" y2="185" stroke="#334155" strokeWidth="2.5" />
                        <line x1="38" y1="65" x2="82" y2="125" stroke="#1E293B" strokeWidth="1.2" />
                        <line x1="82" y1="65" x2="38" y2="125" stroke="#1E293B" strokeWidth="1.2" />
                        <line x1="32" y1="125" x2="88" y2="185" stroke="#1E293B" strokeWidth="1.2" />
                        <line x1="88" y1="125" x2="32" y2="185" stroke="#1E293B" strokeWidth="1.2" />
                        <line x1="28" y1="185" x2="92" y2="270" stroke="#1E293B" strokeWidth="1.5" />
                        <line x1="92" y1="185" x2="28" y2="270" stroke="#1E293B" strokeWidth="1.5" />
                        <rect x="8" y="65" width="4" height="15" fill="#E25121" />
                        <rect x="108" y="65" width="4" height="15" fill="#E25121" />
                        <rect x="16" y="125" width="4" height="15" fill="#E25121" />
                        <rect x="100" y="125" width="4" height="15" fill="#E25121" />
                        <rect x="-2" y="185" width="4" height="15" fill="#E25121" />
                        <rect x="118" y="185" width="4" height="15" fill="#E25121" />
                      </g>

                      {/* Transmission Tower 2 (Mid-Left Lattice Pylon) */}
                      <g transform="translate(340, 290) scale(0.92)">
                        <polygon points="50,0 70,0 95,360 25,360" fill="none" stroke="#283548" strokeWidth="2.2" />
                        <line x1="10" y1="65" x2="110" y2="65" stroke="#334155" strokeWidth="2" />
                        <line x1="18" y1="125" x2="102" y2="125" stroke="#334155" strokeWidth="2" />
                        <line x1="0" y1="185" x2="120" y2="185" stroke="#334155" strokeWidth="2" />
                      </g>

                      {/* High-Voltage Power Lines towards Facility */}
                      <g>
                        <path d="M180,315 Q300,360 410,350 T620,440" fill="none" stroke="#1E293B" strokeWidth="2.5" />
                        <path d="M225,385 Q340,430 460,405 T620,470" fill="none" stroke="#1E293B" strokeWidth="2.5" />
                        <path
                          d="M180,315 Q300,360 410,350 T620,440"
                          fill="none"
                          stroke="#E25121"
                          strokeWidth="3.5"
                          strokeDasharray="16 32"
                          strokeDashoffset={-powerPulseOffset}
                          filter="url(#solarOrangeGlow)"
                          opacity="0.9"
                        />
                        <path
                          d="M225,385 Q340,430 460,405 T620,470"
                          fill="none"
                          stroke="#C0020F"
                          strokeWidth="3"
                          strokeDasharray="12 28"
                          strokeDashoffset={-powerPulseOffset * 1.2}
                          filter="url(#solarOrangeGlow)"
                          opacity="0.85"
                        />
                      </g>

                      {/* Utility Transformer Yard at Facility Intake */}
                      <g transform="translate(560, 480)">
                        <rect x="0" y="30" width="85" height="65" rx="5" fill="#0B1320" stroke="#1E293B" strokeWidth="2" />
                        <rect x="12" y="10" width="14" height="20" fill="#1E293B" />
                        <rect x="36" y="10" width="14" height="20" fill="#1E293B" />
                        <rect x="60" y="10" width="14" height="20" fill="#1E293B" />
                        <text x="42" y="65" fill="#E25121" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                          11kV GRID
                        </text>
                        <circle cx="42" cy="48" r="4" fill="#E25121" filter="url(#solarOrangeGlow)">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
                        </circle>
                      </g>

                      {/* Traditional Utility Meter Box */}
                      <g transform="translate(480, 590)">
                        <rect x="0" y="0" width="150" height="100" rx="6" fill="#0B0F17" stroke="#1E293B" strokeWidth="2" />
                        <rect x="10" y="10" width="130" height="32" rx="3" fill="#070A0F" stroke="#E25121" strokeWidth="1" />
                        <text x="18" y="32" fill="#E25121" fontFamily="monospace" fontSize="15" fontWeight="bold" letterSpacing="1.5">
                          084,920
                        </text>
                        <text x="110" y="32" fill="#E25121" fontFamily="monospace" fontSize="10">
                          kWh
                        </text>
                        <circle cx="36" cy="68" r="14" fill="none" stroke="#1E293B" strokeWidth="2" />
                        <line
                          x1="36"
                          y1="68"
                          x2={36 + 11 * Math.cos((meterDialRotation * Math.PI) / 180)}
                          y2={68 + 11 * Math.sin((meterDialRotation * Math.PI) / 180)}
                          stroke="#C0020F"
                          strokeWidth="2.2"
                        />
                        <circle cx="36" cy="68" r="2.5" fill="#C0020F" />
                        <text x="62" y="64" fill="#E2E8F0" fontSize="9.5" fontWeight="bold">
                          UTILITY DRAW
                        </text>
                        <rect x="62" y="70" width="76" height="16" rx="3" fill="#1F0D09" stroke="#E25121" strokeWidth="1" />
                        <text x="68" y="82" fill="#E25121" fontSize="8" fontWeight="bold" fontFamily="monospace">
                          100% GRID RELIANT
                        </text>
                      </g>

                      {/* Floating Tariff Volatility Spike Card */}
                      <g transform="translate(260, 480)">
                        <rect
                          x="0"
                          y="0"
                          width="200"
                          height="90"
                          rx="10"
                          fill="#0B0F17"
                          fillOpacity="0.94"
                          stroke="#E25121"
                          strokeWidth="1.8"
                          filter="drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
                        />
                        <path d="M14,22 L22,10 L30,22 Z" fill="#C0020F" />
                        <text x="36" y="20" fill="#E25121" fontSize="11" fontWeight="bold">
                          Tariff Volatility Alert
                        </text>
                        <text x="14" y="44" fill="#CBD5E1" fontSize="10">
                          Peak Commercial Demand
                        </text>
                        <text x="14" y="64" fill="#E25121" fontSize="14" fontWeight="bold" fontFamily="monospace">
                          ▲ +18.4% Tariff Exposure
                        </text>
                        <text x="14" y="78" fill="#94A3B8" fontSize="8.5">
                          Unhedged grid rate hikes
                        </text>
                      </g>
                    </g>

                    {/* ============================================================== */}
                    {/* CENTRAL ARCHITECTURAL FACILITY                                 */}
                    {/* ============================================================== */}
                    <g id="architectural-facility" transform="translate(680, 320)">
                      <polygon
                        points="40,240 260,130 260,370 40,480"
                        fill="#090E17"
                        stroke="#1E293B"
                        strokeWidth="2"
                        className="transition-colors duration-700"
                      />

                      <polygon
                        points="260,130 660,250 660,490 260,370"
                        fill="url(#bldgFacadeDay)"
                        stroke="#19ABCF"
                        strokeWidth="2.5"
                        strokeOpacity="0.7"
                        className="transition-colors duration-700"
                      />

                      <polygon
                        points="660,250 860,190 860,390 660,450"
                        fill="#0B1320"
                        stroke="#19ABCF"
                        strokeWidth="2"
                        strokeOpacity="0.6"
                        className="transition-colors duration-700"
                      />
                      <polygon
                        points="860,190 950,220 950,420 860,390"
                        fill="#08101C"
                        stroke="#1E293B"
                        strokeWidth="1.5"
                        className="transition-colors duration-700"
                      />

                      {/* Modern Commercial Glass Ribbon Windows */}
                      {Array.from({ length: 4 }).map((_, i) => (
                        <polygon
                          key={`win-${i}`}
                          points={`690,${265 + i * 36} 830,${225 + i * 36} 830,${248 + i * 36} 690,${288 + i * 36}`}
                          fill="#19ABCF"
                          fillOpacity="0.45"
                          stroke="#19ABCF"
                          strokeWidth="1"
                          filter="url(#neonGlowCyan)"
                          className="transition-all duration-700"
                        />
                      ))}

                      {/* Loading Bays */}
                      <polygon points="320,380 400,404 400,454 320,430" fill="#070A0F" stroke="#1E293B" strokeWidth="1" />
                      <polygon points="440,416 520,440 520,490 440,466" fill="#070A0F" stroke="#1E293B" strokeWidth="1" />

                      {/* Facility Ground Signage */}
                      <g transform="translate(600, 470)">
                        <rect x="0" y="0" width="120" height="34" rx="4" fill="#0B1320" stroke="#19ABCF" strokeWidth="1.2" />
                        <text x="60" y="17" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">
                          COMMERCIAL HUB
                        </text>
                        <text x="60" y="28" fill="#19ABCF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
                          LOAD DEMAND: 750 kW
                        </text>
                      </g>

                      {/* Main Roof Surface */}
                      <polygon
                        points="40,240 260,130 660,250 440,360"
                        fill="url(#bldgRoofDay)"
                        stroke="#19ABCF"
                        strokeWidth="2"
                        className="transition-colors duration-700"
                      />

                      {/* Scene 1 Roof Exhaust Vents (fades during transition) */}
                      <g opacity={t < 4 ? 1 : Math.max(0, 1 - s2Progress * 2)}>
                        <rect x="150" y="195" width="28" height="22" fill="#0B1320" stroke="#1E293B" strokeWidth="1.5" />
                        <circle cx="164" cy="206" r="7" fill="#070A0F" stroke="#1E293B" strokeWidth="1" />
                        <rect x="250" y="240" width="32" height="26" fill="#0B1320" stroke="#1E293B" strokeWidth="1.5" />
                      </g>

                      {/* ============================================================== */}
                      {/* MODERN SOLAR ROOFTOP INSTALLATION (Scenes 2, 3 & 4)            */}
                      {/* ============================================================== */}
                      <g
                        id="solar-rooftop-array"
                        opacity={t >= 11 && t < 15 ? 1 : s3Opacity}
                        clipPath={t >= 11 && t < 15 ? 'url(#splitRightClip)' : undefined}
                      >
                        {/* Array Rack 1 (Upper Tier) */}
                        <g transform="translate(160, 150) skewX(-26) skewY(12)">
                          <rect
                            x="0"
                            y="0"
                            width="210"
                            height="50"
                            rx="3"
                            fill="url(#solarGlassGrad)"
                            stroke="#19ABCF"
                            strokeWidth="1.5"
                            filter="url(#neonGlowCyan)"
                          />
                          <rect x="0" y="0" width="210" height="50" fill="url(#pvGridPattern)" opacity="0.9" />
                          <line
                            x1={(t * 90) % 250 - 40}
                            y1="0"
                            x2={(t * 90) % 250 + 20}
                            y2="50"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeOpacity="0.5"
                          />
                        </g>

                        {/* Array Rack 2 (Mid Tier) */}
                        <g transform="translate(220, 205) skewX(-26) skewY(12)">
                          <rect
                            x="0"
                            y="0"
                            width="230"
                            height="55"
                            rx="3"
                            fill="url(#solarGlassGrad)"
                            stroke="#19ABCF"
                            strokeWidth="1.5"
                          />
                          <rect x="0" y="0" width="230" height="55" fill="url(#pvGridPattern)" opacity="0.9" />
                          <line
                            x1={(t * 90 + 40) % 270 - 40}
                            y1="0"
                            x2={(t * 90 + 40) % 270 + 20}
                            y2="55"
                            stroke="#FFFFFF"
                            strokeWidth="8"
                            strokeOpacity="0.55"
                          />
                        </g>

                        {/* Array Rack 3 (Lower Tier) */}
                        <g transform="translate(280, 265) skewX(-26) skewY(12)">
                          <rect
                            x="0"
                            y="0"
                            width="240"
                            height="60"
                            rx="3"
                            fill="url(#solarGlassGrad)"
                            stroke="#19ABCF"
                            strokeWidth="1.5"
                          />
                          <rect x="0" y="0" width="240" height="60" fill="url(#pvGridPattern)" opacity="0.9" />
                          <line
                            x1={(t * 90 + 80) % 280 - 40}
                            y1="0"
                            x2={(t * 90 + 80) % 280 + 20}
                            y2="60"
                            stroke="#FFFFFF"
                            strokeWidth="7"
                            strokeOpacity="0.45"
                          />
                        </g>

                        {/* Rooftop Solar DC Conduit Run */}
                        <path d="M500,320 L530,340 L530,440" fill="none" stroke="#C0020F" strokeWidth="3.5" />
                        <path
                          d="M500,320 L530,340 L530,440"
                          fill="none"
                          stroke="#19ABCF"
                          strokeWidth="4"
                          strokeDasharray="14 18"
                          strokeDashoffset={-solarPulseOffset}
                          filter="url(#neonGlowCyan)"
                        />
                      </g>
                    </g>

                    {/* ============================================================== */}
                    {/* SCENE 3 & 4 RIGHT: MODERN SOLAR BALANCE OF SYSTEM              */}
                    {/* ============================================================== */}
                    <g
                      id="modern-solar-layer"
                      opacity={t >= 11 && t < 15 ? 1 : s3Opacity}
                      clipPath={t >= 11 && t < 15 ? 'url(#splitRightClip)' : undefined}
                    >
                      {/* Sun & Irradiance Rays */}
                      <g transform="translate(1500, 150)">
                        <circle cx="0" cy="0" r="120" fill="#E25121" fillOpacity="0.15" filter="blur(30px)" />
                        <circle cx="0" cy="0" r="56" fill="#E25121" fillOpacity="0.9" />
                        <circle cx="0" cy="0" r="44" fill="#FFFFFF" />
                        <polygon points="0,0 -450,280 -330,340" fill="url(#sunRayGrad)" />
                        <polygon points="0,0 -600,240 -480,300" fill="url(#sunRayGrad)" opacity="0.6" />
                        <polygon points="0,0 -300,320 -200,370" fill="url(#sunRayGrad)" opacity="0.8" />
                      </g>

                      {/* Smart Commercial Solar Inverter */}
                      <g transform="translate(1380, 680)">
                        <rect x="0" y="0" width="125" height="140" rx="6" fill="#0B1320" stroke="#19ABCF" strokeWidth="2" />
                        <rect x="12" y="14" width="101" height="40" rx="4" fill="#070A0F" stroke="#19ABCF" strokeWidth="1" />
                        <text x="20" y="32" fill="#19ABCF" fontSize="11" fontFamily="monospace" fontWeight="bold">
                          INV-01: 98.9%
                        </text>
                        <text x="20" y="46" fill="#7DD3FC" fontSize="9" fontFamily="monospace">
                          DC→AC 640 kW
                        </text>
                        <circle cx="25" cy="74" r="4" fill="#19ABCF" filter="url(#neonGlowCyan)" />
                        <circle cx="45" cy="74" r="4" fill="#C0020F" filter="url(#neonGlowCyan)" />
                        <circle cx="65" cy="74" r="4" fill="#E25121" />
                        <text x="20" y="98" fill="#E2E8F0" fontSize="9.5" fontWeight="bold">
                          SMART INVERTER
                        </text>
                        <text x="20" y="114" fill="#94A3B8" fontSize="8">
                          Tier-1 MPPT Active
                        </text>
                      </g>

                      {/* Battery Energy Storage System (BESS) 1 MWh Unit */}
                      <g transform="translate(1540, 650)">
                        <rect x="0" y="0" width="210" height="170" rx="8" fill="#0B1320" stroke="#19ABCF" strokeWidth="2.5" />
                        {Array.from({ length: 8 }).map((_, i) => (
                          <line key={i} x1={20 + i * 22} y1="14" x2={20 + i * 22} y2="156" stroke="#1E293B" strokeWidth="2" />
                        ))}
                        <rect x="22" y="22" width="166" height="48" rx="5" fill="#070A0F" stroke="#19ABCF" strokeWidth="1.2" />
                        <text x="32" y="42" fill="#19ABCF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                          VOLGA BESS — 1 MWh
                        </text>
                        <rect x="32" y="50" width="146" height="10" rx="3" fill="#0E1726" />
                        <rect
                          x="32"
                          y="50"
                          width={146 * (0.88 + Math.sin(t * 1.5) * 0.06)}
                          height="10"
                          rx="3"
                          fill="#19ABCF"
                          filter="url(#neonGlowCyan)"
                        />
                        <text x="105" y="92" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                          PEAK SHAVING READY
                        </text>
                        <text x="105" y="108" fill="#94A3B8" fontSize="8.5" textAnchor="middle">
                          Active Frequency &amp; Backup Support
                        </text>
                        <rect x="30" y="122" width="150" height="24" rx="4" fill="#132238" stroke="#19ABCF" strokeWidth="0.8" />
                        <text x="105" y="138" fill="#19ABCF" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                          DISPATCH: SELF-CONSUMPTION
                        </text>
                      </g>

                      {/* Clean Energy Busbar Conduits */}
                      <path d="M1380,750 L1310,750 L1310,640 L1200,640" fill="none" stroke="#C0020F" strokeWidth="3" />
                      <path
                        d="M1380,750 L1310,750 L1310,640 L1200,640"
                        fill="none"
                        stroke="#19ABCF"
                        strokeWidth="3.5"
                        strokeDasharray="16 20"
                        strokeDashoffset={-solarPulseOffset * 1.2}
                        filter="url(#neonGlowCyan)"
                      />

                      {/* SCADA Generation Monitoring Floating Dashboard */}
                      <g
                        transform="translate(1440, 320)"
                        opacity={t >= 6 && t < 11 ? Math.min(1, (t - 6) * 2.5) : t >= 11 && t < 15 ? 1 : 0}
                      >
                        <rect
                          x="0"
                          y="0"
                          width="300"
                          height="190"
                          rx="12"
                          fill="#0B1320"
                          fillOpacity="0.95"
                          stroke="#19ABCF"
                          strokeWidth="1.8"
                          filter="drop-shadow(0 15px 35px rgba(0,0,0,0.6))"
                        />
                        <rect x="0" y="0" width="300" height="36" rx="12" fill="#0E1726" />
                        <circle cx="20" cy="18" r="4.5" fill="#C0020F" filter="url(#neonGlowCyan)" />
                        <text x="32" y="22" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                          VOLGA SCADA INTELLIGENCE
                        </text>
                        <text x="235" y="22" fill="#19ABCF" fontSize="9" fontFamily="monospace">
                          LIVE
                        </text>

                        {/* Generation Bell Curve Graphic */}
                        <g transform="translate(18, 48)">
                          <rect x="0" y="0" width="264" height="80" rx="5" fill="#070A0F" stroke="#1E293B" strokeWidth="1" />
                          <line x1="0" y1="26" x2="264" y2="26" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="0" y1="53" x2="264" y2="53" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                          <path
                            d="M10,70 C65,70 95,14 132,14 C170,14 200,70 254,70 L254,70 L10,70 Z"
                            fill="#19ABCF"
                            fillOpacity="0.18"
                          />
                          <path
                            d="M10,70 C65,70 95,14 132,14 C170,14 200,70 254,70"
                            fill="none"
                            stroke="#19ABCF"
                            strokeWidth="2.5"
                            filter="url(#neonGlowCyan)"
                          />
                          <circle cx="132" cy="14" r="4.5" fill="#E25121" filter="url(#neonGlowCyan)">
                            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                          <text x="142" y="17" fill="#7DD3FC" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
                            PEAK YIELD (640 kW)
                          </text>
                        </g>

                        {/* Cost Metric */}
                        <g transform="translate(18, 140)">
                          <text x="0" y="15" fill="#94A3B8" fontSize="9.5">
                            Electricity Cost Index:
                          </text>
                          <rect x="120" y="5" width="160" height="18" rx="4" fill="#0E1726" />
                          <rect x="120" y="5" width="80" height="18" rx="4" fill="#C0020F" />
                          <text x="200" y="18" fill="#E2E8F0" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                            Levelized Solar Cost
                          </text>
                          <text x="0" y="34" fill="#19ABCF" fontSize="9" fontWeight="semibold">
                            ✓ Predictable On-Site Generation
                          </text>
                        </g>
                      </g>
                    </g>

                    {/* ============================================================== */}
                    {/* SCENE 2: TRANSITION WIPE SWEEP (4–6s)                          */}
                    {/* ============================================================== */}
                    {t >= 4 && t < 6 && (
                      <g id="transition-wipe-layer">
                        <rect x={sweepX - 80} y="0" width="160" height="1080" fill="url(#sweepLaserGrad)" />
                        <line
                          x1={sweepX}
                          y1="0"
                          x2={sweepX}
                          y2="1080"
                          stroke="#FFFFFF"
                          strokeWidth="3.5"
                          filter="url(#neonGlowCyan)"
                        />
                        <circle
                          cx={sweepX}
                          cy="480"
                          r={35 + Math.sin(t * 10) * 15}
                          fill="none"
                          stroke="#19ABCF"
                          strokeWidth="2.5"
                          opacity="0.8"
                        />
                        <circle
                          cx={sweepX}
                          cy="480"
                          r={65 + Math.sin(t * 10) * 20}
                          fill="none"
                          stroke="#C0020F"
                          strokeWidth="1.5"
                          opacity="0.6"
                        />
                      </g>
                    )}

                    {/* ============================================================== */}
                    {/* SCENE 4: SIDE-BY-SIDE SPLIT SCREEN MATRIX (11–15s)             */}
                    {/* ============================================================== */}
                    {t >= 11 && t < 15 && (
                      <g id="side-by-side-overlay">
                        {/* Dividing Line */}
                        <line
                          x1={currentSplitX}
                          y1="0"
                          x2={currentSplitX}
                          y2="1080"
                          stroke="#19ABCF"
                          strokeWidth="3.5"
                          filter="url(#neonGlowCyan)"
                        />
                        {/* Center VS Badge */}
                        <g transform={`translate(${currentSplitX - 35}, 520)`}>
                          <rect x="0" y="0" width="70" height="36" rx="18" fill="#0B0F17" stroke="#19ABCF" strokeWidth="2" />
                          <text x="35" y="23" fill="#19ABCF" fontSize="12" fontWeight="bold" textAnchor="middle">
                            VS
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Cinematic In-Scene Badges for Scene 1 & Scene 3 */}
                    {t < 4 && (
                      <g transform="translate(80, 80)" opacity={s1Opacity}>
                        <text x="24" y="38" fill="#FFFFFF" fontSize="32" fontWeight="800">
                          Traditional Energy Approach
                        </text>
                      </g>
                    )}

                    {t >= 6 && t < 11 && (
                      <g transform="translate(80, 80)">
                        <text x="24" y="38" fill="#FFFFFF" fontSize="32" fontWeight="800">
                          Modern Solar Energy Approach
                        </text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
