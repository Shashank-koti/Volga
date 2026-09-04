import React from 'react';
import Container from '../common/Container';
import { footerLinks, contactInfo } from '../../data/navigation';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Shield,
  Zap,
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800 pt-16 pb-10">
      <Container size="full" className="px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-gradient-to-tr from-[#D5000E] via-[#A9000B] to-[#17BDE5] p-0.5">
                <div className="w-full h-full bg-neutral-950 flex items-center justify-center rounded-[10px]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transform -rotate-12">
                    <path
                      d="M12 2L3 19h18L12 2z"
                      fill="none"
                      stroke="#D5000E"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path d="M12 7L6 19h12L12 7z" fill="#17BDE5" opacity="0.85" />
                    <circle cx="12" cy="14" r="2.5" fill="#FDDF02" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white block">VOLGA</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary block -mt-1">
                  SOLAR SOLUTIONS
                </span>
              </div>
            </button>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Volga Solar Solutions is a premier renewable energy services company specializing in Solar Asset Management, Rooftop Solar (CAPEX & OPEX), and Battery Energy Storage Systems (BESS).
            </p>

            <div className="space-y-2 text-xs text-neutral-400 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>{contactInfo.corporateOffice}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-secondary text-neutral-300 hover:text-dark flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-primary pl-2.5">
              Renewable Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center justify-between w-full group py-0.5"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-secondary pl-2.5">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-neutral-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate & Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-accent pl-2.5">
              Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.companyInfo.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-neutral-400 hover:text-white transition-colors block py-0.5"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quality assurance badge */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Shield className="w-4 h-4 text-secondary" />
                <span>IEC & CEA Compliant</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Adhering to international solar PV reliability, worker safety, and grid compliance standards.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; 2026 Volga Solar Solutions. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-300 transition-colors">
              Sustainability Charter
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
