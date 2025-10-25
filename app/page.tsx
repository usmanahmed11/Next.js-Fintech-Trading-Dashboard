'use client';

import { Header } from '@/components/Header';
import { BalanceCards } from '@/components/BalanceCards';
import { PerformanceSection } from '@/components/PerformanceSection';
import { SocialFeed } from '@/components/SocialFeed';
import { AIBotsSection } from '@/components/AIBotsSection';
import { MiningSection } from '@/components/MiningSection';
import { SecuritySection } from '@/components/SecuritySection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-12">
        <BalanceCards />
        <PerformanceSection />
        <AIBotsSection />
        <MiningSection />
        <SocialFeed />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
