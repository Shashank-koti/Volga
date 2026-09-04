import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, contactInfo } from '../../data/navigation';
import Button from '../common/Button';
import {
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Activity,
  Sun,
  Zap,
  BatteryCharging,
  ShieldCheck,
} from 'lucide-react';

const iconMap = {
  Activity,
  Sun,
  Zap,
  BatteryCharging,
  ShieldCheck,
};

export default function MobileMenu({ isOpen, onClose, currentPage, onNavigate }) {
  const [servicesExpanded, setServicesExpanded] = useState(true);

  const handleNavClick = (path) => {
    onNavigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col overflow-y-auto lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-neutral-50/50">
              <div className="flex items-center">
                <img src="/navImg.png" alt="Volga Solar Solutions" className="h-9 w-auto object-contain" />
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg text-body hover:text-heading hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-4 py-6 space-y-1">
              {navLinks.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.name} className="pt-1 pb-1">
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                          ['asset-management', 'rooftop-capex', 'rooftop-opex', 'bess'].includes(currentPage)
                            ? 'text-primary bg-primary-light/60'
                            : 'text-heading hover:bg-neutral-100'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            servicesExpanded ? 'rotate-180 text-primary' : 'text-muted'
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 pr-1 py-1 space-y-1 overflow-hidden"
                          >
                            {item.children.map((sub) => {
                              const SubIcon = iconMap[sub.icon] || Zap;
                              const isActive = currentPage === sub.path;
                              return (
                                <button
                                  key={sub.name}
                                  onClick={() => handleNavClick(sub.path)}
                                  className={`flex items-start gap-3 w-full text-left p-2.5 rounded-lg transition-colors text-xs ${
                                    isActive
                                      ? 'bg-primary/10 text-primary font-semibold'
                                      : 'text-body hover:text-heading hover:bg-neutral-50'
                                  }`}
                                >
                                  <div
                                    className={`p-1.5 rounded-md mt-0.5 ${
                                      isActive
                                        ? 'bg-primary text-white'
                                        : 'bg-neutral-100 text-neutral-600'
                                    }`}
                                  >
                                    <SubIcon className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <div className="font-semibold">{sub.name}</div>
                                    <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                                      {sub.description}
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = currentPage === item.path;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-primary bg-primary-light/60 font-bold'
                        : 'text-heading hover:bg-neutral-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                );
              })}
            </div>

            {/* CTA & Contact Info Footer */}
            <div className="p-5 border-t border-border bg-neutral-50 space-y-4">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={ArrowRight}
                onClick={() => handleNavClick('contact')}
              >
                Talk to Our Experts
              </Button>

              <div className="pt-2 space-y-2 text-xs text-muted">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-body hover:text-primary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  <span>{contactInfo.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-body hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
