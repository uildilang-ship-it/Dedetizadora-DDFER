import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface PestCard {
  name: string;
  scientificName: string;
  dangerLevel: 'Crítico' | 'Alto' | 'Moderado';
  signs: string[];
  campinasRisk: string;
  solution: string;
}

const CAMPINAS_PESTS: PestCard[] = [
  {
    name: 'Escorpião Amarelo',
    scientificName: 'Tityus serrulatus',
    dangerLevel: 'Crítico',
    signs: [
      'Visualização perto de ralos, caixas de gordura e frestas',
      'Presença de entulho, folhas secas e materiais de construção no quintal',
      'Surgimento em banheiros ou áreas de serviço à noite',
    ],
    campinasRisk: 'Campinas registra anualmente centenas de acidentes escorpiônicos. A praga se prolifera pelo esgoto alimentando-se de baratas.',
    solution: 'Inspeção técnica, vedação física, barreira química microencapsulada e choque em colônias de baratas.',
  },
  {
    name: 'Barata Francesinha / Germânica',
    scientificName: 'Blattella germanica',
    dangerLevel: 'Alto',
    signs: [
      'Pequenas baratas marrons saindo de frestas ao acender a luz da cozinha',
      'Pontos escuros (fezes) atrás da geladeira e no micro-ondas',
      'Cheiro adocicado característico de colônia estabelecida',
    ],
    campinasRisk: 'Praga mais comum em apartamentos, cozinhas residenciais e restaurantes no Cambuí, Taquaral e São Domingos.',
    solution: 'Gel isca inodoro de alta atratividade com efeito dominó (elimina ovos e ninhos inteiros).',
  },
  {
    name: 'Cupins de Solo e Madeira Seca',
    scientificName: 'Coptotermes gestroi / Cryptotermes',
    dangerLevel: 'Alto',
    signs: [
      'Pó fino parecido com serragem acumulado embaixo de portas ou armários',
      'Asas descartadas no chão após dias quentes de revoada',
      'Madeira oca que quebra com leve pressão dos dedos',
    ],
    campinasRisk: 'Perda estrutural de telhados, decks, pisos laminados e móveis planejados em residências e condomínios.',
    solution: 'Tratamento com injeção sob pressão, barreira química no solo e micro-pulverização residual.',
  },
  {
    name: 'Roedores Urbanos (Ratos & Ratazanas)',
    scientificName: 'Rattus norvegicus / Mus musculus',
    dangerLevel: 'Crítico',
    signs: [
      'Barulhos de arranhões no forro de gesso ou telhado durante a madrugada',
      'Fezes cilíndricas escuras em despensas ou garagens',
      'Fios elétricos e embalagens roídas',
    ],
    campinasRisk: 'Transmissão de leptospirose e risco de incêndio por curto-circuito em comércios e casas.',
    solution: 'Instalação de caixas blindadas com raticidas anticoagulantes de dose única e vedação de passagens.',
  },
];

export const PestGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activePest = CAMPINAS_PESTS[activeTab];

  const getWhatsAppForPest = (pestName: string) => {
    const text = `Olá! Identifiquei sinais de ${pestName} no meu imóvel em Campinas e gostaria de um orçamento de controle com a DDFER.`;
    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-[#091d13] border-t border-[#183a28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Diagnóstico Rápido
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
            Guia de Pragas Críticas em Campinas
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Reconheça os sinais de perigo e saiba qual é a intervenção correta antes que a infestação se espalhe pela estrutura.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {CAMPINAS_PESTS.map((pest, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                activeTab === idx
                  ? 'bg-[#1b4332] text-white border-emerald-400 shadow-md'
                  : 'bg-[#081810] text-slate-300 border-[#183a28] hover:border-slate-500'
              }`}
            >
              {pest.name}
            </button>
          ))}
        </div>

        {/* Active Pest Spotlight Card */}
        <div className="mt-8 rounded-2xl bg-[#0b2418] border border-[#1d4833] p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#183a28]">
            <div>
              <div className="text-xs text-emerald-400 font-mono italic">
                {activePest.scientificName}
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                {activePest.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Nível de Risco:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  activePest.dangerLevel === 'Crítico'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                    : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                }`}
              >
                {activePest.dangerLevel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Signs to watch out */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Sinais Comuns de Infestação:</span>
              </div>
              <ul className="space-y-2.5">
                {activePest.signs.map((sign, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-[#07160e] border border-[#163825] text-xs text-slate-300 space-y-1">
                <strong className="text-emerald-400 block">Cenário em Campinas e Região:</strong>
                <p>{activePest.campinasRisk}</p>
              </div>
            </div>

            {/* Treatment Protocol */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  <span>Protocolo de Eliminação DDFER:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-[#07160e] p-4 rounded-xl border border-[#163825]">
                  {activePest.solution}
                </p>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Produtos sem toxicidade volátil prejudicial para animais de estimação.</span>
                </div>
              </div>

              <a
                href={getWhatsAppForPest(activePest.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#436423] hover:bg-[#4f7729] text-white text-xs font-semibold shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Solicitar Inspeção para {activePest.name}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
