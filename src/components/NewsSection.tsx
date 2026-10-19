import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/mockData';
import { Language, NewsItem } from '../types';

interface NewsSectionProps {
  language: Language;
  onSelectNews: (news: NewsItem) => void;
  onOpenNewsletter: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  language,
  onSelectNews,
  onOpenNewsletter,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { key: 'all', label: '전체' },
    { key: '입찰공고', label: '입찰공고' },
    { key: '실증특례 고지', label: '실증특례' },
    { key: '수상 소식', label: '수상소식' },
    { key: '정부 훈장', label: '정부훈장' },
  ];

  const filteredNews =
    activeFilter === 'all'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="w-full bg-[#e7f6ff] py-20 lg:py-24 border-t border-[#004b6e]/10" id="news-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00639a]"></span>
              <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
                {language === 'KOR' ? '공지사항 및 입찰공고' : 'Notice & Tenders'}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] text-[#00334d] font-bold tracking-tight">
              {language === 'KOR'
                ? 'MS가스의 새로운 소식을 전달드립니다.'
                : 'Latest Announcements & Public Tenders'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00334d] text-white text-[13px] font-semibold hover:bg-[#00639a] transition-all shadow-sm cursor-pointer"
          >
            <span>{language === 'KOR' ? '전체 소식 더보기' : 'View All Notices'}</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeFilter === f.key
                  ? 'bg-[#004b6e] text-white shadow-sm'
                  : 'bg-white text-[#41484e] hover:bg-[#def1fc] border border-[#004b6e]/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* News Cards Grid (Verbatim Official Postings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Post 1 */}
          <article
            onClick={() => onSelectNews(NEWS_ITEMS[0])}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#00334d]/10 text-[#00334d] text-[11px] font-bold">
                  {NEWS_ITEMS[0].category}
                </span>
                <span className="text-[12px] text-[#41484e]">{NEWS_ITEMS[0].date}</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00334d] group-hover:text-[#00639a] transition-colors line-clamp-2 mb-3 leading-snug">
                {language === 'KOR' ? NEWS_ITEMS[0].title : NEWS_ITEMS[0].titleEng}
              </h3>
              <p className="text-[14px] text-[#41484e] line-clamp-3 leading-relaxed">
                {language === 'KOR' ? NEWS_ITEMS[0].summary : NEWS_ITEMS[0].summaryEng}
              </p>
            </div>
            <div className="pt-6 border-t border-[#004b6e]/8 flex items-center justify-between mt-4">
              <span className="text-[12px] text-[#00639a] font-bold">
                {language === 'KOR' ? '상세 내용 보기' : 'Read Announcement'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </article>

          {/* Post 2 */}
          <article
            onClick={() => onSelectNews(NEWS_ITEMS[1])}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#00334d]/10 text-[#00334d] text-[11px] font-bold">
                  {NEWS_ITEMS[1].category}
                </span>
                <span className="text-[12px] text-[#41484e]">{NEWS_ITEMS[1].date}</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00334d] group-hover:text-[#00639a] transition-colors line-clamp-2 mb-3 leading-snug">
                {language === 'KOR' ? NEWS_ITEMS[1].title : NEWS_ITEMS[1].titleEng}
              </h3>
              <p className="text-[14px] text-[#41484e] line-clamp-3 leading-relaxed">
                {language === 'KOR' ? NEWS_ITEMS[1].summary : NEWS_ITEMS[1].summaryEng}
              </p>
            </div>
            <div className="pt-6 border-t border-[#004b6e]/8 flex items-center justify-between mt-4">
              <span className="text-[12px] text-[#00639a] font-bold">
                {language === 'KOR' ? '상세 내용 보기' : 'Read Announcement'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </article>

          {/* Post 3 */}
          <article
            onClick={() => onSelectNews(NEWS_ITEMS[2])}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#d8ebf6] text-[#00334d] text-[11px] font-bold">
                  {NEWS_ITEMS[2].category}
                </span>
                <span className="text-[12px] text-[#41484e]">{NEWS_ITEMS[2].date}</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00334d] group-hover:text-[#00639a] transition-colors line-clamp-2 mb-3 leading-snug">
                {language === 'KOR' ? NEWS_ITEMS[2].title : NEWS_ITEMS[2].titleEng}
              </h3>
              <p className="text-[14px] text-[#41484e] line-clamp-3 leading-relaxed">
                {language === 'KOR' ? NEWS_ITEMS[2].summary : NEWS_ITEMS[2].summaryEng}
              </p>
            </div>
            <div className="pt-6 border-t border-[#004b6e]/8 flex items-center justify-between mt-4">
              <span className="text-[12px] text-[#00639a] font-bold">
                {language === 'KOR' ? '상세 내용 보기' : 'Read Announcement'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </article>

          {/* Post 4 */}
          <article
            onClick={() => onSelectNews(NEWS_ITEMS[3])}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#0E9F6E]/15 text-[#0E9F6E] text-[11px] font-bold">
                  {NEWS_ITEMS[3].category}
                </span>
                <span className="text-[12px] text-[#41484e]">{NEWS_ITEMS[3].date}</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00334d] group-hover:text-[#00639a] transition-colors line-clamp-2 mb-3 leading-snug">
                {language === 'KOR' ? NEWS_ITEMS[3].title : NEWS_ITEMS[3].titleEng}
              </h3>
              <p className="text-[14px] text-[#41484e] line-clamp-3 leading-relaxed">
                {language === 'KOR' ? NEWS_ITEMS[3].summary : NEWS_ITEMS[3].summaryEng}
              </p>
            </div>
            <div className="pt-6 border-t border-[#004b6e]/8 flex items-center justify-between mt-4">
              <span className="text-[12px] text-[#00639a] font-bold">
                {language === 'KOR' ? '상세 내용 보기' : 'Read Announcement'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </article>

          {/* Post 5 */}
          <article
            onClick={() => onSelectNews(NEWS_ITEMS[4])}
            className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#004d5e]/20 text-[#004d5e] text-[11px] font-bold">
                  {NEWS_ITEMS[4].category}
                </span>
                <span className="text-[12px] text-[#41484e]">{NEWS_ITEMS[4].date}</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#00334d] group-hover:text-[#00639a] transition-colors line-clamp-2 mb-3 leading-snug">
                {language === 'KOR' ? NEWS_ITEMS[4].title : NEWS_ITEMS[4].titleEng}
              </h3>
              <p className="text-[14px] text-[#41484e] line-clamp-3 leading-relaxed">
                {language === 'KOR' ? NEWS_ITEMS[4].summary : NEWS_ITEMS[4].summaryEng}
              </p>
            </div>
            <div className="pt-6 border-t border-[#004b6e]/8 flex items-center justify-between mt-4">
              <span className="text-[12px] text-[#00639a] font-bold">
                {language === 'KOR' ? '상세 내용 보기' : 'Read Announcement'}
              </span>
              <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </article>

          {/* Post 6: Interactive Callout Tile */}
          <article
            onClick={onOpenNewsletter}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#00334d] to-[#004b6e] text-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all cursor-pointer border border-[#4cd6fb]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-white/15 text-[#b3ebff] text-[11px] font-bold">
                  {language === 'KOR' ? '고객 소통' : 'Communication'}
                </span>
                <span className="material-symbols-outlined text-[#4cd6fb] text-[20px]">feed</span>
              </div>
              <h3 className="text-[19px] sm:text-[20px] font-bold text-white mb-3 leading-snug">
                {language === 'KOR'
                  ? 'MS가스 뉴스레터 및 공식 공시 안내'
                  : 'MS GAS Newsletter & Official Disclosures'}
              </h3>
              <p className="text-[14px] text-[#d8ebf6] leading-relaxed">
                {language === 'KOR'
                  ? '분기별 주요 공정 가스 시황, 규제 개정 고지, 안전 점검 가이드라인을 이메일로 빠르게 받아보실 수 있습니다.'
                  : 'Receive quarterly gas market intelligence, regulatory updates, and safety guidelines directly via email.'}
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[#4cd6fb] text-[13px] font-bold group-hover:text-white transition-colors">
                <span>{language === 'KOR' ? '전자공시 및 프레스룸' : 'Press Room & Subscribe'}</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </span>
              <span className="material-symbols-outlined text-[#4cd6fb] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
