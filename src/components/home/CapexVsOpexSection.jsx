import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import {
  Coins,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react';

/**
 * CapexVsOpexSection (Section 05)
 *
 * Clean, visual comparison of CAPEX vs OPEX with high-res imagery.
 * Concise, uncluttered, and directly focused on the core financial differences.
 */
export default function CapexVsOpexSection({ onNavigate }) {
  const [model, setModel] = useState('capex'); // 'capex' | 'opex'

  const models = [
    {
      id: 'capex',
      title: 'CAPEX (Asset Ownership)',
      desc: '100% solar asset ownership on your balance sheet with rapid 3–4 year payback and decades of free energy.',
      icon: Coins,
      accentBg: 'bg-[#1AA3B6]/15 text-[#1AA3B6]',
      activeBorder: 'border-[#1AA3B6]/90 shadow-[0_0_24px_rgba(26,163,182,0.25)]',
      image: '/images/capex-model.jpg',
      imageAlt: 'CAPEX Rooftop Solar Facility Asset',
      badge: '40% TAX DEPRECIATION',
      points: [
        '40% accelerated tax depreciation (Year 1)',
        '3–4 years full capital payback',
        'Decades of virtually free clean power',
      ],
      ctaPage: 'rooftop-capex',
    },
    {
      id: 'opex',
      title: 'OPEX / RESCO (Zero Upfront)',
      desc: 'Volga finances, builds, and maintains the plant. You pay only for delivered power at a 30–50% discount.',
      icon: BadgePercent,
      accentBg: 'bg-emerald-500/15 text-[#21D6B2]',
      activeBorder: 'border-[#21D6B2]/90 shadow-[0_0_24px_rgba(33,214,178,0.28)]',
      image: '/images/opex-model.jpg',
      imageAlt: 'OPEX RESCO Solar Operations & Maintenance',
      badge: '30–50% TARIFF SAVINGS',
      points: [
        '₹0 upfront capital & zero balance sheet debt',
        'Immediate 30–50% cheaper electricity rates',
        '100% maintenance & performance on Volga',
      ],
      ctaPage: 'rooftop-opex',
    },
  ];

  const active = models.find((m) => m.id === model) || models[0];

  return (
    <section
      id="capex-vs-opex"
      className="relative py-14 sm:py-18 lg:py-20 bg-[#070A0F] text-white overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#0B7285]/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#1AA3B6]/12 blur-[150px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            CAPEX{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#21D6B2] to-emerald-400">
              vs. OPEX (RESCO)
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Choose full asset ownership with accelerated tax depreciation, or zero upfront capital with guaranteed tariff savings.
          </p>
        </div>

        {/* Side-by-Side: Cards on Left, Image Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Model Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {models.map((m) => {
              const isActive = model === m.id;
              const Icon = m.icon;

              return (
                <div
                  key={m.id}
                  onClick={() => setModel(m.id)}
                  className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                    ? `bg-[#0A2622]/95 ${m.activeBorder}`
                    : 'bg-[#081816]/60 border-white/10 hover:border-[#1AA3B6]/40 hover:bg-[#0B211E]/70'
                    }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? m.accentBg : 'bg-white/5 text-slate-400'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {m.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                        {m.desc}
                      </p>

                      <div className="space-y-1.5 pt-1 border-t border-white/5">
                        {m.points.map((pt, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#21D6B2]' : 'text-slate-500'
                                }`}
                            />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b from-[#1AA3B6] to-[#21D6B2]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Photographic Image Viewport */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-[#1AA3B6]/30 bg-[#061B1A] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

              {/* 16:9 Image Viewport with Dynamic Transition */}
              <div className="relative w-full aspect-video bg-[#051817] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={model}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gradient Vignette for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051817] via-[#051817]/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Benefits Table (4 Rows) */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-white/10 bg-[#061B19]/80 backdrop-blur-xl p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-[11px]">
                  <th className="py-2.5 px-3 w-1/4">Key Benefit</th>
                  <th className="py-2.5 px-3 w-[37.5%] text-[#1AA3B6] font-bold">
                    CAPEX Benefits
                  </th>
                  <th className="py-2.5 px-3 w-[37.5%] text-[#21D6B2] font-bold">
                    OPEX (RESCO) Benefits
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    feature: 'Initial Investment',
                    capex: 'Full asset purchase (self-funded or green loan)',
                    opex: '₹0 upfront capital (100% Volga funded)',
                  },
                  {
                    feature: 'Tax Benefits',
                    capex: '40% accelerated tax depreciation (Section 32)',
                    opex: '100% tax-deductible operating power bill',
                  },
                  {
                    feature: 'Energy Savings',
                    capex: '3–4 year payback, free power for years 5–25',
                    opex: 'Immediate 30–50% tariff savings from Day 1',
                  },
                  {
                    feature: 'Maintenance & Risk',
                    capex: 'Owned asset with standard turnkey warranty',
                    opex: '100% Volga-managed O&M and generation risk',
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1AA3B6] shrink-0" />
                        <span>{row.capex}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#21D6B2] shrink-0" />
                        <span>{row.opex}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Container>
    </section >
  );
}
