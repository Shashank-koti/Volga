import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AssetManagement from './pages/AssetManagement';
import RooftopCAPEX from './pages/RooftopCAPEX';
import RooftopOPEX from './pages/RooftopOPEX';
import BESS from './pages/BESS';
import Procurement from './pages/Procurement';
import Projects from './pages/Projects';
import CSR from './pages/CSR';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Read from window hash if available
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash && hash.split('?')[0]) {
      return hash.split('?')[0].split('#')[0];
    }
    return 'home';
  });

  // Handle browser back/forward events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const page = hash.split('?')[0].split('#')[0] || 'home';
      setCurrentPage(page);

      // Handle anchor scroll if present
      if (hash.includes('#')) {
        const anchorId = hash.split('#')[1];
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    if (page.includes('#')) {
      const [pageName, anchor] = page.split('#');
      setCurrentPage(pageName || 'home');
      window.location.hash = `#/${page}`;
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'asset-management':
        return <AssetManagement onNavigate={handleNavigate} />;
      case 'rooftop-capex':
        return <RooftopCAPEX onNavigate={handleNavigate} />;
      case 'rooftop-opex':
        return <RooftopOPEX onNavigate={handleNavigate} />;
      case 'bess':
        return <BESS onNavigate={handleNavigate} />;
      case 'procurement':
        return <Procurement onNavigate={handleNavigate} />;
      case 'projects':
        return <Projects onNavigate={handleNavigate} />;
      case 'csr':
        return <CSR onNavigate={handleNavigate} />;
      case 'careers':
        return <Careers onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-body selection:bg-primary/10 selection:text-primary">

      {/* 2. Premium Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 3. Page Content with Entrance Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Premium Dark Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
