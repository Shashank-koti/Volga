import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import {
  Sparkles,
  Layers,
  Sun,
  Zap,
} from 'lucide-react';

/**
 * RooftopAssemblySection (Section 02)
 *
 * Cinematic animated sequence: Solar panels assemble onto a commercial factory roof.
 * Alternating Layout: Pure animation on Left, synchronized assembly steps on Right.
 *
 * Sequence:
 * 1. Precision Structural Scan (0–3s)
 * 2. Racking & Rails Mounting (3–6s)
 * 3. Monocrystalline PV Panels Population (6–9s)
 * 4. Interconnection & Live Clean Generation (9–12s)
 */
export default function RooftopAssemblySection({ onNavigate }) {
  const [currentTime, setCurrentTime] = useState(0); // 0 to 12s
  const [isPlaying, setIsPlaying] = useState(true);
  const animFrameRef = useRef(null);

  const TOTAL_DURATION = 12.0;

  const steps = [
    {
      id: 1,
      name: 'Structural LiDAR Scan',
      time: 0.5,
      range: [0, 3.0],
      title: 'Structural Scan & Load Assessment',
      desc: '3D LiDAR scan verifies roof load capacity, wind-load resistance, and purlin structural integrity.',
      icon: Sparkles,
      accentBg: 'bg-[#1AA3B6]/15 text-[#1AA3B6]',
      activeBorder: 'border-[#1AA3B6]/90 shadow-[0_0_20px_rgba(26,163,182,0.25)]',
    },
    {
      id: 2,
      name: 'Precision Rail Mounting',
      time: 3.5,
      range: [3.0, 6.0],
      title: 'Corrosion-Resistant Racking',
      desc: 'Marine-grade aluminum mounting tracks locked securely to the facility roof with zero leakage risk.',
      icon: Layers,
      accentBg: 'bg-emerald-500/15 text-emerald-400',
      activeBorder: 'border-emerald-400/90 shadow-[0_0_20px_rgba(52,211,153,0.25)]',
    },
    {
      id: 3,
      name: 'PV Assembly Population',
      time: 6.5,
      range: [6.0, 9.0],
      title: 'Monocrystalline PV Deployment',
      desc: 'High-density tier-1 solar modules locked into high-efficiency arrays calibrated for optimal irradiance.',
      icon: Sun,
      accentBg: 'bg-[#21D6B2]/15 text-[#21D6B2]',
      activeBorder: 'border-[#21D6B2]/90 shadow-[0_0_22px_rgba(33,214,178,0.28)]',
    },
    {
      id: 4,
      name: 'Live Generation & Dispatch',
      time: 9.5,
      range: [9.0, 12.0],
      title: 'DC-to-AC Live Generation',
      desc: 'Smart MPPT inverters convert direct current into clean electricity immediately powering factory load.',
      icon: Zap,
      accentBg: 'bg-teal-500/15 text-teal-300',
      activeBorder: 'border-teal-300/90 shadow-[0_0_20px_rgba(20,184,166,0.25)]',
    },
  ];

  // Active step synced to animation
  const currentStepIndex = steps.findIndex(
    (s) => currentTime >= s.range[0] && currentTime < s.range[1]
  );
  const activeStepIdx = currentStepIndex !== -1 ? currentStepIndex : 0;

  useEffect(() => {
    let prev = performance.now();
    const loop = (timestamp) => {
      if (isPlaying) {
        const delta = (timestamp - prev) / 1000;
        setCurrentTime((t) => {
          let next = t + delta;
          if (next >= TOTAL_DURATION) next = 0;
          return next;
        });
      }
      prev = timestamp;
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const t = currentTime;

  // Phase progressions
  const scanProg = Math.min(1, Math.max(0, t / 3.0));
  const rackProg = Math.min(1, Math.max(0, (t - 3.0) / 3.0));
  const pvProg = Math.min(1, Math.max(0, (t - 6.0) / 3.0));
  const genProg = Math.min(1, Math.max(0, (t - 9.0) / 3.0));

  const scanX = scanProg * 500;
  const powerPulse = (t * 140) % 200;

  return (
    <section
      id="rooftop-assembly"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#070A0F] text-white overflow-hidden"
    >
      {/* Background Architectural Blueprint & Ambient Glows */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1AA3B6]/12 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0B7285]/12 blur-[160px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* ============================================================== */}
          {/* LEFT: Pure Cinematic Animation Viewport (Clean Frame)          */}
          {/* Boundary clutter (headers, scrubbers, timers, buttons) removed  */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1">
            <div className="relative group">
              {/* Luxury Ambient Glow Behind Animation Box */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0B7285]/20 via-[#1AA3B6]/25 to-[#21D6B2]/20 rounded-2xl lg:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Viewport Frame */}
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-[#1AA3B6]/30 bg-[#061B1A] shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer select-none"
                title={isPlaying ? 'Click animation to Pause' : 'Click animation to Play'}
              >
                {/* 16:9 Aspect Ratio SVG Canvas Stage */}
                <div className="relative w-full aspect-video bg-[#051817] overflow-hidden">
                  <svg viewBox="0 0 1000 562" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="skyGrad02" x1="0%" y1="0%" x2="0%" y2="1">
                        <stop offset="0%" stopColor="#0B332E" />
                        <stop offset="100%" stopColor="#051817" />
                      </linearGradient>

                      <linearGradient id="pvCellGrad" x1="0%" y1="0%" x2="1" y2="1">
                        <stop offset="0%" stopColor="#084E44" />
                        <stop offset="50%" stopColor="#0F6D5F" />
                        <stop offset="100%" stopColor="#063D35" />
                      </linearGradient>

                      <filter id="tealGlow02" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Sky */}
                    <rect width="1000" height="562" fill="url(#skyGrad02)" />

                    {/* Ground Grid */}
                    <g opacity="0.25">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <line key={`g-${i}`} x1="0" y1={360 + i * 26} x2="1000" y2={360 + i * 26} stroke="#1AA3B6" strokeWidth="1" strokeDasharray="4 8" />
                      ))}
                    </g>

                    {/* Sun (activates strongly in generation phase) */}
                    <g transform="translate(850, 90)">
                      <circle cx="0" cy="0" r="48" fill="#FDE047" fillOpacity={genProg > 0 ? '0.2' : '0.08'} filter="blur(16px)" />
                      <circle cx="0" cy="0" r="26" fill="#FDE047" fillOpacity="0.85" />
                      <circle cx="0" cy="0" r="18" fill="#FFFFFF" />
                      {genProg > 0 && (
                        <polygon points="0,0 -340,160 -240,210" fill="#FDE047" fillOpacity="0.25" />
                      )}
                    </g>

                    {/* Architectural Factory Facility (Isometric 2.5D) */}
                    <g transform="translate(240, 150)">
                      {/* Back / Left Shadow Wall */}
                      <polygon points="40,140 220,60 220,240 40,320" fill="#0A2A26" stroke="#124A42" strokeWidth="2" />
                      {/* Front Facade */}
                      <polygon points="220,60 540,150 540,330 220,240" fill="#0E3D36" stroke="#195F54" strokeWidth="2" />

                      {/* Office Annex (Right) */}
                      <polygon points="540,150 680,110 680,270 540,310" fill="#09312B" stroke="#135248" strokeWidth="2" />

                      {/* Glass windows on Office */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <polygon
                          key={`w-${i}`}
                          points={`560,${165 + i * 30} 660,${135 + i * 30} 660,${152 + i * 30} 560,${182 + i * 30}`}
                          fill="#21D6B2"
                          fillOpacity="0.4"
                          stroke="#A7F3D0"
                          strokeWidth="0.8"
                        />
                      ))}

                      {/* Industrial Roof Plane */}
                      <polygon points="40,140 220,60 540,150 360,230" fill="#0B302B" stroke="#1AA3B6" strokeWidth="2" />

                      {/* PHASE 1: STRUCTURAL SCAN (0–3s) */}
                      {t < 4 && (
                        <g opacity={Math.max(0, 1 - (t - 3) / 1)}>
                          <line
                            x1={70 + scanX * 0.7}
                            y1={130 - scanX * 0.15}
                            x2={170 + scanX * 0.7}
                            y2={210 + scanX * 0.04}
                            stroke="#21D6B2"
                            strokeWidth="3"
                            filter="url(#tealGlow02)"
                          />
                          <circle cx="160" cy="115" r="4" fill="#10B981" />
                          <circle cx="280" cy="110" r="4" fill="#10B981" />
                          <circle cx="380" cy="155" r="4" fill="#10B981" />
                          <circle cx="260" cy="165" r="4" fill="#10B981" />
                          <text x="120" y="80" fill="#A7F3D0" fontSize="10" fontFamily="monospace" fontWeight="bold">
                            LiDAR SCAN: LOAD 100% OK
                          </text>
                        </g>
                      )}

                      {/* PHASE 2: RACKING & MOUNTING TRACKS (3–6s) */}
                      {t >= 2.5 && (
                        <g opacity={t < 3 ? (t - 2.5) * 2 : 1}>
                          <line x1="140" y1="120" x2="360" y2="182" stroke="#6EE7B7" strokeWidth="2.5" strokeDasharray="6 3" />
                          <line x1="180" y1="100" x2="400" y2="162" stroke="#6EE7B7" strokeWidth="2.5" strokeDasharray="6 3" />
                          <line x1="220" y1="80" x2="440" y2="142" stroke="#6EE7B7" strokeWidth="2.5" strokeDasharray="6 3" />
                          {rackProg < 1 && rackProg > 0 && (
                            <circle cx={140 + rackProg * 220} cy={120 + rackProg * 62} r="5" fill="#21D6B2" filter="url(#tealGlow02)" />
                          )}
                        </g>
                      )}

                      {/* PHASE 3: PV PANEL ASSEMBLY POPULATION (6–9s) */}
                      {t >= 5.5 && (
                        <g opacity={t < 6 ? (t - 5.5) * 2 : 1}>
                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= i * 0.22;
                            return show ? (
                              <g key={`p1-${i}`} transform={`translate(${130 + i * 55}, ${115 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#21D6B2" strokeWidth="1.2" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#1AA3B6" strokeWidth="0.6" />
                              </g>
                            ) : null;
                          })}

                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= 0.2 + i * 0.2;
                            return show ? (
                              <g key={`p2-${i}`} transform={`translate(${175 + i * 55}, ${95 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#21D6B2" strokeWidth="1.2" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#1AA3B6" strokeWidth="0.6" />
                              </g>
                            ) : null;
                          })}

                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= 0.4 + i * 0.15;
                            return show ? (
                              <g key={`p3-${i}`} transform={`translate(${220 + i * 55}, ${75 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#21D6B2" strokeWidth="1.2" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#1AA3B6" strokeWidth="0.6" />
                              </g>
                            ) : null;
                          })}
                        </g>
                      )}

                      {/* PHASE 4: CONDUITS, INVERTER & LIVE GENERATION (9–12s) */}
                      {t >= 8.5 && (
                        <g opacity={genProg}>
                          <path d="M420,175 L450,185 L450,260" fill="none" stroke="#21D6B2" strokeWidth="3" />
                          <path
                            d="M420,175 L450,185 L450,260"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="3.5"
                            strokeDasharray="10 14"
                            strokeDashoffset={-powerPulse}
                            filter="url(#tealGlow02)"
                          />

                          <g transform="translate(435, 260)">
                            <rect width="30" height="38" rx="3" fill="#061E1A" stroke="#21D6B2" strokeWidth="1.5" />
                            <circle cx="15" cy="14" r="3" fill="#10B981" filter="url(#tealGlow02)" />
                            <text x="15" y="28" fill="#A7F3D0" fontSize="6" fontFamily="monospace" textAnchor="middle">
                              600kW
                            </text>
                          </g>

                          <g fill="#10B981" opacity={0.85}>
                            <rect x="250" y="270" width="18" height="20" rx="2" />
                            <rect x="290" y="285" width="18" height="20" rx="2" />
                            <rect x="330" y="300" width="18" height="20" rx="2" />
                          </g>
                        </g>
                      )}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT: Narrative & Synchronized 4 Assembly Stages              */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 text-left order-1 lg:order-2">

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold tracking-tight text-white leading-[1.14]"
            >
              Turnkey Solar Panels{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#21D6B2] to-emerald-400">
                Assemble on Your Facility
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
              Precision 3D structural analysis, non-penetrating aluminum racking, and rapid commissioning engineered for commercial rooftops with zero operational downtime.
            </motion.p>

            {/* Interactive Synchronized Assembly Stages */}
            <div className="space-y-2.5 pt-1">
              {steps.map((st, idx) => {
                const isActive = activeStepIdx === idx;
                const Icon = st.icon;

                return (
                  <div
                    key={st.id}
                    onClick={() => setCurrentTime(st.time)}
                    className={`group relative p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${isActive
                        ? `bg-[#0A2622]/90 ${st.activeBorder}`
                        : 'bg-[#081816]/60 border-white/5 hover:border-[#1AA3B6]/30 hover:bg-[#0B211E]/70'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? st.accentBg : 'bg-white/5 text-slate-400 group-hover:text-white'
                          }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4
                            className={`text-xs sm:text-sm font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                              }`}
                          >
                            {st.title}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                          {st.desc}
                        </p>
                      </div>
                    </div>

                    {/* Active Glow Accent Line */}
                    {isActive && (
                      <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#21D6B2]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
