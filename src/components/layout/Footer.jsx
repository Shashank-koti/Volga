import React from 'react';
import Container from '../common/Container';
import { footerLinks, contactInfo } from '../../data/navigation';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800 pt-16 pb-10">
      <Container size="full" className="px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Overview (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
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

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Volga Solar Solutions is a renewable energy services company specialising in solar asset management, rooftop solar solutions, and battery energy storage systems (BESS).
            </p>

            <div className="space-y-2.5 text-xs text-neutral-300 pt-2">
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
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-primary pl-2.5">
              Our Services
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

          {/* Col 3: Company (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Volga Solar Solutions. All Rights Reserved.
          </div>
          <div>
            <button onClick={() => onNavigate('contact')} className="text-neutral-400 hover:text-white transition-colors">
              Contact Us: info@volgasolar.com
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

