import React from 'react';
import { MessageCircle, Phone, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const MobileBottomBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá DDFER! Gostaria de um orçamento rápido para dedetização no meu imóvel em Campinas.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07160e]/95 backdrop-blur-md border-t border-[#1b3d2b] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw.replace('55', '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#122e20] hover:bg-[#1a422e] active:bg-[#0c2016] text-slate-100 border border-[#1e4a34] text-xs font-semibold transition-all touch-manipulation min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">Ligar Agora</span>
        </a>

        {/* Primary WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.8] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1caa50] text-[#051a0f] text-xs font-bold shadow-lg shadow-emerald-950/40 transition-all touch-manipulation min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span className="truncate">Orçamento no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
