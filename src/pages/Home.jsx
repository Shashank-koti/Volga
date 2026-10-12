import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Hero from '../components/home/Hero';
import EnergyApproachComparison from '../components/home/EnergyApproachComparison';
import RooftopAssemblySection from '../components/home/RooftopAssemblySection';
import EnergyStorageSection from '../components/home/EnergyStorageSection';
import CapexVsOpexSection from '../components/home/CapexVsOpexSection';
import ConnectedEcosystemSection from '../components/home/ConnectedEcosystemSection';

export default function Home({ onNavigate }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO: Cinematic Commercial Energy Video & Value Proposition */}
      <ErrorBoundary>
        <Hero onNavigate={onNavigate} />
      </ErrorBoundary>

      {/* 01: Traditional vs Solar — Split-Screen Comparison */}
      <ErrorBoundary>
        <EnergyApproachComparison onNavigate={onNavigate} />
      </ErrorBoundary>

      {/* 02: Rooftop to Renewable Power — Solar Panels Assemble on Factory */}
      <ErrorBoundary>
        <RooftopAssemblySection onNavigate={onNavigate} />
      </ErrorBoundary>

      {/* 04: Energy Storage — Battery Charges and Powers a Facility */}
      <ErrorBoundary>
        <EnergyStorageSection onNavigate={onNavigate} />
      </ErrorBoundary>

      {/* 05: CAPEX vs OPEX — Interactive Business Model Comparison */}
      <ErrorBoundary>
        <CapexVsOpexSection onNavigate={onNavigate} />
      </ErrorBoundary>

      {/* 06: Connected Energy Ecosystem — All Volga Services Connect Together */}
      <ErrorBoundary>
        <ConnectedEcosystemSection onNavigate={onNavigate} />
      </ErrorBoundary>
    </div>
  );
}
