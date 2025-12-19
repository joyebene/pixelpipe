"use client";

import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TrustedBy from './TrustedBy';
import FeaturesSection from './FeaturesSection';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <TeamSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;