import React from 'react';
import { Language } from '../types';

interface OverviewSectionProps {
  language: Language;
  onOpenHistory: () => void;
  onOpenLocations: () => void;
  onOpenMsds: () => void;
  onOpenEsgModal: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  language,
  onOpenHistory,
  onOpenLocations,
  onOpenMsds,
  onOpenEsgModal,
}) => {
  return (
    <section className="w-full bg-[#f4faff] py-20 lg:py-24" id="overview-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
            MS가스 Overview
          </span>
          <h2 className="text-[30px] sm:text-[38px] text-[#00334d] font-bold tracking-tight mt-2 mb-4">
            {language === 'KOR'
              ? '고부가가치형 가스산업을 주도하는 선도적 기업'
              : 'Leading High-Value Industrial Gas Innovation'}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#41484e] leading-relaxed">
            {language === 'KOR'
              ? '(주)MS가스는 1974년에 설립된 가스 전문제조유통기업으로 산업용, 연료용 가스 등 다성분 혼합가스 전 품목의 전국적인 유통망을 구축하고 있습니다.'
              : 'Established in 1974, MS GAS is a specialized gas manufacturing and distribution enterprise operating an integrated nationwide network across industrial, fuel, medical, and multi-component specialty gases.'}
          </p>
        </div>

        {/* 4 Pillars Asymmetric Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Block 1: ESG 경영 (Dark Accent Card) */}
          <div
            onClick={onOpenEsgModal}
            className="rounded-2xl overflow-hidden bg-[#00334d] text-white p-7 flex flex-col justify-between shadow-sm relative group hover:shadow-xl hover:-translate-y-1 transition-all border border-[#4cd6fb]/20 cursor-pointer"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#00639a]/30 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#b3ebff] tracking-widest uppercase">
                  ESG Initiative
                </span>
                <span className="material-symbols-outlined text-[#4cd6fb] text-[24px]">eco</span>
              </div>
              <h3 className="text-[22px] font-bold text-white mb-3">
                {language === 'KOR' ? 'ESG 경영' : 'ESG Leadership'}
              </h3>
              <p className="text-[14px] text-[#d8ebf6] leading-relaxed mb-6">
                {language === 'KOR'
                  ? '탄소중립 실현을 위한 수소·암모니아 친환경 벙커링 인프라 연구와 선박 혼소 연료추진 실증 R&D를 선도합니다.'
                  : 'Leading demonstration R&D for eco-friendly hydrogen and ammonia marine bunkering to realize carbon neutrality.'}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[#4cd6fb]">
                {language === 'KOR' ? '친환경 밸류체인 전환' : 'Clean Value Chain'}
              </span>
              <span className="material-symbols-outlined text-white text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Block 2: 1974년 역사 */}
          <div
            onClick={onOpenHistory}
            className="rounded-2xl bg-white p-7 flex flex-col justify-between shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#00639a] tracking-widest uppercase">
                  Heritage
                </span>
                <span className="material-symbols-outlined text-[#00334d] text-[24px]">history</span>
              </div>
              <h3 className="text-[22px] font-bold text-[#00334d] mb-3">
                {language === 'KOR' ? '1974년 설립' : 'Founded in 1974'}
              </h3>
              <p className="text-[14px] text-[#41484e] leading-relaxed mb-6">
                {language === 'KOR'
                  ? '반세기 동안 흔들림 없이 축적된 초고순도 정제 노하우와 대한민국 산업화의 궤적을 함께한 신뢰의 역사입니다.'
                  : 'Over 50 years of uncompromising purification expertise, accompanying the path of Korea\'s industrial advancement.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#004b6e]/8 flex items-center justify-between">
              <span className="text-[12px] text-[#41484e] font-semibold">
                {language === 'KOR' ? '50년 엔지니어링 업력' : '50 Years Track Record'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Block 3: 전국적 운송능력 */}
          <div
            onClick={onOpenLocations}
            className="rounded-2xl bg-white p-7 flex flex-col justify-between shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#00639a] tracking-widest uppercase">
                  Networks
                </span>
                <span className="material-symbols-outlined text-[#00334d] text-[24px]">local_shipping</span>
              </div>
              <h3 className="text-[22px] font-bold text-[#00334d] mb-3">
                {language === 'KOR' ? '전국적 운송능력' : 'Nationwide Fleet'}
              </h3>
              <p className="text-[14px] text-[#41484e] leading-relaxed mb-6">
                {language === 'KOR'
                  ? '광역 물류 거점과 대규모 특수 탱크로리 함대를 통해 365일 결함 없는 무정전 에너지 공급체계를 보장합니다.'
                  : 'Guaranteeing 365-day uninterruptible energy delivery through extensive regional hubs and modern cryogenic fleets.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#004b6e]/8 flex items-center justify-between">
              <span className="text-[12px] text-[#41484e] font-semibold">
                {language === 'KOR' ? '17개 영업소 직송' : '17 Direct Branches'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Block 4: MSDS & 품질인증 */}
          <div
            onClick={onOpenMsds}
            className="rounded-2xl bg-white p-7 flex flex-col justify-between shadow-sm group hover:shadow-lg hover:-translate-y-1 transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#00639a] tracking-widest uppercase">
                  Compliance
                </span>
                <span className="material-symbols-outlined text-[#00334d] text-[24px]">description</span>
              </div>
              <h3 className="text-[22px] font-bold text-[#00334d] mb-3">
                {language === 'KOR' ? 'MSDS & 인증현황' : 'MSDS & Quality Certs'}
              </h3>
              <p className="text-[14px] text-[#41484e] leading-relaxed mb-6">
                {language === 'KOR'
                  ? '모든 가스 화학물질의 물질안전보건자료(MSDS) 최신본을 온라인으로 제공하며 ISO 9001, 14001 인증을 유지합니다.'
                  : 'Instant online retrieval of updated safety data sheets (MSDS) with audited ISO 9001 and ISO 14001 certified protocols.'}
              </p>
            </div>
            <div className="pt-4 border-t border-[#004b6e]/8 flex items-center justify-between">
              <span className="text-[12px] text-[#41484e] font-semibold">
                {language === 'KOR' ? '온라인 자료실 열람' : 'Browse Library'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
