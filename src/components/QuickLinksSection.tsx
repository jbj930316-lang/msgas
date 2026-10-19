import React from 'react';
import { Language } from '../types';

interface QuickLinksSectionProps {
  language: Language;
  onOpenHistory: () => void;
  onOpenQuote: () => void;
  onScrollToNews: () => void;
  onOpenLocations: () => void;
}

export const QuickLinksSection: React.FC<QuickLinksSectionProps> = ({
  language,
  onOpenHistory,
  onOpenQuote,
  onScrollToNews,
  onOpenLocations,
}) => {
  return (
    <section className="w-full bg-[#00334d] text-white py-16 lg:py-20 relative overflow-hidden" id="quick-contact">
      {/* Subtle Ambient Graphic */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#00639a]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-[12px] font-bold text-[#4cd6fb] uppercase tracking-wider">
            Quick Connection
          </span>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-white mt-1">
            {language === 'KOR' ? '빠르고 신속한 비즈니스 지원' : 'Fast & Seamless Business Support'}
          </h2>
          <p className="text-[14px] text-[#d8ebf6] mt-2">
            {language === 'KOR'
              ? '고객의 사업 환경에 최적화된 가스 공급 솔루션을 신속하게 제안해 드립니다.'
              : 'Rapidly proposing customized gas supply architectures tailored to your facility parameters.'}
          </p>
        </div>

        {/* 4 High-Tech Service Tiles matching inspiration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. 회사소개 */}
          <div
            onClick={onOpenHistory}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all shadow-sm flex flex-col justify-between group cursor-pointer border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white group-hover:text-[#4cd6fb] transition-colors">
                  {language === 'KOR' ? '회사소개' : 'About Us'}
                </h3>
                <p className="text-[12px] text-[#d8ebf6] mt-1">
                  {language === 'KOR' ? 'MS가스에 대해 소개합니다.' : 'Introduction to MS GAS.'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#004b6e] flex items-center justify-center text-[#4cd6fb] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">apartment</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-[#b3ebff] text-[12px] font-semibold">
              <span>{language === 'KOR' ? 'CEO 인사말 및 연혁' : 'CEO Greeting & History'}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>

          {/* 2. 온라인 문의 */}
          <div
            onClick={onOpenQuote}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all shadow-sm flex flex-col justify-between group cursor-pointer border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white group-hover:text-[#4cd6fb] transition-colors">
                  {language === 'KOR' ? '온라인 문의' : 'Online Quote'}
                </h3>
                <p className="text-[12px] text-[#d8ebf6] mt-1">
                  {language === 'KOR' ? '온라인을 통해 신속한 상담이 가능합니다.' : 'Direct consulting & quotation.'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#004b6e] flex items-center justify-center text-[#4cd6fb] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">support_agent</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-[#b3ebff] text-[12px] font-semibold">
              <span>{language === 'KOR' ? '실시간 견적 및 기술상담' : 'Real-Time Estimate'}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>

          {/* 3. 새로운 소식 */}
          <div
            onClick={onScrollToNews}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all shadow-sm flex flex-col justify-between group cursor-pointer border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white group-hover:text-[#4cd6fb] transition-colors">
                  {language === 'KOR' ? '새로운 소식' : 'Latest News'}
                </h3>
                <p className="text-[12px] text-[#d8ebf6] mt-1">
                  {language === 'KOR' ? 'MS가스의 새로운 소식을 알 수 있습니다.' : 'Updates & press releases.'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#004b6e] flex items-center justify-center text-[#4cd6fb] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">campaign</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-[#b3ebff] text-[12px] font-semibold">
              <span>{language === 'KOR' ? '공지사항 및 입찰공고' : 'Tenders & Notices'}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>

          {/* 4. 오시는 길 */}
          <div
            onClick={onOpenLocations}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all shadow-sm flex flex-col justify-between group cursor-pointer border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white group-hover:text-[#4cd6fb] transition-colors">
                  {language === 'KOR' ? '오시는 길' : 'Directions & Hubs'}
                </h3>
                <p className="text-[12px] text-[#d8ebf6] mt-1">
                  {language === 'KOR' ? '지역별 영업지점 및 관계사를 안내드립니다.' : 'Find nationwide plant locations.'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#004b6e] flex items-center justify-center text-[#4cd6fb] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-[#b3ebff] text-[12px] font-semibold">
              <span>{language === 'KOR' ? '전국 8개 거점 지도 보기' : 'Explore 8 Major Hubs'}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
