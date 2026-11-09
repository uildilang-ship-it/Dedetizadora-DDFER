import React, { useState } from 'react';
import { COMPANY_INFO, NEIGHBORHOODS } from '../data/mockData';
import { MapPin, Navigation, ExternalLink, Clock, Search } from 'lucide-react';

export const CoverageMap: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const filtered = NEIGHBORHOODS.filter((n) => {
    const matchesSearch = n.name.toLowerCase().includes(search.toLowerCase());
    const matchesZone = selectedZone === 'all' || n.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${COMPANY_INFO.coords.lat},${COMPANY_INFO.coords.lng}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_INFO.coords.lat},${COMPANY_INFO.coords.lng}`;

  return (
    <section id="regioes" className="py-20 bg-[#07160e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sede & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Logística Ágil em Toda Campinas
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Onde a DDFER Atende
              </h2>
              <p className="text-sm text-slate-300">
                Com base instalada no Jardim São Domingos, nossas equipes móveis atendem com rapidez condomínios, residências e comércios em todas as zonas de Campinas e cidades da RMC.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-[#0c2217] border border-[#1b3d2b] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Sede Operacional DDFER</h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-emerald-400">
                    {COMPANY_INFO.neighborhood} · {COMPANY_INFO.city} – {COMPANY_INFO.state}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    CEP: {COMPANY_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#173a27] flex flex-col sm:flex-row gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-200 bg-[#122e20] hover:bg-[#1a422e] rounded-lg border border-[#1e4a34] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ver no Google Maps</span>
                </a>
                <a
                  href={routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#436423] hover:bg-[#4f7729] rounded-lg border border-[#5d8b31]/40 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota</span>
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-[#081b12] border border-[#163825] flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <strong className="text-white block font-medium">Tempo Médio de Resposta:</strong>
                <span className="text-slate-300">
                  Agendamento flexível com possibilidade de atendimento prioritário no mesmo dia para casos de escorpiões ou roedores.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive District Directory */}
          <div className="lg:col-span-7 bg-[#0b1f16] p-6 sm:p-8 rounded-2xl border border-[#1b3e2c] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#183a28]">
              <h3 className="text-base font-bold text-white font-display">
                Bairros e Cidades com Atendimento Frequente
              </h3>
              
              <div className="relative w-full sm:w-56">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar seu bairro..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#07160e] border border-[#1b3d2b] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Zone Filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {['all', 'Sul', 'Leste', 'Norte', 'Oeste', 'Centro', 'RMC'].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedZone === zone
                      ? 'bg-[#436423] text-white'
                      : 'bg-[#07160e] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {zone === 'all' ? 'Todas as Regiões' : `Zona ${zone}`}
                </button>
              ))}
            </div>

            {/* Neighborhoods Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto pr-1">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between transition-all ${
                    item.highlight
                      ? 'bg-[#133522] border-emerald-500/40 text-white font-semibold'
                      : 'bg-[#081810] border-[#183a28] text-slate-300'
                  }`}
                >
                  <span className="truncate">{item.name}</span>
                  <span className="text-[10px] text-emerald-400 font-mono shrink-0 ml-1">
                    {item.zone}
                  </span>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full py-8 text-center text-xs text-slate-400">
                  Bairro não listado? Não se preocupe: a DDFER atende todo o município de Campinas e cidades vizinhas. Solicite no WhatsApp!
                </div>
              )}
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
              <span>Não encontrou seu condomínio?</span>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent('Olá! A DDFER atende no meu condomínio/bairro em Campinas?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:underline"
              >
                Consultar Disponibilidade no WhatsApp →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
