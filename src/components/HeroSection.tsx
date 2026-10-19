import React from 'react';
import { HERO_BG_URL } from '../data/mockData';
import { Language } from '../types';

interface HeroSectionProps {
  language: Language;
  onOpenQuote: () => void;
  onOpenTelemetry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenQuote,
  onOpenTelemetry,
}) => {
  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#00334d] text-white">
      {/* Ambient Energy Grid Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient cx="30%" cy="40%" id="hero-glow-1" r="55%">
              <stop offset="0%" stopColor="#4cd6fb" stopOpacity="0.25"></stop>
              <stop offset="70%" stopColor="#004b6e" stopOpacity="0.05"></stop>
              <stop offset="100%" stopColor="#001e2f" stopOpacity="0"></stop>
            </radialGradient>
            <linearGradient id="grid-line-glow" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#2fc3e8" stopOpacity="0.15"></stop>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02"></stop>
            </linearGradient>
          </defs>
          <rect fill="url(#hero-glow-1)" height="100%" width="100%"></rect>
          <g opacity="0.6" stroke="url(#grid-line-glow)" strokeDasharray="4 6" strokeWidth="0.75">
            <line x1="0" x2="100%" y1="20%" y2="20%"></line>
            <line x1="0" x2="100%" y1="50%" y2="50%"></line>
            <line x1="0" x2="100%" y1="80%" y2="80%"></line>
            <line x1="20%" x2="20%" y1="0" y2="100%"></line>
            <line x1="50%" x2="50%" y1="0" y2="100%"></line>
            <line x1="80%" x2="80%" y1="0" y2="100%"></line>
          </g>
        </svg>
      </div>

      {/* Background Industrial Landscape Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 z-10 flex flex-col justify-between min-h-[580px]">
        {/* Top Badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md shadow-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#4cd6fb] animate-pulse"></span>
            <span className="text-[12px] font-semibold text-[#b3ebff] tracking-wider uppercase">
              {language === 'KOR'
                ? '1974년부터 이어온 신뢰와 기술력'
                : 'Trust & Engineering Since 1974'}
            </span>
          </span>
          <span className="hidden sm:inline-flex items-center text-[#85bae3] text-[12px] font-medium tracking-wide">
            <span className="opacity-40 mr-2">/</span>
            {language === 'KOR'
              ? '반도체 · 의료 · 청정 에너지 특화'
              : 'Semiconductor · Medical · Clean Energy'}
          </span>
        </div>

        {/* Main Slogan & Corporate Manifesto */}
        <div className="my-8 max-w-4xl">
          <p className="text-[14px] text-[#96ccff] font-bold uppercase tracking-widest mb-3">
            {language === 'KOR'
              ? '고객과 함께하는 신뢰받는 기업'
              : 'A Trusted Partner Built on Enduring Reliability'}
          </p>
          <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] text-white font-extrabold tracking-tight leading-[1.15] mb-6">
            가스 설계부터 공급, 유지까지<br className="hidden md:inline" />{' '}
            <span className="text-[#4cd6fb]">전 공정을 아우르는</span> 원스톱 토탈 솔루션
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#e7f6ff]/90 max-w-2xl leading-relaxed">
            {language === 'KOR'
              ? '보이지 않는 에너지를 통해 사람들의 삶을 따뜻하게 연결합니다. 언제나 그 자리에, 조용히 그리고 변함없이 MS가스는 오늘도 당신의 일상을 지키고 있습니다.'
              : 'Connecting lives with invisible energy. Quietly, reliably, and consistently, MS GAS protects industrial safety and daily life across the nation.'}
          </p>
        </div>

        {/* Actions & Operational Telemetry Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4cd6fb] text-[#001f27] text-[14px] font-bold hover:bg-white hover:shadow-lg transition-all shadow-md cursor-pointer group"
            >
              <span>{language === 'KOR' ? '제품 및 솔루션 알아보기' : 'Explore Products'}</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </button>
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white text-[14px] font-semibold hover:bg-white/20 transition-all shadow-sm border border-white/20 cursor-pointer"
            >
              <span>{language === 'KOR' ? '공급 상담 문의' : 'Supply Consultation'}</span>
              <span className="material-symbols-outlined text-[18px]">headset_mic</span>
            </button>
          </div>

          {/* Telemetry Live Status Pill */}
          <button
            type="button"
            onClick={onOpenTelemetry}
            className="flex items-center gap-4 px-5 py-3 rounded-xl bg-[#004b6e]/70 backdrop-blur-md border border-[#4cd6fb]/20 shadow-inner hover:bg-[#004b6e] transition-colors text-left cursor-pointer group"
            title="실시간 17개소 관제 현황 상세 보기"
          >
            <div className="flex flex-col">
              <span className="text-[11px] text-[#96ccff] uppercase tracking-wider font-semibold">
                {language === 'KOR' ? '안전 가동 현황' : 'Safety Status'}
              </span>
              <span className="text-[13px] text-white font-semibold flex items-center gap-1.5">
                <span>{language === 'KOR' ? '전국 17개소 실시간 통합관제 중' : '17 Stations Real-Time Control'}</span>
                <span className="material-symbols-outlined text-[14px] text-[#4cd6fb] opacity-70 group-hover:opacity-100 transition-opacity">
                  open_in_new
                </span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E9F6E]/20 text-[#0E9F6E] text-[11px] font-bold border border-[#0E9F6E]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F6E] animate-ping"></span>
              <span>정상 (NORMAL)</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
