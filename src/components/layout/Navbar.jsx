import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
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
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isCurrentServicePage = ['asset-management', 'rooftop-capex', 'rooftop-opex', 'bess'].includes(currentPage);

  // Split navigation links so logo sits squarely in the center between "Projects" and "Procurement"
  const splitIndex = navLinks.findIndex((l) => l.path === 'procurement');
  const leftLinks = splitIndex !== -1 ? navLinks.slice(0, splitIndex) : navLinks.slice(0, 4);
  const rightLinks = splitIndex !== -1 ? navLinks.slice(splitIndex) : navLinks.slice(4);

  const renderNavLink = (link) => {
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
            className={`px-3 xl:px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all ${isCurrentServicePage
              ? 'text-primary bg-primary/10 border border-primary/20 font-bold shadow-sm'
              : 'text-white hover:text-primary hover:bg-white/5'
              }`}
            aria-expanded={dropdownOpen}
          >
            <span>{link.name}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-primary' : 'text-neutral-400'
                }`}
            />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-0 mt-2 w-80 bg-[#0C111D] rounded-2xl shadow-2xl border border-white/15 p-3 z-50 overflow-hidden"
              >
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
                          ? 'bg-primary/15 text-white border border-primary/30'
                          : 'hover:bg-white/5 text-white'
                          }`}
                      >
                        <div
                          className={`p-2 rounded-lg transition-colors ${isActive
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-white/[0.06] text-neutral-300 group-hover:bg-primary group-hover:text-white'
                            }`}
                        >
                          <SubIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-sm font-bold leading-tight transition-colors ${isActive ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                            {child.name}
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
        className={`px-3 xl:px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative ${isActive
          ? 'text-primary font-bold shadow-sm'
          : 'text-white hover:text-primary hover:bg-white/5'
          }`}
      >
        <span>{link.name}</span>
        {isActive && (
          <motion.div
            layoutId="navActiveIndicator"
            className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#070A0F]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-2.5 sm:py-3'
          : 'bg-transparent border-b border-transparent shadow-none py-3 sm:py-5'
          }`}
      >
        <Container size="full" className="px-4 sm:px-6 lg:px-10">
          {/* ========================================================= */}
          {/* DESKTOP NAVBAR: LOGO IN THE CENTER (Projects <-> Procurement) */}
          {/* ========================================================= */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-3 xl:gap-6 w-full">
            {/* Left Nav Group: Home, About Us, Services, Projects / Portfolio */}
            <nav className="flex items-center justify-end gap-1 xl:gap-2.5">
              {leftLinks.map(renderNavLink)}
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-center px-2 xl:px-4">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center group text-center focus:outline-none py-0.5 transition-transform duration-200 hover:scale-105"
                aria-label="Volga Solar Solutions Home"
              >
                <img
                  src={navImg}
                  alt="Volga Solar Solutions"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                />
              </button>
            </div>

            {/* Right Nav Group: Procurement, CSR, Job Openings, Contact Us */}
            <nav className="flex items-center justify-start gap-1 xl:gap-2.5">
              {rightLinks.map(renderNavLink)}
            </nav>
          </div>

          {/* ========================================================= */}
          {/* MOBILE NAVBAR: LOGO + HAMBURGER                           */}
          {/* ========================================================= */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center group text-left focus:outline-none py-0.5"
              aria-label="Volga Solar Solutions Home"
            >
              <img
                src={navImg}
                alt="Volga Solar Solutions"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  );
}
