import React, { useState } from 'react';
import { MSDS_RECORDS } from '../../data/mockData';
import { Language } from '../../types';

interface MsdsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const MsdsModal: React.FC<MsdsModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredRecords = MSDS_RECORDS.filter(
    (item) =>
      item.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.casNo.includes(searchQuery) ||
      item.unNo.includes(searchQuery) ||
      item.category.includes(searchQuery)
  );

  const handleDownload = (chemName: string) => {
    setDownloadNotice(chemName);
    setTimeout(() => setDownloadNotice(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">description</span>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00334d]">
                {language === 'KOR'
                  ? 'MSDS (물질안전보건자료) & 가스 스펙시트 자료실'
                  : 'MSDS & Gas Purity Datasheet Library'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                산업안전보건법 및 화학물질관리법 기준에 따라 최신 개정된 공인 MSDS 자료를 제공합니다.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#41484e] hover:bg-[#def1fc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search Bar & Download status */}
        <div className="p-6 pb-2">
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#00639a] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="가스명, 화학식(N₂, O₂, Ar, H₂), CAS No., 또는 UN 번호 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#004b6e]/20 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00639a] bg-[#f4faff]/50"
            />
          </div>

          {downloadNotice && (
            <div className="mb-4 p-3 rounded-xl bg-[#0E9F6E]/15 text-[#0E9F6E] text-[13px] font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">file_download_done</span>
              <span>[{downloadNotice}] 최신 국문 MSDS (PDF) 다운로드가 완료되었습니다.</span>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="p-6 pt-0 overflow-x-auto">
          <div className="rounded-2xl border border-[#004b6e]/10 overflow-hidden shadow-sm">
            <table className="w-full text-left text-[13px]">
              <thead className="bg-[#def1fc] text-[#00334d] font-bold">
                <tr>
                  <th className="py-3 px-4">화학물질명</th>
                  <th className="py-3 px-3">화학식</th>
                  <th className="py-3 px-3">CAS No.</th>
                  <th className="py-3 px-3">UN No.</th>
                  <th className="py-3 px-3">위험성 분류</th>
                  <th className="py-3 px-3">표준 순도</th>
                  <th className="py-3 px-3 text-right">MSDS 다운로드</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#004b6e]/10">
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((item) => (
                    <tr key={item.id} className="hover:bg-[#f4faff] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#00334d]">
                        {item.chemicalName}
                      </td>
                      <td className="py-3.5 px-3 font-mono text-[#00639a] font-bold">
                        {item.formula}
                      </td>
                      <td className="py-3.5 px-3 text-[#41484e]">{item.casNo}</td>
                      <td className="py-3.5 px-3 text-[#41484e] font-mono">{item.unNo}</td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-[#f4faff] text-[#004b6e] text-[11px] font-medium border border-[#004b6e]/10">
                          {item.hazardClass}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 font-medium text-[#0E9F6E]">{item.purity}</td>
                      <td className="py-3.5 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => handleDownload(item.chemicalName)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#004b6e] text-white text-[12px] font-semibold hover:bg-[#00639a] transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">download</span>
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-[#71787f]">
                      검색어와 일치하는 MSDS 가스 화학물질 정보가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#004b6e]/10 bg-[#f4faff] rounded-b-3xl flex items-center justify-between">
          <span className="text-[12px] text-[#41484e]">
            * 본 MSDS는 산업안전보건공단(KOSHA) 및 GHS 기준에 의거하여 작성되었습니다.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#00334d] text-white text-[13px] font-semibold hover:bg-[#00639a] transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
