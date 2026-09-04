import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { fadeUp, staggerContainer } from '../utils/animations';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Sun,
  Wrench,
  CheckCircle2,
  Send,
  X,
  FileText,
  Sparkles,
  BarChart,
} from 'lucide-react';

export default function Careers({ onNavigate }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const careerAreas = [
    {
      title: 'Solar Engineering',
      desc: 'Lead system layout design, PVsyst modeling, grid-tie engineering, and high-voltage substation integration.',
      icon: Sun,
      color: 'bg-primary-light text-primary',
    },
    {
      title: 'Operations & Maintenance',
      desc: 'Execute predictive maintenance, drone thermography, inverter diagnostics, and on-site emergency field repairs.',
      icon: Wrench,
      color: 'bg-secondary-light text-secondary-dark',
    },
    {
      title: 'Project Management',
      desc: 'Orchestrate multi-megawatt turnkey EPC execution, contractor safety, civil foundations, and DISCOM grid liaison.',
      icon: Briefcase,
      color: 'bg-accent-light text-heading',
    },
    {
      title: 'Energy Analytics',
      desc: 'Harness SCADA telemetry, string mismatch algorithms, and solar forecasting models to extract maximum plant yield.',
      icon: BarChart,
      color: 'bg-neutral-100 text-heading',
    },
  ];

  const jobOpenings = [
    {
      id: 'job-1',
      title: 'Senior Solar PV Design Engineer',
      department: 'Solar Engineering',
      location: 'Mumbai / Remote Optional',
      type: 'Full-Time',
      experience: '5-8 Years',
      description: 'Lead engineering design of C&I rooftop and utility-scale solar projects using PVsyst, AutoCAD, and electrical calculation tools.',
      skills: ['PVsyst', 'BIM Modeling', 'IEC 62548', 'Medium Voltage BOS'],
    },
    {
      id: 'job-2',
      title: 'Asset Operations & SCADA Telemetry Lead',
      department: 'Energy Analytics',
      location: 'Mumbai / Aerocity New Delhi',
      type: 'Full-Time',
      experience: '4-7 Years',
      description: 'Oversee centralized SCADA operations command, analyzing real-time plant PR, soiling indices, and dispatching O&M field teams.',
      skills: ['SCADA Systems', 'Python / SQL', 'Inverter Telemetry', 'Yield Forecasting'],
    },
    {
      id: 'job-3',
      title: 'Rooftop Solar Project Manager (Turnkey EPC)',
      department: 'Project Management',
      location: 'Pune / Western Region',
      type: 'Full-Time',
      experience: '6-10 Years',
      description: 'Drive on-site project execution, safety compliance, contractor logistics, and CEIG grid approvals for industrial clients.',
      skills: ['EPC Site Oversight', 'EHS Compliance', 'DISCOM Net Metering', 'Civil Roof Load Audits'],
    },
    {
      id: 'job-4',
      title: 'BESS Integration Specialist',
      department: 'Solar Engineering',
      location: 'Bangalore / Hyderabad',
      type: 'Full-Time',
      experience: '3-6 Years',
      description: 'Design containerized battery storage solutions, PCS integration, liquid cooling loops, and IEEE 1547 compliance architectures.',
      skills: ['LFP Chemistries', 'PCS Inverters', 'UL 9540A Standards', 'Microgrid EMS'],
    },
    {
      id: 'job-5',
      title: 'Senior Solar Asset Maintenance Engineer',
      department: 'Operations & Maintenance',
      location: 'Rajasthan / Gujarat Solar Parks',
      type: 'Full-Time',
      experience: '3-5 Years',
      description: 'Conduct preventive electrical testing, thermographic drone scans, IV curve analysis, and manage inverter spare inventories.',
      skills: ['Thermography', 'Transformer Testing', 'Robotic Cleaning Systems', 'Rapid Incident Response'],
    },
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Careers at Volga Solar Solutions"
        highlight="Careers"
        description="Volga Solar Solutions offers opportunities for professionals who are passionate about renewable energy and engineering innovation. We provide a dynamic work environment with opportunities to work on impactful renewable energy projects."
        onNavigate={onNavigate}
      />

      {/* 4 Core Career Areas */}
      <section className="py-24 bg-white relative">
        <Container>
          <SectionHeading
            badge="Engineering Specializations"
            title="Build the Future of Clean Energy"
            highlight="Clean Energy"
            subtitle="Work with high-caliber energy technologists, pioneering battery storage, and managing multi-gigawatt clean infrastructure portfolios."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {careerAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-surface border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-body leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Team Expansion</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Job Openings Section */}
      <section className="py-24 bg-neutral-50 relative border-t border-border">
        <Container>
          <SectionHeading
            badge="Current Opportunities"
            title="Open Positions"
            highlight="Open Positions"
            subtitle="Explore high-impact roles across engineering, analytics, and project execution."
            align="center"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-subtle hover:shadow-elevated transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-0.5 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs text-muted font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                    <span className="text-xs text-muted font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-body line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-muted bg-neutral-100 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Submit General Resume CTA */}
          <div className="mt-16 text-center max-w-xl mx-auto p-8 rounded-3xl bg-white border border-border shadow-subtle">
            <h4 className="text-xl font-bold text-heading">Don't See the Exact Fit?</h4>
            <p className="text-xs sm:text-sm text-body mt-2">
              We are constantly hiring talented clean-energy pioneers. Submit your resume for future consideration.
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                size="md"
                icon={FileText}
                onClick={() => onNavigate('contact')}
              >
                Submit Your Resume
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-muted hover:text-heading transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {selectedJob.department}
                </span>
                <h3 className="text-2xl font-bold text-heading mt-1">
                  Apply: {selectedJob.title}
                </h3>
                <p className="text-xs text-muted mt-1">
                  Location: {selectedJob.location} &bull; {selectedJob.type}
                </p>
              </div>

              {appliedSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-lg">Application Submitted!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Thank you for your interest in Volga Solar Solutions. Our talent acquisition team will review your profile shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-border text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-heading block mb-1">Phone</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-border text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">LinkedIn / Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-2.5 rounded-xl border border-border text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-heading block mb-1">Brief Statement of Interest</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us briefly about your engineering background and why Volga is your next career step..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border text-heading text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <Button
                      variant="white"
                      size="sm"
                      onClick={() => setSelectedJob(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="sm"
                      icon={Send}
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
