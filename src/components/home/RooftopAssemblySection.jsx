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
      accentBg: 'bg-[#19ABCF]/15 text-[#19ABCF]',
      activeBorder: 'border-[#19ABCF]/90 shadow-[0_0_20px_rgba(25,171,207,0.3)]',
      indicator: '#19ABCF',
    },
    {
      id: 2,
      name: 'Precision Rail Mounting',
      time: 3.5,
      range: [3.0, 6.0],
      title: 'Corrosion-Resistant Racking',
      desc: 'Marine-grade aluminum mounting tracks locked securely to the facility roof with zero leakage risk.',
      icon: Layers,
      accentBg: 'bg-[#E25121]/15 text-[#E25121]',
      activeBorder: 'border-[#E25121]/90 shadow-[0_0_20px_rgba(226,81,33,0.3)]',
      indicator: '#E25121',
    },
    {
      id: 3,
      name: 'PV Assembly Population',
      time: 6.5,
      range: [6.0, 9.0],
      title: 'Monocrystalline PV Deployment',
      desc: 'High-density tier-1 solar modules locked into high-efficiency arrays calibrated for optimal irradiance.',
      icon: Sun,
      accentBg: 'bg-[#C0020F]/15 text-[#C0020F]',
      activeBorder: 'border-[#C0020F]/90 shadow-[0_0_22px_rgba(192,2,15,0.3)]',
      indicator: '#C0020F',
    },
    {
      id: 4,
      name: 'Live Generation & Dispatch',
      time: 9.5,
      range: [9.0, 12.0],
      title: 'DC-to-AC Live Generation',
      desc: 'Smart MPPT inverters convert direct current into clean electricity immediately powering factory load.',
      icon: Zap,
      accentBg: 'bg-[#19ABCF]/15 text-[#19ABCF]',
      activeBorder: 'border-[#19ABCF]/90 shadow-[0_0_20px_rgba(25,171,207,0.3)]',
      indicator: '#19ABCF',
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
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C0020F]/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#19ABCF]/12 blur-[160px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* ============================================================== */}
          {/* LEFT: Pure Cinematic Animation Viewport (Clean Frame)          */}
          {/* Boundary clutter (headers, scrubbers, timers, buttons) removed  */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1">
            <div className="relative group">
              {/* Luxury Ambient Glow Behind Animation Box */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C0020F]/20 via-[#E25121]/20 to-[#19ABCF]/20 rounded-2xl lg:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Viewport Frame */}
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-[#0B0F17] shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-pointer select-none"
                title={isPlaying ? 'Click animation to Pause' : 'Click animation to Play'}
              >
                {/* 16:9 Aspect Ratio SVG Canvas Stage */}
                <div className="relative w-full aspect-video bg-[#070A0F] overflow-hidden">
                  <svg viewBox="0 0 1000 562" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="skyGrad02" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0B1320" />
                        <stop offset="100%" stopColor="#070A0F" />
                      </linearGradient>

                      <linearGradient id="pvCellGrad" x1="0%" y1="0%" x2="1" y2="1">
                        <stop offset="0%" stopColor="#081829" />
                        <stop offset="50%" stopColor="#0E2C44" />
                        <stop offset="100%" stopColor="#06121E" />
                      </linearGradient>

                      <filter id="cyanGlow02" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="orangeGlow02" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="redGlow02" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Dark Blueprint Sky */}
                    <rect width="1000" height="562" fill="url(#skyGrad02)" />

                    {/* Technical Blueprint Coordinate Grid */}
                    <g stroke="#1E293B" strokeWidth="0.8" opacity="0.35">
                      {Array.from({ length: 17 }).map((_, i) => (
                        <line key={`vx-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="562" strokeDasharray="3 4" />
                      ))}
                      {Array.from({ length: 14 }).map((_, i) => (
                        <line key={`hy-${i}`} x1="0" y1={i * 40} x2="1000" y2={i * 40} strokeDasharray="3 4" />
                      ))}
                    </g>

                    {/* Solar Irradiance Source (Top Right) */}
                    <g transform="translate(860, 90)">
                      <circle cx="0" cy="0" r="54" fill="#E25121" fillOpacity={genProg > 0 ? '0.22' : '0.1'} filter="blur(18px)" />
                      <circle cx="0" cy="0" r="28" fill="#E25121" fillOpacity="0.85" filter="url(#orangeGlow02)" />
                      <circle cx="0" cy="0" r="18" fill="#FFFFFF" />
                      {genProg > 0 && (
                        <polygon points="0,0 -380,180 -260,230" fill="#E25121" fillOpacity="0.18" />
                      )}
                    </g>

                    {/* Architectural Blueprint Facility (Isometric 2.5D) */}
                    <g transform="translate(240, 150)">
                      {/* Left Wall */}
                      <polygon points="40,140 220,60 220,240 40,320" fill="#090E17" stroke="#1E293B" strokeWidth="1.8" />
                      {/* Front Facade */}
                      <polygon points="220,60 540,150 540,330 220,240" fill="#0B1320" stroke="#19ABCF" strokeWidth="1.5" strokeOpacity="0.5" />

                      {/* Right Annex */}
                      <polygon points="540,150 680,110 680,270 540,310" fill="#070C14" stroke="#1E293B" strokeWidth="1.5" />

                      {/* Illuminated Ribbon Windows */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <polygon
                          key={`w-${i}`}
                          points={`560,${165 + i * 30} 660,${135 + i * 30} 660,${152 + i * 30} 560,${182 + i * 30}`}
                          fill="#19ABCF"
                          fillOpacity="0.4"
                          stroke="#19ABCF"
                          strokeWidth="1"
                          filter="url(#cyanGlow02)"
                        />
                      ))}

                      {/* Industrial Roof Blueprint Surface */}
                      <polygon points="40,140 220,60 540,150 360,230" fill="#0A1424" stroke="#19ABCF" strokeWidth="2" />

                      {/* PHASE 1: STRUCTURAL LiDAR SCAN (0–3s) */}
                      {t < 4 && (
                        <g opacity={Math.max(0, 1 - (t - 3) / 1)}>
                          {/* Sweeping Cyan LiDAR Beam */}
                          <line
                            x1={70 + scanX * 0.7}
                            y1={130 - scanX * 0.15}
                            x2={170 + scanX * 0.7}
                            y2={210 + scanX * 0.04}
                            stroke="#19ABCF"
                            strokeWidth="3.5"
                            filter="url(#cyanGlow02)"
                          />
                          {/* Structural Target Nodes (Crimson Red) */}
                          <circle cx="160" cy="115" r="4.5" fill="#C0020F" filter="url(#redGlow02)">
                            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.2s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="280" cy="110" r="4.5" fill="#C0020F" filter="url(#redGlow02)">
                            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.2s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="380" cy="155" r="4.5" fill="#C0020F" filter="url(#redGlow02)">
                            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.2s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="260" cy="165" r="4.5" fill="#C0020F" filter="url(#redGlow02)">
                            <animate attributeName="r" values="3.5;5.5;3.5" dur="1.2s" repeatCount="indefinite" />
                          </circle>
                          {/* HUD Readout */}
                          <text x="50" y="30" fill="#19ABCF" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
                            [LiDAR SCAN] 3D STRUCTURAL LOAD 100% OK
                          </text>
                        </g>
                      )}

                      {/* PHASE 2: PRECISION RACKING MOUNTING (3–6s) */}
                      {t >= 2.5 && (
                        <g opacity={t < 3 ? (t - 2.5) * 2 : 1}>
                          <line x1="140" y1="120" x2="360" y2="182" stroke="#E25121" strokeWidth="3" strokeDasharray="8 4" filter="url(#orangeGlow02)" />
                          <line x1="180" y1="100" x2="400" y2="162" stroke="#E25121" strokeWidth="3" strokeDasharray="8 4" filter="url(#orangeGlow02)" />
                          <line x1="220" y1="80" x2="440" y2="142" stroke="#E25121" strokeWidth="3" strokeDasharray="8 4" filter="url(#orangeGlow02)" />
                          {rackProg < 1 && rackProg > 0 && (
                            <circle cx={140 + rackProg * 220} cy={120 + rackProg * 62} r="5" fill="#E25121" filter="url(#orangeGlow02)" />
                          )}
                          {t >= 3 && t < 6.5 && (
                            <text x="50" y="30" fill="#E25121" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
                              [RACKING] MARINE-GRADE ALUMINUM RAILS SECURED
                            </text>
                          )}
                        </g>
                      )}

                      {/* PHASE 3: MONOCRYSTALLINE PV POPULATION (6–9s) */}
                      {t >= 5.5 && (
                        <g opacity={t < 6 ? (t - 5.5) * 2 : 1}>
                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= i * 0.22;
                            return show ? (
                              <g key={`p1-${i}`} transform={`translate(${130 + i * 55}, ${115 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#19ABCF" strokeWidth="1.4" filter="url(#cyanGlow02)" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#C0020F" strokeWidth="0.8" />
                              </g>
                            ) : null;
                          })}

                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= 0.2 + i * 0.2;
                            return show ? (
                              <g key={`p2-${i}`} transform={`translate(${175 + i * 55}, ${95 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#19ABCF" strokeWidth="1.4" filter="url(#cyanGlow02)" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#C0020F" strokeWidth="0.8" />
                              </g>
                            ) : null;
                          })}

                          {Array.from({ length: 4 }).map((_, i) => {
                            const show = pvProg >= 0.4 + i * 0.15;
                            return show ? (
                              <g key={`p3-${i}`} transform={`translate(${220 + i * 55}, ${75 + i * 15}) skewX(-24) skewY(12)`}>
                                <rect width="48" height="26" rx="2" fill="url(#pvCellGrad)" stroke="#19ABCF" strokeWidth="1.4" filter="url(#cyanGlow02)" />
                                <line x1="24" y1="0" x2="24" y2="26" stroke="#C0020F" strokeWidth="0.8" />
                              </g>
                            ) : null;
                          })}

                          {t >= 6 && t < 9.5 && (
                            <text x="50" y="30" fill="#19ABCF" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
                              [PV ARRAY] 600 kWp MONOCRYSTALLINE POPULATED
                            </text>
                          )}
                        </g>
                      )}

                      {/* PHASE 4: CONDUITS, INVERTER & LIVE GENERATION (9–12s) */}
                      {t >= 8.5 && (
                        <g opacity={genProg}>
                          {/* Crimson DC Conduit Track */}
                          <path d="M420,175 L450,185 L450,260" fill="none" stroke="#C0020F" strokeWidth="3" />
                          {/* Flowing Cyan Energy Stream */}
                          <path
                            d="M420,175 L450,185 L450,260"
                            fill="none"
                            stroke="#19ABCF"
                            strokeWidth="3.5"
                            strokeDasharray="10 14"
                            strokeDashoffset={-powerPulse}
                            filter="url(#cyanGlow02)"
                          />

                          {/* Smart Inverter Unit */}
                          <g transform="translate(435, 260)">
                            <rect width="32" height="40" rx="4" fill="#0B1320" stroke="#19ABCF" strokeWidth="1.8" />
                            <circle cx="16" cy="14" r="3.5" fill="#C0020F" filter="url(#redGlow02)" />
                            <text x="16" y="30" fill="#E25121" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                              600kW
                            </text>
                          </g>

                          {/* Power Distribution Waves around Facility */}
                          <circle cx="450" cy="280" r={20 + (t * 20) % 40} fill="none" stroke="#19ABCF" strokeWidth="1.2" opacity="0.4" />
                          <circle cx="450" cy="280" r={35 + (t * 20) % 40} fill="none" stroke="#E25121" strokeWidth="1" opacity="0.3" />

                          <text x="50" y="30" fill="#E25121" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
                            [LIVE DISPATCH] 600 kW POWERING FACTORY LOAD
                          </text>
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C0020F] via-[#E25121] to-[#19ABCF]">
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
                        ? `bg-[#0E131F]/90 ${st.activeBorder}`
                        : 'bg-[#0B0F17]/60 border-white/5 hover:border-white/20 hover:bg-[#0E131F]/70'
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
                      <div
                        className="absolute left-0 top-2 bottom-2 w-1 rounded-r"
                        style={{ backgroundColor: st.indicator }}
                      />
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
