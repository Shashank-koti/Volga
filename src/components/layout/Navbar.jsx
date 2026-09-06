import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';
import { navLinks } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import navImg from "/navImg.png";
import {
  Menu,
  ChevronDown,
  Activity,
  Sun,
  Zap,
  BatteryCharging,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const iconMap = {
  Activity,
  Sun,
  Zap,
  BatteryCharging,
  ShieldCheck,
};

export default function Navbar({ currentPage, onNavigate }) {
  const { isScrolled } = useScrollPosition(25);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Navbar is always clean solid white across the entire site
  const isNavSolid = true;

  const isCurrentServicePage = ['asset-management', 'rooftop-capex', 'rooftop-opex', 'bess'].includes(currentPage);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-subtle border-b border-border/70 py-2.5 sm:py-3"
      >
        <Container size="full" className="px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center group text-left focus:outline-none py-0.5"
              aria-label="Volga Solar Solutions Home"
            >
              <img
                src={navImg}
                alt="Volga Solar Solutions"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        onClick={() => onNavigate('asset-management')}
                        className={`px-3.5 py-2 rounded-lg text-md font-semibold flex items-center gap-1.5 transition-colors ${isCurrentServicePage
                          ? isNavSolid ? 'text-primary bg-primary-light' : 'text-white bg-white/15'
                          : isNavSolid
                            ? 'text-black hover:text-heading hover:bg-neutral-100'
                            : 'text-neutral-200 hover:text-white hover:bg-white/10'
                          }`}
                        aria-expanded={dropdownOpen}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-primary' : ''
                            }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-elevated border border-border p-3 z-50 overflow-hidden"
                          >
                            <div className="text-[10px] uppercase font-bold tracking-wider text-muted px-3 py-1.5 border-b border-neutral-100 mb-1">
                              Our Services
                            </div>
                            <div className="space-y-1">
                              {link.children.map((child) => {
                                const SubIcon = iconMap[child.icon] || Zap;
                                const isActive = currentPage === child.path;
                                return (
                                  <button
                                    key={child.name}
                                    onClick={() => {
                                      onNavigate(child.path);
                                      setDropdownOpen(false);
                                    }}
                                    className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all group ${isActive
                                      ? 'bg-primary-light text-primary'
                                      : 'hover:bg-neutral-50 text-heading'
                                      }`}
                                  >
                                    <div
                                      className={`p-2 rounded-lg transition-colors ${isActive
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'bg-neutral-100 text-body group-hover:bg-primary/10 group-hover:text-primary'
                                        }`}
                                    >
                                      <SubIcon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-bold leading-tight group-hover:text-primary transition-colors">
                                        {child.name}
                                      </div>
                                      <div className="text-[11px] text-muted line-clamp-2 mt-0.5 leading-snug">
                                        {child.description}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = currentPage === link.path;

                return (
                  <button
                    key={link.name}
                    onClick={() => onNavigate(link.path)}
                    className={`px-3 py-2 rounded-lg text-md font-semibold transition-colors ${isActive
                      ? isNavSolid
                        ? 'text-primary bg-primary-light font-bold'
                        : 'text-white bg-white/20 font-bold'
                      : isNavSolid
                        ? 'text-black hover:text-heading hover:bg-neutral-100'
                        : 'text-neutral-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant={isNavSolid ? 'primary' : 'primary'}
                size="md"
                icon={ArrowRight}
                onClick={() => onNavigate('contact')}
                className="hidden sm:inline-flex"
              >
                Contact Us
              </Button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2.5 rounded-xl lg:hidden transition-colors ${isNavSolid
                  ? 'text-heading hover:bg-neutral-100'
                  : 'text-white hover:bg-white/15'
                  }`}
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  );
}
