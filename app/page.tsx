'use client';

import HeroSection from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import ResultsSection from '@/components/sections/ResultsSection';
import ProgramSection from '@/components/sections/ProgramSection';
import PricingSection from '@/components/sections/PricingSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <main id="page" style={{ margin: 0, padding: 0 }}>
      <HeroSection />
      <PainPointsSection />
      <ResultsSection />
      <ProgramSection />
      <PricingSection />
      <AboutSection />
    </main>
  );
}
