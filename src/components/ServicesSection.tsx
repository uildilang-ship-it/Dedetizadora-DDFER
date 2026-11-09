import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data/mockData';
import { ServiceItem } from '../types';
import { ArrowRight, Check, Shield, AlertTriangle, MessageCircle, X, Info } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residencial' | 'comercial' | 'especial'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  const getWhatsAppForService = (serviceTitle: string) => {
    const text = `Olá! Gostaria de um orçamento para o serviço de ${serviceTitle} em Campinas com a DDFER.`;
    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-20 bg-[#091a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1b3d2c]">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Controle Integrado de Pragas em Campinas
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display text-balance">
              Serviços Especializados para sua Proteção
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Métodos modernos, equipamentos calibrados e defensivos regulamentados pela Anvisa para eliminar a infestação sem colocar sua rotina em risco.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#06140e] rounded-xl border border-[#163825] shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-[#436423] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Todos ({SERVICES.length})
            </button>
            <button
              onClick={() => setFilter('residencial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'residencial'
                  ? 'bg-[#436423] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Residencial
            </button>
            <button
              onClick={() => setFilter('comercial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'comercial'
                  ? 'bg-[#436423] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Comércio & Restaurantes
            </button>
            <button
              onClick={() => setFilter('especial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'especial'
                  ? 'bg-[#436423] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Cupins & Escorpiões
            </button>
          </div>
        </div>

        {/* Ethical disclaimer note per brief */}
        <div className="my-6 p-3.5 rounded-xl bg-[#0c2419] border border-[#1d4732] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Padrão Técnico Operacional:</strong> Técnicos capacitados, uso obrigatório de EPIs e equipamentos profissionais de aspersão calibrada.
            </span>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono">
            Conforme Normas da Anvisa RDC 52/2009
          </span>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-[#1b3d2b] bg-[#0c2217] overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/20"
            >
              {/* Image Frame with pristine, properly cropped aspect ratio */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#07160e]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2217] via-transparent to-transparent opacity-90" />
                
                {/* Clean unboxed category tag */}
                <div className="absolute top-3 left-3 bg-[#081810]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-emerald-300 border border-emerald-900/50">
                  {service.category === 'residencial' ? 'Residencial' : service.category === 'comercial' ? 'Comercial' : 'Especializado'}
                </div>

                <div className="absolute top-3 right-3 bg-[#081810]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-300 border border-amber-900/50">
                  Garantia {service.guaranteeMonths} meses
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Key Bullet Features */}
                <div className="space-y-1.5 pt-2 border-t border-[#163825]">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppForService(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#436423] hover:bg-[#4f7729] text-white flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Orçar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0c2217] border border-[#1f4832] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto text-slate-200 p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#153826] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/9 rounded-xl overflow-hidden relative bg-[#07160e]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2217] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Procedimento Técnico
                </span>
                <h3 className="text-2xl font-bold font-display">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#07160e] border border-[#1b3e2b] space-y-2">
              <span className="text-xs font-semibold text-white block">Pragas Alvo neste Tratamento:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.pests.map((pest, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2.5 py-1 rounded bg-[#133322] text-emerald-300 text-xs border border-emerald-900/50"
                  >
                    {pest}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-white block">Diferenciais da Aplicação:</span>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia formal de {selectedService.guaranteeMonths} meses com reforço se necessário.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#183a27]">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium rounded-lg text-slate-300 hover:text-white"
              >
                Voltar
              </button>
              <a
                href={getWhatsAppForService(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#436423] hover:bg-[#4f7729] text-white flex items-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Solicitar Este Serviço no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
