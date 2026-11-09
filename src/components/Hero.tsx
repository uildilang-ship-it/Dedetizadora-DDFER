import React from 'react';
import { MessageCircle, Calculator, ShieldCheck, Star, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Vi o site da DDFER e gostaria de solicitar um orçamento para controle de pragas em Campinas.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 bg-gradient-to-b from-[#081810] via-[#0b1f15] to-[#081810]">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-emerald-900/20 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Conversion Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Clean unboxed metadata separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Campinas & Região
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4,9 ★ no Google
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Jd. São Domingos</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance leading-[1.18]">
              Sua casa livre de pragas.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-lime-200">
                Sua tranquilidade protegida.
              </span>
            </h1>

            {/* Concrete Value Proposition */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Soluções profissionais em controle de baratas, cupins, ratos, formigas e escorpiões em Campinas e região. Tecnologia microencapsulada sem cheiro forte, segura para sua família e animais de estimação.
            </p>

            {/* Action Buttons - Mobile thumb friendly */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#436423] hover:bg-[#4f7729] active:bg-[#38531d] rounded-xl shadow-lg shadow-emerald-950/50 border border-[#5d8b31]/50 transition-all touch-manipulation min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
              </a>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw.replace('55', '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#122e20] hover:bg-[#183b2a] border border-[#214a33] rounded-xl transition-all touch-manipulation min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Ligar Agora</span>
                </a>

                <a
                  href="#simulador"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#122e20]/80 hover:bg-[#183b2a] border border-[#214a33] rounded-xl transition-all touch-manipulation min-h-[44px]"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Simular Preço</span>
                </a>
              </div>
            </div>

            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atendimento via WhatsApp e Telefone: <strong className="text-white font-semibold">{COMPANY_INFO.phoneDisplay}</strong></span>
            </div>

            {/* Adjacency Proof Features */}
            <div className="pt-4 border-t border-[#173a27] grid grid-cols-3 gap-2 sm:gap-3 text-center sm:text-left">
              <div>
                <div className="text-base sm:text-xl font-bold text-white font-display">4,9 ★</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Avaliação do público</div>
              </div>
              <div>
                <div className="text-base sm:text-xl font-bold text-white font-display">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Produtos Anvisa</div>
              </div>
              <div>
                <div className="text-base sm:text-xl font-bold text-white font-display">Até 12 meses</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Garantia certificada</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, High-Fidelity Photo Frame */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden border border-[#1f4832] bg-[#0c2217] shadow-xl group">
              <div className="relative aspect-16/10 lg:aspect-4/3 overflow-hidden bg-[#07160e]">
                <img
                  src="/src/assets/images/hero_pest_technician_1794237007285.jpg"
                  alt="Técnico profissional da DDFER Dedetizadora em inspeção residencial em Campinas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#081810]/90 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 bg-[#081810]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/20 text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspeção Técnica de Precisão</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 bg-[#081810]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="font-medium text-white text-[11px]">Residencial & Comercial</span>
                  <span className="text-emerald-400 text-[10px] font-mono">Campinas · RMC</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
