import React, { useState } from 'react';
import { COMPANY_INFO, NEIGHBORHOODS } from '../data/mockData';
import { Home, Building2, Store, Factory, Send, Sparkles, CheckCircle2, Shield } from 'lucide-react';

const PROPERTY_TYPES = [
  { id: 'casa', label: 'Casa / Sobrado', icon: Home, desc: 'Residências unifamiliares' },
  { id: 'apartamento', label: 'Apartamento', icon: Building2, desc: 'Condomínios verticais' },
  { id: 'comercio', label: 'Restaurante / Comércio', icon: Store, desc: 'Exige laudo sanitário' },
  { id: 'condominio', label: 'Empresa / Condomínio', icon: Factory, desc: 'Áreas comuns ou galpão' },
];

const PEST_OPTIONS = [
  { id: 'baratas', label: 'Baratas', desc: 'Cozinha ou esgoto' },
  { id: 'cupins', label: 'Cupins / Brocas', desc: 'Madeira ou solo' },
  { id: 'ratos', label: 'Ratos / Roedores', desc: 'Forros ou quintal' },
  { id: 'escorpioes', label: 'Escorpiões', desc: 'Risco iminente' },
  { id: 'formigas', label: 'Formigas', desc: 'Paredes e fiações' },
  { id: 'combo', label: 'Dedetização Geral', desc: 'Proteção total preventiva' },
];

const URGENCY_LEVELS = [
  { id: 'normal', label: 'Agendamento Normal', note: 'Para os próximos dias' },
  { id: 'urgente', label: 'Urgente (Hoje/Amanhã)', note: 'Prioridade máxima' },
  { id: 'preventivo', label: 'Contrato Recorrente', note: 'Mensal ou bimestral' },
];

export const BudgetSimulator: React.FC = () => {
  const [property, setProperty] = useState('casa');
  const [selectedPests, setSelectedPests] = useState<string[]>(['baratas']);
  const [neighborhood, setNeighborhood] = useState('Jardim São Domingos (Base DDFER)');
  const [urgency, setUrgency] = useState('normal');
  const [customNotes, setCustomNotes] = useState('');

  const togglePest = (pestId: string) => {
    if (selectedPests.includes(pestId)) {
      if (selectedPests.length > 1) {
        setSelectedPests(selectedPests.filter((p) => p !== pestId));
      }
    } else {
      setSelectedPests([...selectedPests, pestId]);
    }
  };

  const propertyObj = PROPERTY_TYPES.find((p) => p.id === property);
  const urgencyObj = URGENCY_LEVELS.find((u) => u.id === urgency);
  const pestsLabel = selectedPests
    .map((pId) => PEST_OPTIONS.find((p) => p.id === pId)?.label)
    .filter(Boolean)
    .join(', ');

  const formattedWhatsAppText = `Olá DDFER Dedetizadora! Gostaria de um orçamento detalhado:

• Imóvel: ${propertyObj?.label || property}
• Pragas a combater: ${pestsLabel}
• Bairro / Cidade: ${neighborhood}
• Urgência: ${urgencyObj?.label} (${urgencyObj?.note})
${customNotes ? `• Detalhes adicionais: ${customNotes}\n` : ''}
Poderiam me passar os valores e a previsão de atendimento? Obrigado!`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    formattedWhatsAppText
  )}`;

  return (
    <section id="simulador" className="py-20 bg-[#07160e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Orçamento Rápido em 3 Passos
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
            Simulador de Atendimento Personalizado
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Selecione as características do seu imóvel e das pragas. O sistema monta uma solicitação personalizada para o WhatsApp oficial da DDFER.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0b1f16] p-6 sm:p-8 rounded-2xl border border-[#1b3e2c]">
            
            {/* Step 1: Property Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white block">
                1. Tipo de Imóvel:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PROPERTY_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = property === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProperty(type.id)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                        isSelected
                          ? 'bg-[#1b4332] border-emerald-400 text-white shadow-md'
                          : 'bg-[#081810] border-[#183a28] text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`} />
                      <div>
                        <div className="text-xs font-bold leading-tight">{type.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{type.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Pests */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-white block">
                2. Pragas Encontradas no Local (selecione uma ou mais):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PEST_OPTIONS.map((pest) => {
                  const isSelected = selectedPests.includes(pest.id);
                  return (
                    <button
                      key={pest.id}
                      type="button"
                      onClick={() => togglePest(pest.id)}
                      className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                        isSelected
                          ? 'bg-[#1b4332] border-emerald-400 text-white shadow-sm'
                          : 'bg-[#081810] border-[#183a28] text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isSelected ? 'text-emerald-300 fill-emerald-950' : 'text-slate-600'
                        }`}
                      />
                      <div>
                        <div className="text-xs font-bold">{pest.label}</div>
                        <div className="text-[10px] text-slate-400">{pest.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Location and Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white block">
                  3. Bairro / Região em Campinas:
                </label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#081810] border border-[#1b3e2c] text-white text-xs focus:outline-none focus:border-emerald-400"
                >
                  {NEIGHBORHOODS.map((n, i) => (
                    <option key={i} value={n.name}>
                      {n.name} ({n.zone})
                    </option>
                  ))}
                  <option value="Outro bairro de Campinas">Outro bairro de Campinas</option>
                  <option value="Outra cidade da Região Metropolitana">Outra cidade da RMC</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white block">
                  4. Urgência do Atendimento:
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#081810] border border-[#1b3e2c] text-white text-xs focus:outline-none focus:border-emerald-400"
                >
                  {URGENCY_LEVELS.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.label} - {u.note}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional note */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 block">
                Observações adicionais (ex: "temos cachorros no quintal", "infestação no forro"):
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ex: Apartamento 3 quartos, apareceu no armário da cozinha..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#081810] border border-[#1b3e2c] text-slate-200 text-xs focus:outline-none focus:border-emerald-400 placeholder:text-slate-600"
              />
            </div>

          </div>

          {/* Live Output & WhatsApp Trigger (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#092217] border border-[#1f4a35] shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#183a28]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">
                      Resumo da Sua Solicitação
                    </h3>
                    <span className="text-[11px] text-emerald-400">
                      Orçamento sem compromisso
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">DDFER WhatsApp</span>
              </div>

              {/* Message Preview Container */}
              <div className="p-4 rounded-xl bg-[#06150e] border border-[#143021] text-xs space-y-3 font-mono text-slate-300 leading-relaxed">
                <div className="text-emerald-400 font-semibold font-sans">
                  Prévia da mensagem pronta:
                </div>
                <div className="whitespace-pre-wrap text-slate-200 bg-[#040e09] p-3 rounded-lg border border-[#0d2217]">
                  {formattedWhatsAppText}
                </div>
              </div>

              {/* Quick Perks */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atendimento direto pelo telefone oficial: <strong>{COMPANY_INFO.phoneDisplay}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem intermediários ou taxas extras de agendamento.</span>
                </div>
              </div>

              {/* Big Green Trigger Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25d366] hover:bg-[#20ba59] active:bg-[#1caa50] text-[#051a0f] font-bold rounded-xl shadow-lg shadow-emerald-950/50 transition-all text-sm hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Orçamento no WhatsApp Agora</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Ao clicar, o WhatsApp abrirá diretamente com as informações preenchidas.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
