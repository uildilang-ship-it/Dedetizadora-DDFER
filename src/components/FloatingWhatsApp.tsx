import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getUrl = (msg: string) =>
    `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick popup dialog */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-[#0c2419] border border-[#1f4832] p-4 text-slate-200 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#183a28]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Central DDFER Campinas</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300">
            Olá! Precisa de dedetização hoje? Escolha como prefere falar:
          </p>

          <div className="space-y-1.5 text-xs">
            <a
              href={getUrl('Olá! Gostaria de um orçamento rápido para minha residência em Campinas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-lg bg-[#143323] hover:bg-[#1a442e] text-white transition-colors"
            >
              🏠 Orçamento Residencial
            </a>
            <a
              href={getUrl('Olá! Preciso de dedetização e laudo para meu comércio/restaurante em Campinas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-lg bg-[#143323] hover:bg-[#1a442e] text-white transition-colors"
            >
              🏢 Comércio / Laudo Vigilância
            </a>
            <a
              href={getUrl('Olá! É uma emergência: encontrei escorpiões ou ratos no imóvel e preciso de atendimento ágil.')}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 rounded-lg bg-[#254d35] hover:bg-[#2e5e41] text-amber-200 font-medium transition-colors"
            >
              🚨 Atendimento Prioritário
            </a>
          </div>

          <div className="text-[10px] text-slate-400 pt-1 text-center font-mono">
            {COMPANY_INFO.phoneDisplay}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1caa50] text-[#051a0f] font-bold rounded-full shadow-xl shadow-black/40 hover:scale-105 transition-all focus:outline-none"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs tracking-wide hidden sm:inline">WhatsApp DDFER</span>
      </button>
    </div>
  );
};
