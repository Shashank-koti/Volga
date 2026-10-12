import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import {
  Sun,
  BatteryCharging,
  Coins,
  BadgePercent,
  Building2,
  ArrowRight,
  Layers,
} from 'lucide-react';

/**
 * ConnectedEcosystemSection (Section 05)
 *
 * Full-screen interconnected energy and financing ecosystem:
 * - Full-width interactive microgrid canvas with flowing energy and financing conduits
 * - Strictly 4 core pillars: Solar, BESS, CAPEX, OPEX converging on your facility
 * - Clean, punchy cards below explaining simply and clearly what Volga will do
 */
export default function ConnectedEcosystemSection({ onNavigate }) {
  const [selectedPillar, setSelectedPillar] = useState('all'); // 'all' | 'solar' | 'bess' | 'capex' | 'opex'
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const pillars = [
    {
      id: 'solar',
      name: 'Solar Generation',
      short: 'Solar',
      tag: 'POWER SOURCE',
      icon: Sun,
      color: '#21D6B2',
      accentBg: 'bg-[#21D6B2]/15 text-[#21D6B2]',
      borderActive: 'border-[#21D6B2]/90 shadow-[0_0_24px_rgba(33,214,178,0.25)]',
      x: 220,
      y: 160,
      summary: 'Volga designs and installs high-yield commercial rooftop solar arrays tailored to your factory load.',
      page: 'rooftop-capex',
    },
    {
      id: 'bess',
      name: 'Battery Storage',
      short: 'BESS',
      icon: BatteryCharging,
      color: '#10B981',
      accentBg: 'bg-emerald-500/15 text-emerald-400',
      borderActive: 'border-emerald-400/90 shadow-[0_0_24px_rgba(52,211,153,0.25)]',
      x: 220,
      y: 440,
      summary: 'Volga integrates industrial batteries to store midday solar surplus and power your plant during expensive peak hours.',
      page: 'bess',
    },
    {
      id: 'capex',
      name: 'CAPEX Model',
      short: 'CAPEX',
      icon: Coins,
      color: '#1AA3B6',
      accentBg: 'bg-[#1AA3B6]/15 text-[#1AA3B6]',
      borderActive: 'border-[#1AA3B6]/90 shadow-[0_0_24px_rgba(26,163,182,0.25)]',
      x: 980,
      y: 160,
      summary: 'You own the solar asset on your balance sheet, gaining 40% tax depreciation write-offs and long-term free energy.',
      page: 'rooftop-capex',
    },
    {
      id: 'opex',
      name: 'OPEX / RESCO',
      short: 'OPEX',
      icon: BadgePercent,
      color: '#21D6B2',
      accentBg: 'bg-emerald-500/15 text-[#21D6B2]',
      borderActive: 'border-[#21D6B2]/90 shadow-[0_0_24px_rgba(33,214,178,0.25)]',
      x: 980,
      y: 440,
      summary: 'Volga funds, builds, and maintains the entire plant at ₹0 capital cost. You simply buy clean power at a steep discount.',
      page: 'rooftop-opex',
    },
  ];

  const flowOffset = (tick * 3.5) % 80;

  return (
    <section
      id="connected-ecosystem"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#070A0F] text-white overflow-hidden"
    >
      {/* Background Architectural Blueprint & Ambient Lighting */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0B7285]/15 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#10B981]/10 blur-[160px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================================== */}
        {/* 1. SECTION HEADER                                              */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1AA3B6]/30 bg-[#0A2622]/80 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(26,163,182,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#21D6B2] shadow-[0_0_8px_#21D6B2]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0]">
              THE CONNECTED VOLGA ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Solar, Storage &amp; Financing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#21D6B2] to-emerald-400">
              Connected Together
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Everything your facility needs—high-yield solar generation, battery storage, and flexible financing—converges seamlessly around your enterprise.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. COMPACT ANIMATION CANVAS                                    */}
        {/* ============================================================== */}
        <div className="relative max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Ambient Glow behind canvas */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0B7285]/15 via-[#1AA3B6]/20 to-[#21D6B2]/15 rounded-2xl blur-lg opacity-60 pointer-events-none" />

          {/* Main Viewport */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1AA3B6]/30 bg-[#061B1A] shadow-[0_15px_40px_rgba(0,0,0,0.8)] select-none">
            <div className="relative w-full aspect-[2/1] sm:aspect-[2.2/1] max-h-[360px] sm:max-h-[400px] bg-[#051817] overflow-hidden">
              <svg viewBox="0 0 1200 600" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="ecoHubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#21D6B2" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#0B7285" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#051817" stopOpacity="0" />
                  </radialGradient>

                  <filter id="ecoNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Digital Blueprint Background Grid */}
                <g stroke="#144A40" strokeWidth="0.8" opacity="0.3">
                  {Array.from({ length: 17 }).map((_, i) => (
                    <line key={`vx-${i}`} x1={i * 75} y1="0" x2={i * 75} y2="600" strokeDasharray="3 4" />
                  ))}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`hy-${i}`} x1="0" y1={i * 75} x2="1200" y2={i * 75} strokeDasharray="3 4" />
                  ))}
                </g>

                {/* Central Concentric Energy Pulse Rings around Enterprise */}
                <circle cx="600" cy="300" r="260" fill="none" stroke="#1AA3B6" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />
                <circle cx="600" cy="300" r="180" fill="none" stroke="#21D6B2" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.35" />
                <circle cx="600" cy="300" r="220" fill="url(#ecoHubGlow)" />

                {/* 4 Connected Conduits (Beziers to Center 600, 300) */}
                {pillars.map((p) => {
                  const isHighlighted = selectedPillar === 'all' || selectedPillar === p.id;
                  const isLeft = p.x < 600;
                  const isTop = p.y < 300;

                  // Smooth S-curve to central hub
                  const ctrlX1 = isLeft ? p.x + 160 : p.x - 160;
                  const ctrlY1 = p.y;
                  const ctrlX2 = isLeft ? 520 : 680;
                  const ctrlY2 = isTop ? 240 : 360;

                  const pathD = `M ${p.x} ${p.y} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, 600 300`;

                  return (
                    <g key={`conduit-${p.id}`}>
                      {/* Base Track */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke={isHighlighted ? p.color : '#164E44'}
                        strokeWidth={isHighlighted ? '3.5' : '1.5'}
                        strokeOpacity={isHighlighted ? '0.75' : '0.2'}
                      />

                      {/* Animated Flowing Pulse Stream */}
                      {isHighlighted && (
                        <path
                          d={pathD}
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="4"
                          strokeDasharray="14 28"
                          strokeDashoffset={-flowOffset}
                          strokeLinecap="round"
                          filter="url(#ecoNeonGlow)"
                        />
                      )}
                    </g>
                  );
                })}

                {/* 4 SATELLITE PILLAR NODES */}
                {pillars.map((p) => {
                  const isSelected = selectedPillar === p.id;
                  const isDimmed = selectedPillar !== 'all' && !isSelected;
                  const Icon = p.icon;

                  return (
                    <g
                      key={`pillar-node-${p.id}`}
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedPillar(selectedPillar === p.id ? 'all' : p.id)}
                      opacity={isDimmed ? 0.35 : 1}
                    >
                      {/* Outer Glow Halo */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isSelected ? 58 : 46}
                        fill="#072420"
                        stroke={isSelected ? '#FFFFFF' : p.color}
                        strokeWidth={isSelected ? 3 : 1.8}
                        filter="url(#ecoNeonGlow)"
                      />

                      {/* Inner Ring */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isSelected ? 44 : 35}
                        fill="#0A332B"
                        stroke={p.color}
                        strokeWidth="1"
                        strokeDasharray={isSelected ? '4 3' : 'none'}
                      />

                      {/* Icon Container */}
                      <g transform={`translate(${p.x - 14}, ${p.y - 14})`}>
                        <Icon size={28} color={isSelected ? '#FFFFFF' : p.color} strokeWidth={2.2} />
                      </g>

                      {/* Node Text Label */}
                      <text
                        x={p.x}
                        y={p.y > 300 ? p.y + 64 : p.y - 54}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="14"
                        fontWeight="bold"
                        fontFamily="monospace"
                        letterSpacing="0.04em"
                      >
                        {p.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                {/* CENTRAL HUB: YOUR FACILITY / VOLGA ECOSYSTEM (600, 300) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedPillar('all')}
                >
                  {/* Outer Core */}
                  <circle cx="600" cy="300" r="82" fill="#06201B" stroke="#21D6B2" strokeWidth="2.8" />
                  <circle cx="600" cy="300" r="70" fill="#0A2D27" stroke="#1AA3B6" strokeWidth="1.2" strokeDasharray="5 4" />
                  <circle cx="600" cy="300" r="58" fill="#0E4238" />

                  {/* Factory / Enterprise Icon */}
                  <g transform={`translate(585, 275)`}>
                    <Building2 size={30} color="#21D6B2" strokeWidth={2} />
                  </g>

                  {/* Center Text */}
                  <text x="600" y="325" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" fontFamily="monospace">
                    VOLGA
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. FOUR CLEAR CARDS MATCHING THE ANIMATION                     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {pillars.map((p) => {
            const isSelected = selectedPillar === p.id;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => setSelectedPillar(p.id)}
                className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${isSelected
                  ? `bg-[#0A2622]/95 ${p.borderActive}`
                  : 'bg-[#081816]/65 border-white/10 hover:border-[#1AA3B6]/40 hover:bg-[#0B211E]/75'
                  }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.accentBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {p.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2">
                    {p.name}
                  </h3>

                  {/* What Volga Will Do (Simple & Punchy) */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {p.summary}
                  </p>
                </div>

                {/* Outcome Benefit & Action */}
                <div className="pt-3 border-t border-white/5 mt-auto">

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNavigate) onNavigate(p.page);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-white font-semibold hover:text-[#21D6B2] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b from-[#1AA3B6] to-[#21D6B2]" />
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
