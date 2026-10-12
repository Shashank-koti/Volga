import React from 'react';
import Container from '../common/Container';
import {
  BatteryCharging,
  Zap,
  ArrowRight,
} from 'lucide-react';

/**
 * EnergyStorageSection (Section 04)
 *
 * Battery Energy Storage: Battery charges from solar surplus and powers facility.
 * Simple, meaningful layout:
 * - Top: Centered section heading matching Volga home sections
 * - Left: Compact, photographic BESS installation image
 * - Right: Clear narrative, concise key benefits, and direct navigation
 */
export default function EnergyStorageSection({ onNavigate }) {
  return (
    <section
      id="energy-storage"
      className="relative py-14 sm:py-18 lg:py-20 bg-[#070A0F] text-white overflow-hidden"
    >
      {/* Background Architectural Blueprint & Ambient Glows */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#10B981]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#0B7285]/12 blur-[150px] pointer-events-none rounded-full" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* TOP: Section Header                                            */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold tracking-tight text-white mb-3">
            BATTERY ENERGY STORAGE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#21D6B2] to-emerald-400">
              (BESS)
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Store excess daytime solar generation and discharge during peak tariff hours to guarantee continuous power and eliminate demand surcharges.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CONTENT: Compact Image + Clean Value Points                    */}
        {/* ============================================================== */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Compact Photographic Image (Decreased Size) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group max-w-md mx-auto">
              {/* Luxury Ambient Glow Behind Visual Box */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0B7285]/20 via-[#1AA3B6]/25 to-[#21D6B2]/20 rounded-2xl blur-lg opacity-75 pointer-events-none" />

              {/* Viewport Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#1AA3B6]/30 bg-[#061B1A] shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
                {/* Compact Aspect Ratio Photographic Image */}
                <div className="relative w-full aspect-[4/3] bg-[#051817] overflow-hidden">
                  <img
                    src="/images/bess-storage-system.jpg"
                    alt="Volga BESS Commercial Battery Energy Storage Installation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Vignette for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051817]/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Simple, Meaningful Points & CTA */}
          <div className="lg:col-span-7 space-y-5 text-left order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Charges from Solar Surplus &amp; Powers Your Facility
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Industrial Tier-1 LFP battery storage buffers midday rooftop solar generation and dispatches stored power when DISCOM grid tariffs spike.
              </p>
            </div>

            {/* 2 Simple Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#081816]/75 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1AA3B6]/15 text-[#1AA3B6] flex items-center justify-center shrink-0">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Solar Surplus Charge
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    Captures 100% of midday solar overproduction with zero curtailment.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081816]/75 border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-[#21D6B2] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Peak Shaving Discharge
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    Sub-20ms instant dispatch slashes maximum demand surcharges.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate && onNavigate('bess')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1AA3B6] to-[#21D6B2] text-[#051E1A] font-bold text-sm shadow-[0_0_20px_rgba(33,214,178,0.25)] hover:shadow-[0_0_28px_rgba(33,214,178,0.4)] transition-all duration-300"
              >
                <span>Explore Battery Storage (BESS)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
