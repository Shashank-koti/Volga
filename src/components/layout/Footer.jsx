import React from 'react';
import Container from '../common/Container';
import { footerLinks, contactInfo } from '../../data/navigation';
import { Phone, Mail } from 'lucide-react';
import navImg from '/navImg.png';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#070B11] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-10 relative overflow-hidden">
      {/* Background Engineering Ambient */}
      <div className="absolute inset-0 bg-grid-tech-dark opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="2xl" className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center text-left focus:outline-none group -ml-1"
              aria-label="Volga Solar Solutions Home"
            >
              <img
                src={navImg}
                alt="Volga Solar Solutions"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </button>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md font-normal">
              Volga Solar Solutions is a renewable energy services company specialising in solar asset management, rooftop solar solutions, and battery energy storage systems (BESS).
            </p>

            <div className="space-y-3 text-xs font-mono text-white pt-1">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (4 cols) */}
          <div className="sm:col-span-1 lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-primary pl-2.5">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center justify-between w-full group py-0.5 text-left"
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company (3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white border-l-2 border-primary pl-2.5">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-neutral-300 hover:text-white transition-colors block py-0.5 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Volga Solar Solutions. All Rights Reserved.
          </div>
          <div>
            <button onClick={() => onNavigate('contact')} className="text-neutral-300 hover:text-primary transition-colors">
              Contact Us: info@volgasolar.com
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
