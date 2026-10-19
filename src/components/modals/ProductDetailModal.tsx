import React from 'react';
import { GasProduct, Language } from '../../types';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  language: Language;
  onOpenQuote: (productName: string) => void;
  onOpenMsds: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  language,
  onOpenQuote,
  onOpenMsds,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-[#00334d]">
          <div
            className="w-full h-full bg-cover bg-center opacity-85"
            style={{ backgroundImage: `url('${product.imageUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00334d] via-[#00334d]/40 to-transparent"></div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Title on Hero */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#4cd6fb] text-[#001f27] text-[11px] font-bold">
                {language === 'KOR' ? product.badge : product.badgeEng}
              </span>
              <span className="text-[12px] font-medium text-[#b3ebff]">
                {product.nameEng}
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-bold tracking-tight">
              {language === 'KOR' ? product.name : product.nameEng}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Overview text */}
          <div>
            <h4 className="text-[14px] font-bold text-[#00639a] uppercase tracking-wider mb-2">
              제품 개요 및 기술 특징
            </h4>
            <p className="text-[15px] text-[#41484e] leading-relaxed">
              {language === 'KOR' ? product.description : product.descriptionEng}
            </p>
          </div>

          {/* Key Gases & Purity */}
          <div className="bg-[#f4faff] p-5 rounded-2xl border border-[#004b6e]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] font-bold text-[#00334d]">취급 핵심 가스 품목</span>
              <span className="text-[12px] font-bold text-[#0E9F6E] bg-[#0E9F6E]/15 px-3 py-1 rounded-full">
                공급 순도: {product.purity}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.gases.map((gas, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white text-[#004b6e] font-semibold text-[13px] border border-[#004b6e]/15 shadow-sm"
                >
                  {gas}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 className="text-[14px] font-bold text-[#00334d] mb-3">기술 규격 및 공급 표준</h4>
            <div className="rounded-xl border border-[#004b6e]/10 overflow-hidden">
              <table className="w-full text-left text-[13px]">
                <tbody>
                  {product.specs.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f4faff]'}
                    >
                      <th className="py-2.5 px-4 font-semibold text-[#00334d] w-1/3 border-b border-[#004b6e]/5">
                        {item.label}
                      </th>
                      <td className="py-2.5 px-4 text-[#41484e] border-b border-[#004b6e]/5">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white">
                    <th className="py-2.5 px-4 font-semibold text-[#00334d]">공급 패키지 형태</th>
                    <td className="py-2.5 px-4 text-[#00639a] font-semibold">
                      {language === 'KOR' ? product.supplyForm : product.supplyFormEng}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Typical Industrial Applications */}
          <div>
            <h4 className="text-[14px] font-bold text-[#00334d] mb-2.5">주요 적용 산업 분야</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#e7f6ff] text-[13px] text-[#00334d] font-medium"
                >
                  <span className="material-symbols-outlined text-[#00639a] text-[18px]">
                    verified
                  </span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#004b6e]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenMsds();
              }}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#00639a] hover:text-[#00334d] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
              <span>관련 가스 MSDS 성적서 열람</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gray-100 text-[#41484e] font-semibold text-[13px] hover:bg-gray-200 transition-colors cursor-pointer"
              >
                닫기
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuote(product.name);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#004b6e] text-white font-bold text-[13px] hover:bg-[#00639a] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>이 제품 견적 문의하기</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
