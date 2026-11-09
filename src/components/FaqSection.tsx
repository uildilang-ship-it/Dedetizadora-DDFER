import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/mockData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#07160e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
            Perguntas Frequentes sobre Dedetização
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tudo o que você precisa saber sobre segurança, preparação do imóvel, garantia e produtos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#1b3d2b] bg-[#0c2217] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-[#102d1f]"
                >
                  <span className="text-sm sm:text-base font-semibold text-white font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#163825] flex items-center justify-center text-emerald-300 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1e4a32]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#163825] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Question not answered banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0b1f16] border border-[#1a402d] text-center space-y-3">
          <h4 className="text-sm font-bold text-white">
            Tem alguma dúvida específica sobre seu imóvel ou comércio?
          </h4>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Nossa equipe técnica atende diretamente no WhatsApp para tirar dúvidas sobre preparação do local, horários especiais e laudos.
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida técnica sobre dedetização antes de agendar.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#436423] hover:bg-[#4f7729] text-white text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Falar com o Técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
