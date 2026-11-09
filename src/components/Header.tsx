import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, FileText, Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenPitchDossier: () => void;
  isDossierOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPitchDossier, isDossierOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para controle de pragas com a DDFER em Campinas.'
  )}`;

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1b3d2b] bg-[#081810]/95 backdrop-blur-md">
      {/* Top Bar One-Row Three-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#2e7d32] to-[#1b4332] flex items-center justify-center text-white shadow-md shadow-emerald-950/40 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
              DDFER
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-emerald-400 font-semibold -mt-1">
              Dedetizadora Campinas
            </span>
          </div>
        </a>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#servicos" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Serviços
          </a>
          <a href="#simulador" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Simulador
          </a>
          <a href="#regioes" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Regiões
          </a>
          <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Avaliações
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Actions + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct phone call button on mobile/desktop */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw.replace('55', '')}`}
            className="flex sm:hidden items-center justify-center w-9 h-9 rounded-lg bg-[#122e20] text-emerald-400 border border-[#1e4a34] touch-manipulation"
            aria-label="Ligar para a DDFER"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Pitch Dossier Button */}
          <button
            onClick={onOpenPitchDossier}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-all border cursor-pointer ${
              isDossierOpen
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40 hover:bg-emerald-900/40'
            }`}
            title="Abrir o Dossiê Comercial e Estratégia de Apresentação para o Proprietário"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Dossiê Comercial</span>
          </button>

          {/* Primary CTA (Desktop & Tablet) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#436423] hover:bg-[#4f7729] active:bg-[#38531d] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 border border-[#5d8b31]/40"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Orçamento WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[#0e271a] border border-[#1e4530] text-slate-300 hover:text-white transition-colors"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#091a11] border-b border-[#1b3d2b] px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#servicos"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#122e20] transition-colors"
            >
              Serviços Especializados
            </a>
            <a
              href="#simulador"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#122e20] transition-colors"
            >
              Simulador de Orçamento
            </a>
            <a
              href="#regioes"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#122e20] transition-colors"
            >
              Bairros Atendidos em Campinas
            </a>
            <a
              href="#avaliacoes"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#122e20] transition-colors"
            >
              Avaliações 4.9★ dos Clientes
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-[#122e20] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-3 border-t border-[#173a27] flex flex-col gap-2.5">
            <button
              onClick={() => {
                closeMenu();
                onOpenPitchDossier();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Abrir Dossiê & Script Comercial DDFER</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#436423] text-white text-xs font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Chamar no WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
