import React from 'react';
import { Star, ShieldAlert, Award, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="border-y border-[#183a28] bg-[#07160e] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display tabular-nums">
                {COMPANY_INFO.rating} ★
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Reputação Comprovada
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Mais de 70 avaliações registradas em diretórios e Google
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display">
                Garantia Real
              </div>
              <div className="text-xs text-slate-300 font-medium">
                De 3 a 12 Meses
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Certificado por escrito com reforço sem custo em caso de reincidência
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display">
                Sem Cheiro Forte
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Pet & Kids Friendly
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Géis e caldas microencapsuladas registradas no Ministério da Saúde
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display">
                Agilidade Campinas
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Sede Jardim São Domingos
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Atendimento rápido para todas as regiões de Campinas e cidades vizinhas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
