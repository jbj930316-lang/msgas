import React from 'react';
import { Language } from '../types';

interface MetricsSectionProps {
  language: Language;
  onOpenLocations: () => void;
  onOpenPartners: () => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  language,
  onOpenLocations,
  onOpenPartners,
}) => {
  return (
    <section className="w-full bg-[#e7f6ff] py-12 lg:py-16 shadow-inner border-y border-[#004b6e]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-widest">
              MS Gas Infrastructure Network
            </span>
            <h2 className="text-[26px] sm:text-[30px] text-[#00334d] font-bold mt-1 tracking-tight">
              {language === 'KOR'
                ? '전국적인 네트워크를 통한 유기적인 업무협력을 실현합니다.'
                : 'Realizing Organic Collaboration Across Our Nationwide Infrastructure.'}
            </h2>
          </div>
          <p className="text-[14px] text-[#41484e] max-w-md leading-relaxed">
            {language === 'KOR'
              ? '전국 주요 거점을 연결하는 촘촘한 고속 배송망과 글로벌 원소재 파트너십으로 공급 안정성을 극대화합니다.'
              : 'Maximizing supply security through rapid delivery logistics connecting key domestic hubs and global raw material partnerships.'}
          </p>
        </div>

        {/* 4 High-Impact Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Stat Card 1: 광역 거점 */}
          <div
            onClick={onOpenLocations}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border border-[#004b6e]/8"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#41484e]">
                  {language === 'KOR' ? '광역 거점' : 'Regional Hubs'}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#e7f6ff] flex items-center justify-center text-[#00639a] group-hover:bg-[#004b6e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">hub</span>
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 my-2">
                <span className="text-[48px] sm:text-[54px] font-extrabold text-[#00334d] tracking-tight leading-none">
                  8
                </span>
                <span className="text-[22px] font-bold text-[#00639a]">
                  {language === 'KOR' ? '개' : 'Hubs'}
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#004b6e]/8 flex items-center justify-between text-[#41484e]">
              <span className="text-[12px] font-semibold text-[#00334d]">
                {language === 'KOR' ? '지역 거점 인프라' : 'Core Infrastructure'}
              </span>
              <span className="text-[12px] font-bold text-[#0E9F6E] flex items-center gap-1">
                <span>{language === 'KOR' ? '수도권·영남·호남' : 'Nationwide'}</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </span>
            </div>
          </div>

          {/* Stat Card 2: 유통망 */}
          <div
            onClick={onOpenLocations}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border border-[#004b6e]/8"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#41484e]">
                  {language === 'KOR' ? '유통망' : 'Direct Branch Network'}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#e7f6ff] flex items-center justify-center text-[#00639a] group-hover:bg-[#004b6e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">storefront</span>
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 my-2">
                <span className="text-[48px] sm:text-[54px] font-extrabold text-[#00334d] tracking-tight leading-none">
                  17
                </span>
                <span className="text-[22px] font-bold text-[#00639a]">
                  {language === 'KOR' ? '개' : 'Offices'}
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#004b6e]/8 flex items-center justify-between text-[#41484e]">
              <span className="text-[12px] font-semibold text-[#00334d]">
                {language === 'KOR' ? '전국 직영 영업소' : 'Direct Branch Offices'}
              </span>
              <span className="text-[12px] font-bold text-[#00639a] flex items-center gap-1">
                <span>{language === 'KOR' ? '당일 직송 대응' : 'Same-Day Dispatch'}</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </span>
            </div>
          </div>

          {/* Stat Card 3: 글로벌 파트너십 */}
          <div
            onClick={onOpenPartners}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer border border-[#004b6e]/8"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#41484e]">
                  {language === 'KOR' ? '글로벌 파트너십' : 'Global Partnerships'}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#e7f6ff] flex items-center justify-center text-[#00639a] group-hover:bg-[#004b6e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 my-2">
                <span className="text-[48px] sm:text-[54px] font-extrabold text-[#00334d] tracking-tight leading-none">
                  10
                </span>
                <span className="text-[22px] font-bold text-[#00639a]">
                  {language === 'KOR' ? '개국' : 'Countries'}
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#004b6e]/8 flex items-center justify-between text-[#41484e]">
              <span className="text-[12px] font-semibold text-[#00334d]">
                {language === 'KOR' ? '해외 네트워크 구축' : 'Global Supply Chains'}
              </span>
              <span className="text-[12px] font-bold text-[#00639a] flex items-center gap-1">
                <span>{language === 'KOR' ? '직수입 및 기술제휴' : 'Direct Import'}</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </span>
            </div>
          </div>

          {/* Stat Card 4: 연간 매출실적 (Highlight Dark Card) */}
          <div className="p-6 rounded-2xl bg-[#00334d] text-white shadow-sm flex flex-col justify-between group hover:shadow-md hover:-translate-y-0.5 transition-all border border-[#4cd6fb]/20">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#96ccff]">
                  {language === 'KOR' ? '연간 매출실적' : 'Annual Revenue'}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#004b6e] flex items-center justify-center text-[#4cd6fb]">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 my-2">
                <span className="text-[48px] sm:text-[54px] font-extrabold text-white tracking-tight leading-none">
                  935
                </span>
                <span className="text-[22px] font-bold text-[#4cd6fb]">
                  {language === 'KOR' ? '억 원' : 'KRW Bil.'}
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[#d8ebf6]">
              <span className="text-[12px] font-semibold text-white">
                2024 GAAP 기준
              </span>
              <span className="text-[12px] font-bold text-[#4cd6fb]">
                {language === 'KOR' ? '건전 재무구조' : 'Sound Financials'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
