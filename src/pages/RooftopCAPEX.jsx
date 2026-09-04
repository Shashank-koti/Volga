import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { capexEPCSteps } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  Sun,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Check,
  FileCheck,
  Wrench,
  Sparkles,
  DollarSign,
} from 'lucide-react';

export default function RooftopCAPEX({ onNavigate }) {
  const stepsFlow = [
    { title: 'YOU INVEST', desc: 'Direct capital allocation' },
    { title: 'WE DESIGN', desc: 'Precision 3D engineering' },
    { title: 'WE BUILD', desc: 'Tier-1 turnkey EPC' },
    { title: 'YOU OWN', desc: '100% asset ownership' },
    { title: 'YOU SAVE', desc: 'Decades of free energy' },
  ];

  const benefits = [
    {
      title: 'Reduced Electricity Costs',
      desc: 'Lower your facility’s blended grid tariff by up to 65%-80%, shielding your operating margins against rising grid power tariffs.',
      icon: TrendingUp,
    },
    {
      title: 'Attractive Long-Term ROI',
      desc: 'Achieve project breakeven within 3 to 4 years. Plus benefit from 40% accelerated tax depreciation benefits in Year 1.',
      icon: DollarSign,
    },
    {
      title: 'Clean & Sustainable Generation',
      desc: 'Significantly reduce scope-2 carbon emissions, helping achieve ESG sustainability charters and corporate supply chain audits.',
      icon: ShieldCheck,
    },
    {
      title: 'Energy Cost Stability',
      desc: 'Lock in predictable electricity costs for 25+ years with Tier-1 bifacial panels backed by linear performance guarantees.',
      icon: Zap,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Rooftop Solar – CAPEX Model"
        highlight="CAPEX Model"
        description="Under the CAPEX model, Volga Solar Solutions designs and installs rooftop solar systems where the customer owns the asset and benefits from long-term energy savings."
        onNavigate={onNavigate}
      />

      {/* Interactive Process Flow: YOU INVEST -> WE DESIGN -> WE BUILD -> YOU OWN -> YOU SAVE */}
      <section className="py-20 bg-white border-b border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
              How CAPEX Delivers Maximum Long-Term Value
            </h2>
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 relative"
          >
            {stepsFlow.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center flex flex-col justify-center items-center relative group hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-light text-primary font-black text-sm flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <div className="font-extrabold text-sm sm:text-base text-heading tracking-tight">
                  {step.title}
                </div>
                <div className="text-xs text-muted mt-1 leading-snug">
                  {step.desc}
                </div>

                {idx < stepsFlow.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-neutral-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* EPC Scope Timeline (01 to 05) */}
      <section className="py-24 bg-background relative">
        <Container>
          <SectionHeading
            badge="Turnkey Engineering"
            title="Our EPC Scope of Work"
            highlight="EPC Scope"
            subtitle="From structural roof inspection to statutory net-metering synchronization, our in-house engineering team executes every milestone."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {capexEPCSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-primary/40 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black font-mono text-primary/80 group-hover:text-primary transition-colors shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-muted group-hover:bg-primary-light group-hover:text-primary transition-colors shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Industrial Rooftop Installation Showcase */}
      <section className="py-24 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-elevated border border-border">
              <img
                src="/images/rooftop-capex.jpg"
                alt="Industrial Factory Rooftop Solar Installation"
                className="w-full h-[480px] sm:h-[520px] object-cover"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                Turnkey Engineering on Industrial Rooftops
              </h3>
              <p className="text-sm sm:text-base text-body leading-relaxed">
                Volga designs and commissions large-scale commercial rooftop solar installations on standing seam, PEB, and RCC structures without compromising building water-proofing or load warranties.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-heading font-medium">Non-penetrative clamp engineering preserves roof warranties</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-heading font-medium">Automated rapid shutdown (RSD) for factory fire safety compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-heading font-medium">Over 25 years guaranteed linear output from Tier-1 modules</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Breakdown */}
      <section className="py-24 bg-neutral-50 relative border-t border-border">
        <Container>
          <SectionHeading
            badge="Financial & Strategic Advantages"
            title="Why Choose Volga CAPEX Rooftop Solar"
            highlight="CAPEX Rooftop"
            subtitle="Harness substantial balance sheet returns with a solar asset that directly lowers corporate operating costs."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-6 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-body leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <Check className="w-4 h-4" />
                    <span>Certified Bankability</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
}
