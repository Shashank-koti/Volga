import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { contactInfo } from '../data/navigation';
import { fadeLeft, fadeRight } from '../utils/animations';
import {
  Phone,
  Mail,
  Building,
  Send,
  CheckCircle2,
} from 'lucide-react';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

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
        title="Contact Us"
        highlight="Us"
        description="For project inquiries, partnerships, or service requests, please reach out to our team."
        onNavigate={onNavigate}
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Information (5 cols) */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                  Get in Touch
                </span>
                <h2 className="text-3xl font-extrabold text-heading tracking-tight">
                  Volga Solar Solutions
                </h2>
                <p className="mt-3 text-base text-body leading-relaxed">
                  For project inquiries, partnerships, or service requests, please reach out to our team.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-bold text-heading hover:text-primary transition-colors block mt-0.5"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-light text-secondary-dark flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Phone
                    </span>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-heading hover:text-primary transition-colors block mt-0.5"
                    >
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Company Card */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-border flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 text-heading flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                      Company
                    </span>
                    <span className="text-base font-bold text-heading block mt-0.5">
                      {contactInfo.companyName}
                    </span>
                  </div>
                </div>
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
              <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-border shadow-subtle relative overflow-hidden">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-heading">
                    Inquiry Form
                  </h3>
                  <p className="text-sm text-body mt-1">
                    Please provide your details below and our team will get in touch with you.
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
                      Inquiry Submitted Successfully
                    </h4>
                    <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Volga Solar Solutions. Our team has received your message and will reach out to you shortly.
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
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Company <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Phone <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-heading text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1.5">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
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
                        Submit
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
