import React, { useState } from 'react';
import { NewsItem, Language } from '../../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  language: Language;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  news,
  onClose,
  language,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!news) return null;

  const handleDownload = (fileName: string) => {
    setDownloadSuccess(fileName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#004b6e] text-white text-[12px] font-bold">
                {language === 'KOR' ? news.category : news.categoryEng}
              </span>
              <span className="text-[13px] text-[#41484e] font-medium">{news.date}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#41484e] hover:bg-[#def1fc] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#00334d] leading-snug">
            {language === 'KOR' ? news.title : news.titleEng}
          </h2>

          {news.department && (
            <p className="text-[12px] text-[#00639a] font-semibold mt-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
              <span>담당 부서: {news.department}</span>
            </p>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="prose max-w-none text-[14px] sm:text-[15px] text-[#41484e] leading-relaxed whitespace-pre-line bg-[#f4faff]/50 p-6 rounded-2xl border border-[#004b6e]/8">
            {language === 'KOR' ? news.content : news.contentEng || news.content}
          </div>

          {/* Attachments Section */}
          {news.attachments && news.attachments.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-[#004b6e]/15 shadow-sm">
              <h4 className="text-[13px] font-bold text-[#00334d] mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#00639a]">attach_file</span>
                <span>공식 첨부 서류 ({news.attachments.length}건)</span>
              </h4>
              <div className="space-y-2">
                {news.attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#f4faff] border border-[#004b6e]/10 hover:bg-[#def1fc] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 truncate mr-3">
                      <span className="material-symbols-outlined text-[#00639a] text-[20px]">
                        description
                      </span>
                      <span className="text-[13px] font-medium text-[#00334d] truncate">
                        {file.name}
                      </span>
                      <span className="text-[11px] text-[#71787f] shrink-0">({file.size})</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDownload(file.name)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#004b6e] text-white text-[12px] font-semibold hover:bg-[#00639a] transition-colors shrink-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      <span>다운로드</span>
                    </button>
                  </div>
                ))}
              </div>

              {downloadSuccess && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#0E9F6E]/15 text-[#0E9F6E] text-[12px] font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>[{downloadSuccess}] 다운로드가 시작되었습니다.</span>
                </div>
              )}
            </div>
          )}

          {/* Tender Inquiries Notice */}
          <div className="bg-[#e7f6ff] p-4 rounded-xl text-[12px] text-[#41484e] flex items-start gap-2 border border-[#004b6e]/10">
            <span className="material-symbols-outlined text-[#00639a] text-[18px] mt-0.5 shrink-0">
              info
            </span>
            <span>
              입찰 참여 및 공시 관련 문의는 (주)MS가스 조달구매팀(전화: 051-311-0000 / 팩스: 051-311-0001) 또는 전자조달 공시 시스템을 통해 접수하시기 바랍니다.
            </span>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-[#004b6e]/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#004b6e] text-white font-semibold text-[13px] hover:bg-[#00639a] transition-colors cursor-pointer"
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
