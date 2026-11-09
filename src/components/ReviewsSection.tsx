import React, { useState } from 'react';
import { REVIEWS, COMPANY_INFO } from '../data/mockData';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = REVIEWS.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'residencial') return r.serviceType.toLowerCase().includes('residencial') || r.serviceType.toLowerCase().includes('formigas');
    if (filter === 'comercial') return r.serviceType.toLowerCase().includes('comercial');
    if (filter === 'especial') return r.serviceType.toLowerCase().includes('escorpiões') || r.serviceType.toLowerCase().includes('descupinização');
    return true;
  });

  return (
    <section id="avaliacoes" className="py-20 bg-[#091e13] border-t border-[#183a28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#183a28]">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Satisfação Comprovada
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
              Quem Conhece a DDFER Recomenda
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Mais de 70 avaliações registradas em diretórios e no Google com nota média de 4,9 estrelas em Campinas e região.
            </p>
          </div>

          {/* Aggregate Score Card */}
          <div className="p-4 rounded-2xl bg-[#0c2619] border border-[#1f4832] flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white font-display tabular-nums">
                4,9
              </div>
              <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#183a28]" />
            <div className="text-xs space-y-0.5">
              <span className="font-bold text-white block">Nota Máxima Regional</span>
              <span className="text-slate-400 block">+70 clientes avaliados</span>
              <span className="text-[10px] text-emerald-400 font-mono">Campinas & Região</span>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 pt-6 pb-8 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-[#436423] text-white shadow-sm'
                : 'bg-[#07160e] text-slate-300 hover:text-white border border-[#183a28]'
            }`}
          >
            Todos os Depoimentos
          </button>
          <button
            onClick={() => setFilter('residencial')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              filter === 'residencial'
                ? 'bg-[#436423] text-white shadow-sm'
                : 'bg-[#07160e] text-slate-300 hover:text-white border border-[#183a28]'
            }`}
          >
            Residências & Pets
          </button>
          <button
            onClick={() => setFilter('comercial')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              filter === 'comercial'
                ? 'bg-[#436423] text-white shadow-sm'
                : 'bg-[#07160e] text-slate-300 hover:text-white border border-[#183a28]'
            }`}
          >
            Restaurantes & Comércios
          </button>
          <button
            onClick={() => setFilter('especial')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
              filter === 'especial'
                ? 'bg-[#436423] text-white shadow-sm'
                : 'bg-[#07160e] text-slate-300 hover:text-white border border-[#183a28]'
            }`}
          >
            Escorpiões & Cupins
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#0b2216] border border-[#1a402d] flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors shadow-md"
            >
              <div className="space-y-3">
                {/* Stars and Service Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    {review.serviceType}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Adjacency */}
              <div className="pt-4 border-t border-[#163825] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{review.name}</div>
                  <div className="text-[11px] text-slate-400">{review.location}</div>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box to leave review or consult Google */}
        <div className="mt-12 p-6 rounded-2xl bg-[#07160e] border border-[#163825] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">
              Já é cliente da DDFER em Campinas?
            </h4>
            <p className="text-xs text-slate-400">
              Sua opinião ajuda outros moradores e comerciantes a encontrarem dedetização séria e garantida.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Olá DDFER! Gostaria de deixar um depoimento sobre o serviço realizado no meu imóvel.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#163825] hover:bg-[#1f4e34] text-emerald-300 border border-emerald-500/30 transition-colors whitespace-nowrap"
          >
            Enviar Depoimento no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
