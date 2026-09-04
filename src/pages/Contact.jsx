import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { contactInfo } from '../data/navigation';
import { fadeLeft, fadeRight, fadeUp } from '../utils/animations';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  Headphones,
  Zap,
} from 'lucide-react';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Solar Asset Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Get in Touch"
        highlight="Touch"
        description="For project inquiries, partnerships, or service requests, please reach out to our team. Our solar engineers and asset managers respond within 24 business hours."
        onNavigate={onNavigate}
      />

      {/* Two-Column Contact Section */}
      <section className="py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Information & Cards (5 cols) */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  Communication Channels
                </span>
                <h2 className="text-3xl font-extrabold text-heading tracking-tight">
                  Volga Solar Solutions
                </h2>
                <p className="mt-3 text-sm text-body leading-relaxed">
                  Connect directly with our central operations command or schedule an on-site technical inspection for your commercial facility.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4 hover:border-secondary/40 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary-dark flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-dark transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-heading hover:text-primary transition-colors block mt-0.5"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                    <span className="text-xs text-muted mt-1 block">
                      Mon - Fri, 9:00 AM - 6:30 PM IST
                    </span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4 hover:border-primary/40 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Corporate Inquiries
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-bold text-heading hover:text-primary transition-colors block mt-0.5"
                    >
                      {contactInfo.email}
                    </a>
                    <span className="text-xs text-muted mt-1 block">
                      Tenders & RFPs: procurement@volgasolar.com
                    </span>
                  </div>
                </div>

                {/* Mumbai Office */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4 hover:border-neutral-300 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-neutral-200 text-heading flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Corporate Headquarters
                    </span>
                    <span className="text-sm font-semibold text-heading block mt-0.5 leading-snug">
                      {contactInfo.corporateOffice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-800">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>NDAs executed for all proprietary utility tariff and architectural roof data.</span>
              </div>
            </motion.div>

            {/* Right Column: Inquiry Form (7 cols) */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-7"
            >
              <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border-2 border-border shadow-subtle relative overflow-hidden">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-heading">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-body mt-1">
                    Fill out the fields below and our engineering team will evaluate your project.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-emerald-900">
                      Message Successfully Sent!
                    </h4>
                    <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Volga Solar Solutions. A dedicated technical consultant has been assigned to your inquiry and will reach out shortly.
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            service: 'Solar Asset Management',
                            message: '',
                          });
                        }}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-heading block mb-1.5">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-heading block mb-1.5">
                          Company / Enterprise Name <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="e.g. Acme Manufacturing Corp"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-heading block mb-1.5">
                          Corporate Email <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-heading block mb-1.5">
                          Contact Phone <span className="text-primary">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+91 98200 00000"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Area of Interest / Service Requirement
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="Solar Asset Management">Solar Asset Management & Telemetry</option>
                        <option value="Rooftop Solar CAPEX">Rooftop Solar CAPEX (Turnkey Ownership)</option>
                        <option value="Rooftop Solar OPEX">Rooftop Solar OPEX (Zero-Capex / PPA)</option>
                        <option value="Battery Energy Storage Systems">Battery Energy Storage Systems (BESS)</option>
                        <option value="Renewable Procurement">Equipment Procurement & Sourcing</option>
                        <option value="General Inquiry">General Corporate / Media Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Project Details & Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your facility location, approximate monthly energy consumption, or portfolio capacity..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon={Send}
                        className="w-full sm:w-auto"
                      >
                        Submit Project Inquiry
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
