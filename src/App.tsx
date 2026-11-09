/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { ServicesSection } from './components/ServicesSection';
import { BudgetSimulator } from './components/BudgetSimulator';
import { PestGuide } from './components/PestGuide';
import { CoverageMap } from './components/CoverageMap';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DossierDrawer } from './components/DossierDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#081810] text-slate-100 flex flex-col font-sans selection:bg-[#436423] selection:text-white pb-18 md:pb-0">
      
      {/* Pitch Presentation Top Bar: Notice for the sales pitch / owner demonstration */}
      <div className="bg-gradient-to-r from-emerald-950 via-[#0d2e1c] to-emerald-950 border-b border-emerald-800/40 text-xs py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-left">
          <div className="flex items-center gap-2 text-emerald-300 min-w-0">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="font-semibold text-white text-[11px] sm:text-xs truncate">
              Demonstração DDFER (Campinas)
            </span>
            <span className="hidden md:inline text-slate-300 text-xs">
              — Proposta comercial otimizada para captação de clientes pelo celular.
            </span>
          </div>

          <button
            onClick={() => setIsDossierOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[10px] sm:text-[11px] font-semibold transition-all shrink-0 cursor-pointer"
          >
            <span>Ver Dossiê</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Top Header with mobile drawer */}
      <Header
        onOpenPitchDossier={() => setIsDossierOpen(true)}
        isDossierOpen={isDossierOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <TrustMetrics />
        <ServicesSection />
        <BudgetSimulator />
        <PestGuide />
        <CoverageMap />
        <ReviewsSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenPitchDossier={() => setIsDossierOpen(true)} />

      {/* Floating WhatsApp for Desktop/Tablet */}
      <div className="hidden md:block">
        <FloatingWhatsApp />
      </div>

      {/* Sticky Bottom Bar for Mobile Phones (Ligar Agora + WhatsApp) */}
      <MobileBottomBar />

      {/* Interactive Dossier Drawer */}
      <DossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

    </div>
  );
}
