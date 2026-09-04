import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import Approach from '../components/home/Approach';
import BESSFeature from '../components/home/BESSFeature';
import FeaturedProjects from '../components/home/FeaturedProjects';

export default function Home({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Services Overview */}
      <ServicesOverview onNavigate={onNavigate} />

      {/* 3. About Preview */}
      <AboutPreview onNavigate={onNavigate} />

      {/* 4. Our Approach */}
      <Approach />

      {/* 5. BESS Feature Section */}
      <BESSFeature onNavigate={onNavigate} />

      {/* 8. Projects Preview */}
      <FeaturedProjects onNavigate={onNavigate} />
    </div>
  );
}
