import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { procurementCategories } from '../data/services';
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '../utils/animations';
import {
  ShieldCheck,
  Grid,
  Zap,
  Box,
  Sliders,
  BatteryCharging,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Handshake,
  Send,
} from 'lucide-react';

const iconMap = {
  Grid,
  Zap,
  Box,
  Sliders,
  BatteryCharging,
};

export default function Procurement({ onNavigate }) {
  const [partnerFormOpen, setPartnerFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const standards = [
    {
      title: 'Tier-1 BloombergNEF Rated Only',
      desc: 'All procured modules and inverters are sourced exclusively from Tier-1 manufacturers with proven bankability records.',
    },
    {
      title: 'Stringent Pre-Dispatch Factory QA/QC',
      desc: 'In-line electro-luminescence (EL) micro-crack inspections and flash test verifications conducted by third-party auditors.',
    },
    {
      title: 'Global IEC & ISO Compliance',
      desc: 'Certified adherence to IEC 61215, IEC 61730, IEC 62109, and ISO 9001/14001 environmental benchmarks.',
    },
    {
      title: '25-Year Performance Backstopping',
      desc: 'Comprehensive reinsurance-backed power warranties ensuring minimal annual degradation rates (< 0.4%/year for N-Type).',
    },
  ];

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPartnerFormOpen(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Renewable Energy Procurement"
        highlight="Energy Procurement"
        description="A structured, bankable procurement framework focused on Tier-1 equipment quality, supply chain transparency, and multi-decade field durability."
        onNavigate={onNavigate}
      />

      {/* Procurement Philosophy */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6 space-y-6"
            >


              <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                Procurement Philosophy
              </h2>

              <p className="text-base sm:text-lg text-body leading-relaxed">
                Volga Solar Solutions follows a structured procurement approach focused on quality, reliability, and long-term performance.
              </p>

              <p className="text-sm sm:text-base text-body leading-relaxed">
                We believe that asset profitability is locked in at the procurement stage. Rather than compromising on equipment bills of materials to achieve artificial short-term cost reductions, Volga partners exclusively with globally validated manufacturers whose components demonstrate low thermal coefficients, corrosion resilience, and bankable reinsurance.
              </p>

              <div className="space-y-3 pt-2">
                {standards.map((std, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary-light text-secondary-dark flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-heading block">
                        {std.title}
                      </span>
                      <span className="text-xs text-body leading-relaxed">
                        {std.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/images/solar-procurement.jpg"
                  alt="Volga Tier-1 Solar Component Procurement and Quality Testing"
                  className="w-full h-[480px] sm:h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Equipment Categories */}
      <section className="py-24 bg-background relative border-y border-border">
        <Container>
          <SectionHeading
            badge="Bankable Components"
            title="Core Equipment Categories"
            highlight="Equipment Categories"
            subtitle="Engineered for high-generation yield, industrial safety, and long lifecycle stability."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {procurementCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Grid;
              return (
                <motion.div
                  key={cat.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">
                      {cat.spec}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-secondary">
                    <span>Tier-1 Spec Aligned</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Vendor Partnerships Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-50 border-2 border-border p-8 sm:p-12 shadow-subtle">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary mx-auto flex items-center justify-center mb-4">
                <Handshake className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading">
                Vendor Partnerships
              </h2>
              <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                We welcome partnerships with equipment manufacturers, balance of systems suppliers, and specialized engineering contractors who meet our technical and quality standards.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-base">Partnership Inquiry Received</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Our vendor empanelment committee will review your technical credentials and reach out within 2 business days.
                </p>
              </div>
            ) : partnerFormOpen ? (
              <form onSubmit={handlePartnerSubmit} className="space-y-4 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Company Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Acme Solar Modules Ltd."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Equipment Category</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Solar Modules</option>
                      <option>Inverters</option>
                      <option>Mounting Structures</option>
                      <option>Electrical BOS</option>
                      <option>Battery Storage (BESS)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Contact Person</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Corporate Email</label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-heading block mb-1">Technical Certifications & Compliance</label>
                  <textarea
                    rows="3"
                    placeholder="List relevant IEC / UL certifications, annual manufacturing capacity, and tier-1 status..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    variant="white"
                    size="sm"
                    onClick={() => setPartnerFormOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    icon={Send}
                  >
                    Submit Empanelment Dossier
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  onClick={() => setPartnerFormOpen(true)}
                >
                  Partner With Us
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>

    </div>
  );
}
