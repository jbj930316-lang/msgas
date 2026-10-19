import React from 'react';
import { LOGO_URL } from '../data/mockData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenLocations: () => void;
  onOpenQuote: () => void;
  onOpenMsds: () => void;
  onOpenPrivacy: () => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenLocations,
  onOpenQuote,
  onOpenMsds,
  onOpenPrivacy,
  onOpenCareers,
}) => {
  return (
    <footer className="w-full bg-[#e7f6ff] shadow-[0_-1px_6px_rgba(0,0,0,0.03)] border-t border-[#004b6e]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
          {/* Company Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="MS GAS Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="text-[20px] font-bold text-[#00334d]">
                (주)MS가스
              </span>
            </div>
            <p className="text-[14px] text-[#41484e] mb-6 leading-relaxed">
              {language === 'KOR'
                ? '반세기 축적된 초고순도 가스 정제 기술과 전국 특수 물류 인프라를 바탕으로 첨단 반도체, 의료, 청정 에너지 산업의 신뢰받는 공급 파트너입니다.'
                : 'A reliable nationwide supply partner for semiconductors, healthcare, and clean energy, built on half a century of cryogenic engineering.'}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#def1fc] text-[11px] font-semibold text-[#00334d] border border-[#004b6e]/10">
                ISO 9001 / 14001 인증
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#def1fc] text-[11px] font-bold text-[#0E9F6E] border border-[#0E9F6E]/20">
                KGS 고압가스 안전관리
              </span>
            </div>
          </div>

          {/* Nav Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
            {/* 1. 바로가기 */}
            <div>
              <p className="text-[14px] font-bold text-[#00334d] mb-4">
                {language === 'KOR' ? '바로가기' : 'Navigation'}
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    onClick={onOpenLocations}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '오시는 길' : 'Directions'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '온라인 문의' : 'Online Quote'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenCareers}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '인재채용' : 'Careers'}
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. 기술 및 자료 */}
            <div>
              <p className="text-[14px] font-bold text-[#00334d] mb-4">
                {language === 'KOR' ? '기술 및 자료' : 'Technical & Safety'}
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    onClick={onOpenMsds}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? 'MSDS 자료실' : 'MSDS Library'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenMsds}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '가스 스펙시트' : 'Gas Spec Sheets'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[13px] font-bold text-[#00334d] hover:text-[#00639a] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '개인정보처리방침' : 'Privacy Policy'}
                  </button>
                </li>
              </ul>
            </div>

            {/* 3. 패밀리 링크 */}
            <div>
              <p className="text-[14px] font-bold text-[#00334d] mb-4">
                {language === 'KOR' ? '패밀리 링크' : 'Family & Support'}
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="https://www.msgas.co.kr"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors flex items-center gap-1"
                  >
                    <span>{language === 'KOR' ? 'MS그룹소개' : 'MS Group'}</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-[13px] text-[#41484e] hover:text-[#00334d] transition-colors cursor-pointer text-left"
                  >
                    {language === 'KOR' ? '고객지원센터' : 'Customer Center'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Registration Line */}
        <div className="pt-8 border-t border-[#004b6e]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-[12px] text-[#41484e] leading-relaxed">
            <p className="mb-1">
              부산광역시 사상구 낙동대로 1410 (주)MS가스 | 사업자등록번호: 606-81-00000 | 대표이사: 전청민
            </p>
            <p>
              고객센터: 051-000-0000 | 팩스: 051-000-0001 | E-mail: contact@msgas.co.kr
            </p>
          </div>
          <p className="text-[12px] text-[#41484e] shrink-0">
            © 2025 (주)MS가스 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
