import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import RooftopCallout from '../components/home/RooftopCallout';
import Approach from '../components/home/Approach';
import BESSFeature from '../components/home/BESSFeature';

export default function Home({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. About Preview */}
      <AboutPreview onNavigate={onNavigate} />

      {/* 3. Services Overview */}
      <ServicesOverview onNavigate={onNavigate} />

      {/* 4. Rooftop Solar Solutions Callout */}
      <RooftopCallout onNavigate={onNavigate} />

      {/* 5. Battery Energy Storage Systems Feature */}
      <BESSFeature onNavigate={onNavigate} />

      {/* 6. Our Approach */}
      <Approach />
    </div>
  );
}

