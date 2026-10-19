import React, { useState, useEffect } from 'react';
import { GAS_PRODUCTS, NEWS_ITEMS, NETWORK_HUBS } from '../../data/mockData';
import { GasProduct, NewsItem, NetworkHub, Language } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectProduct: (p: GasProduct) => void;
  onSelectNews: (n: NewsItem) => void;
  onSelectHub: (h: NetworkHub) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectProduct,
  onSelectNews,
  onSelectHub,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedProducts = query.trim()
    ? GAS_PRODUCTS.filter(
        (p) =>
          p.name.includes(query) ||
          p.description.includes(query) ||
          p.gases.some((g) => g.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchedNews = query.trim()
    ? NEWS_ITEMS.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.summary.toLowerCase().includes(query.toLowerCase()) ||
          n.category.includes(query)
      )
    : [];

  const matchedHubs = query.trim()
    ? NETWORK_HUBS.filter(
        (h) =>
          h.name.toLowerCase().includes(query.toLowerCase()) ||
          h.address.toLowerCase().includes(query.toLowerCase()) ||
          h.keyGases.some((g) => g.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const totalResults = matchedProducts.length + matchedNews.length + matchedHubs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#004b6e]/20 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#004b6e]/10 flex items-center gap-3 bg-[#f4faff]">
          <span className="material-symbols-outlined text-[24px] text-[#00639a]">search</span>
          <input
            type="text"
            autoFocus
            placeholder="가스 품목(질소, 수소, 암모니아), 입찰 공고, 거점 등 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[16px] text-[#0b1e26] focus:outline-none placeholder:text-[#71787f]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#71787f] hover:text-[#0b1e26] text-[13px] px-2 py-1 rounded cursor-pointer"
            >
              지우기
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#41484e] hover:bg-[#def1fc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!query.trim() ? (
            <div className="py-8 text-center text-[#71787f]">
              <span className="material-symbols-outlined text-[36px] text-[#00639a]/40 mb-2">
                travel_explore
              </span>
              <p className="text-[14px]">검색어를 입력하시면 제품, 공지사항, 거점을 즉시 찾아드립니다.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="text-[12px] text-[#00334d] font-semibold">추천 검색어:</span>
                {['초고순도 질소', '암모니아 벙커링', '의료용 산소', '울산 실증센터', '입찰공고'].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded-full bg-[#e7f6ff] text-[#004b6e] text-[12px] hover:bg-[#def1fc] transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-[#71787f]">
              <p className="text-[15px] font-semibold text-[#00334d]">'{query}' 검색 결과가 없습니다.</p>
              <p className="text-[13px] mt-1">철자 또는 다른 단어로 검색해 보세요.</p>
            </div>
          ) : (
            <>
              {/* Matched Products */}
              {matchedProducts.length > 0 && (
                <div>
                  <h4 className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">propane_tank</span>
                    <span>가스 제품 및 솔루션 ({matchedProducts.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(p);
                        }}
                        className="p-3.5 rounded-2xl bg-[#f4faff] hover:bg-[#def1fc] border border-[#004b6e]/10 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-xl bg-cover bg-center shrink-0 border border-white"
                            style={{ backgroundImage: `url('${p.imageUrl}')` }}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[14px] text-[#00334d] group-hover:text-[#00639a]">
                                {p.name}
                              </span>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#00639a] border border-[#004b6e]/15">
                                {p.badge}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#41484e] line-clamp-1">{p.description}</p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                          chevron_right
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Hubs */}
              {matchedHubs.length > 0 && (
                <div>
                  <h4 className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>네트워크 거점 ({matchedHubs.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedHubs.map((h) => (
                      <div
                        key={h.id}
                        onClick={() => {
                          onClose();
                          onSelectHub(h);
                        }}
                        className="p-3.5 rounded-2xl bg-[#f4faff] hover:bg-[#def1fc] border border-[#004b6e]/10 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[14px] text-[#00334d] group-hover:text-[#00639a]">
                              {h.name}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#004b6e] border border-[#004b6e]/15">
                              {h.region}
                            </span>
                          </div>
                          <p className="text-[12px] text-[#41484e]">{h.address}</p>
                        </div>
                        <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform">
                          chevron_right
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched News */}
              {matchedNews.length > 0 && (
                <div>
                  <h4 className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">feed</span>
                    <span>공지사항 및 입찰공고 ({matchedNews.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedNews.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => {
                          onClose();
                          onSelectNews(n);
                        }}
                        className="p-3.5 rounded-2xl bg-[#f4faff] hover:bg-[#def1fc] border border-[#004b6e]/10 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white text-[#00334d]">
                              {n.category}
                            </span>
                            <span className="text-[11px] text-[#71787f]">{n.date}</span>
                          </div>
                          <h5 className="font-bold text-[13px] text-[#00334d] group-hover:text-[#00639a] line-clamp-1">
                            {n.title}
                          </h5>
                        </div>
                        <span className="material-symbols-outlined text-[#00639a] text-[18px] group-hover:translate-x-1 transition-transform shrink-0">
                          chevron_right
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f4faff] border-t border-[#004b6e]/10 flex items-center justify-between text-[11px] text-[#71787f]">
          <span>키보드 ESC 키를 누르면 닫힙니다.</span>
          <span>(주)MS가스 통합 정보 검색 시스템</span>
        </div>
      </div>
    </div>
  );
};
