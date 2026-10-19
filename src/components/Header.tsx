import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onOpenHistory: () => void;
  onOpenLocations: () => void;
  onOpenMsds: () => void;
  onOpenTelemetry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenSearch,
  onOpenQuote,
  onOpenHistory,
  onOpenLocations,
  onOpenMsds,
  onOpenTelemetry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f4faff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#004b6e]/10">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 transition-opacity hover:opacity-90 group"
            >
              <img
                src={LOGO_URL}
                alt="MS GAS Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[20px] leading-[24px] text-[#00334d] tracking-tight">
                  (주)MS가스
                </span>
                <span className="text-[11px] font-bold text-[#41484e] uppercase tracking-wider">
                  MS GAS CO., LTD.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              type="button"
              onClick={onOpenHistory}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              {language === 'KOR' ? '회사소개' : 'About Us'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('products-section')}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              {language === 'KOR' ? '제품소개' : 'Products'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('services-section')}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              {language === 'KOR' ? '서비스' : 'Services'}
            </button>
            <button
              type="button"
              onClick={onOpenLocations}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              {language === 'KOR' ? '생산설비' : 'Facilities'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('overview-section')}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              ESG
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('news-section')}
              className="text-[14px] font-semibold text-[#41484e] hover:text-[#00334d] transition-colors py-1 cursor-pointer"
            >
              {language === 'KOR' ? '고객지원' : 'Support'}
            </button>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              type="button"
              aria-label="통합 검색"
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#41484e] hover:text-[#00334d] hover:bg-[#def1fc] transition-colors cursor-pointer"
              title="검색 (Ctrl+K)"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Language Switch */}
            <div className="flex items-center bg-[#e7f6ff] rounded-full p-1 border border-[#004b6e]/10">
              <button
                type="button"
                onClick={() => onLanguageChange('KOR')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'KOR'
                    ? 'bg-white text-[#00334d] shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                    : 'text-[#41484e] hover:text-[#0b1e26]'
                }`}
              >
                KOR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ENG')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'ENG'
                    ? 'bg-white text-[#00334d] shadow-[0_1px_4px_rgba(0,0,0,0.08)]'
                    : 'text-[#41484e] hover:text-[#0b1e26]'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Online Quote CTA */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#004b6e] text-white text-[13px] font-semibold hover:bg-[#00639a] transition-all shadow-[0_2px_8px_rgba(0,75,110,0.18)] cursor-pointer"
            >
              <span>{language === 'KOR' ? '온라인 문의' : 'Inquiry'}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Telemetry quick access avatar */}
            <button
              type="button"
              onClick={onOpenTelemetry}
              aria-label="통합 관제 모니터"
              title="실시간 안전관제 현황 보기"
              className="w-9 h-9 rounded-full bg-[#00334d] flex items-center justify-center text-white hover:bg-[#004b6e] transition-colors relative cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">sensors</span>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#0E9F6E] rounded-full border-2 border-[#f4faff]"></span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#00334d] hover:bg-[#e7f6ff] transition-colors cursor-pointer"
              aria-label="모바일 메뉴 열기"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#00334d]/60 backdrop-blur-md lg:hidden">
          <div className="bg-[#f4faff] border-b border-[#004b6e]/15 p-6 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#004b6e]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHistory();
                }}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">apartment</span>
                <span>회사소개</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('products-section')}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">propane_tank</span>
                <span>제품소개</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('services-section')}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                <span>서비스</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLocations();
                }}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">factory</span>
                <span>생산설비</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('overview-section')}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
                <span>ESG 경영</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('news-section')}
                className="flex items-center gap-2 p-3 rounded-xl bg-white text-[#00334d] font-semibold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">feed</span>
                <span>공지사항</span>
              </button>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-[#004b6e] text-white font-semibold text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>실시간 가스 공급 견적 문의</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMsds();
                }}
                className="w-full py-2.5 rounded-xl bg-[#e7f6ff] text-[#00334d] font-semibold text-center border border-[#004b6e]/15 flex items-center justify-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>MSDS 및 스펙시트 자료실</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
