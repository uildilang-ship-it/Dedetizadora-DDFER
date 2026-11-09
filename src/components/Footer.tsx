import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, MapPin, Phone, Clock, FileText, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPitchDossier: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPitchDossier }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${COMPANY_INFO.coords.lat},${COMPANY_INFO.coords.lng}`;

  return (
    <footer className="bg-[#05110a] border-t border-[#132c1e] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2e7d32] to-[#1b4332] flex items-center justify-center text-white border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="text-lg font-bold text-white font-display">
                DDFER
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              {COMPANY_INFO.tagline} Dedetização especializada, descupinização, desratização e controle de escorpiões em Campinas e Região Metropolitana.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenPitchDossier}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e2719] hover:bg-[#143523] text-emerald-300 border border-emerald-800/40 text-[11px] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ver Dossiê Comercial da DDFER</span>
              </button>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Serviços Oferecidos
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Dedetização de Baratas</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Descupinização de Madeira e Solo</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Desratização com Caixas Blindadas</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Controle de Formigas Urbanas</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Controle de Escorpiões</a></li>
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Manejo Comercial com Laudo Sanitário</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#servicos" className="hover:text-emerald-400 transition-colors">Catálogo Técnico</a></li>
              <li><a href="#simulador" className="hover:text-emerald-400 transition-colors">Simulador de Orçamento</a></li>
              <li><a href="#regioes" className="hover:text-emerald-400 transition-colors">Bairros Atendidos em Campinas</a></li>
              <li><a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">Avaliações 4.9★ dos Clientes</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate Data & Sede */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Sede e Contato
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address} - {COMPANY_INFO.neighborhood}, {COMPANY_INFO.city} - {COMPANY_INFO.state}, CEP {COMPANY_INFO.zip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
              <div className="pt-1">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline"
                >
                  <span>Coordenadas: {COMPANY_INFO.coords.lat}, {COMPANY_INFO.coords.lng}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#132c1e] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DDFER Dedetizadora & Controle de Pragas. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Campinas - SP</span>
            <span>·</span>
            <span>Produtos Registrados no MS/Anvisa</span>
            <span>·</span>
            <button onClick={onOpenPitchDossier} className="hover:text-emerald-400 cursor-pointer">
              Dossiê do Projeto
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
