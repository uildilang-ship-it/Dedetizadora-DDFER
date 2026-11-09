import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Circle, AlertCircle, Copy, Check, MessageSquare, ExternalLink, ShieldCheck, MapPin, Phone, Star } from 'lucide-react';
import { COMPANY_INFO, INITIAL_PITCH_CHECKLIST } from '../data/mockData';
import { PitchChecklistItem } from '../types';

interface DossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierDrawer: React.FC<DossierDrawerProps> = ({ isOpen, onClose }) => {
  const [checklist, setChecklist] = useState<PitchChecklistItem[]>(() => {
    const saved = localStorage.getItem('ddfer_pitch_checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_PITCH_CHECKLIST;
      }
    }
    return INITIAL_PITCH_CHECKLIST;
  });

  const [copiedScript, setCopiedScript] = useState(false);

  useEffect(() => {
    localStorage.setItem('ddfer_pitch_checklist', JSON.stringify(checklist));
  }, [checklist]);

  if (!isOpen) return null;

  const toggleStatus = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'confirmado' ? 'pendente' : 'confirmado' }
          : item
      )
    );
  };

  const confirmedCount = checklist.filter((item) => item.status === 'confirmado').length;
  const totalCount = checklist.length;

  const pitchScript = `Olá! Tudo bem? Meu nome é [Seu Nome].

Estava pesquisando sobre dedetizadoras de referência em Campinas e notei que a DDFER possui uma excelente reputação (nota 4.9 estrelas no Google com mais de 70 avaliações de clientes satisfeitos no Jardim São Domingos e região).

Percebi que muitos clientes hoje procuram dedetização urgente pelo celular e decidem pelo WhatsApp. Por isso, preparei uma demonstração exclusiva de um site comercial de alta conversão para a DDFER, com foco em transformar as buscas do Google em pedidos diretos de orçamento no WhatsApp:

🔗 ${window.location.href}

Destaques da proposta para a DDFER:
• Botão direto para o seu WhatsApp ${(COMPANY_INFO.phoneDisplay)} com mensagem pré-formatada por tipo de praga e bairro.
• Catálogo com as pragas mais comuns de Campinas (baratas, cupins, escorpiões, ratos e formigas).
• Destaque para a nota 4.9★ e credibilidade no Jardim São Domingos e RMC.
• Simulador onde o próprio cliente escolhe o imóvel e já manda o pedido detalhado.

Gostaria de agendar 5 minutinhos para você ver a demonstração no ar e decidirmos se faz sentido para vocês? Um abraço!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pitchScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const directPitchWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    pitchScript
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c1f16] border-l border-[#1f4530] text-slate-200 flex flex-col h-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#1b3d2b] bg-[#07170f] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                Dossiê Comercial & Estratégia de Venda
              </h2>
              <p className="text-xs text-slate-400">
                Levantamento comercial e plano de abordagem para fechar com o proprietário da DDFER
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#153423] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {/* Quick Info Box */}
          <div className="p-4 rounded-xl bg-[#08170f] border border-[#1b3d2b] space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#142e20]">
              <span className="font-semibold text-white">Dados Confirmados da Empresa</span>
              <span className="text-xs text-emerald-400 font-mono">Campinas, SP</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>4,9 ★ (~70 a 75 avaliações)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300 sm:col-span-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address} - {COMPANY_INFO.neighborhood}, {COMPANY_INFO.city} - SP</span>
              </div>
            </div>
          </div>

          {/* Section 1: Checklist de Validação com o Proprietário */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base">
                  Checklist de Informações Pendentes
                </h3>
                <p className="text-xs text-slate-400">
                  Marque o que já conseguiu confirmar na conversa com o dono
                </p>
              </div>
              <div className="px-3 py-1 bg-[#133522] rounded-full text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                {confirmedCount} de {totalCount} confirmadas
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#08170f] rounded-full overflow-hidden border border-[#1b3d2b]">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-300"
                style={{ width: `${(confirmedCount / totalCount) * 100}%` }}
              />
            </div>

            <div className="space-y-2.5 pt-1">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleStatus(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    item.status === 'confirmado'
                      ? 'bg-[#102c1e]/60 border-emerald-500/40'
                      : 'bg-[#081810]/70 border-[#1a3828] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-emerald-400 transition-transform active:scale-90"
                    >
                      {item.status === 'confirmado' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500" />
                      )}
                    </button>
                    <div className="space-y-1">
                      <p className={`text-sm font-medium ${item.status === 'confirmado' ? 'text-white' : 'text-slate-300'}`}>
                        {item.question}
                      </p>
                      <p className="text-xs text-slate-400">
                        <strong className="text-emerald-300/80">Proposta atual:</strong> {item.note}
                      </p>
                      <p className="text-[11px] text-amber-300/70">
                        Impacto comercial: {item.commercialImpact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Estratégia de Abordagem & Script Pronto */}
          <div className="p-4 rounded-xl bg-[#08170f] border border-[#1b3d2b] space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Script de Abordagem no WhatsApp
              </h3>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-[#163825] hover:bg-[#1e4a32] text-emerald-200 border border-emerald-500/30 transition-colors cursor-pointer"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Script</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Você não vai chegar oferecendo "um site genérico". Você chega com a demonstração viva, personalizada com o nome DDFER, endereço em Campinas e botão direto para o telefone dele.
            </p>

            <div className="p-3 bg-[#05100a] rounded-lg border border-[#132d1f] text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
              {pitchScript}
            </div>

            <a
              href={directPitchWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25d366]/20 hover:bg-[#25d366]/30 text-emerald-300 border border-[#25d366]/40 rounded-lg text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Abrir WhatsApp do Proprietário com o Script Pré-preenchido
            </a>
          </div>

          {/* Section 3: Orientações de Fotos e Reputação */}
          <div className="p-4 rounded-xl bg-[#091811] border border-[#1d402e] space-y-2">
            <h4 className="font-semibold text-white flex items-center gap-2 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Cuidado com Fotos & Avaliações
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              As imagens exibidas no site são <strong>fotografias profissionais de alta resolução do setor</strong> (equipamentos, EPIs e métodos padronizados). Na reunião com o proprietário, solicite:
            </p>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
              <li>Fotos reais dos veículos da frota identificada da DDFER.</li>
              <li>Fotos dos técnicos uniformizados em atendimento.</li>
              <li>Logotipo em alta resolução.</li>
              <li>Confirmação da quantidade exata de avaliações no painel do Google Meu Negócio.</li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#1b3d2b] bg-[#07170f] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Dossiê de Apoio à Proposta Comercial
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#173d27] hover:bg-[#1f5033] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
          >
            Fechar Dossiê e Ver Site
          </button>
        </div>
      </div>
    </div>
  );
};
