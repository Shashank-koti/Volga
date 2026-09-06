import React from 'react';
import Container from '../common/Container';
import { contactInfo } from '../../data/navigation';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function TopBar({ onNavigate }) {
  return (
    <div className="bg-neutral-900 text-neutral-300 text-xs py-2 border-b border-white/10 hidden md:block relative z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Left: Quick contact */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>{contactInfo.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <span>{contactInfo.email}</span>
            </a>
          </div>

          {/* Right: Authentic tagline & quick link */}
          <div className="flex items-center gap-4">
            <div className="text-neutral-300 font-medium">
              Reliable Renewable Energy Solutions
            </div>
            <span className="text-neutral-600">|</span>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="hover:text-white transition-colors flex items-center gap-1 text-neutral-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3 h-3 text-secondary" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
