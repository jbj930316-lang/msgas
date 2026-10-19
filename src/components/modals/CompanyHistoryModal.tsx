import React, { useState } from 'react';
import { COMPANY_MILESTONES } from '../../data/mockData';
import { Language } from '../../types';

interface CompanyHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialTab?: 'history' | 'ceo' | 'esg';
}

export const CompanyHistoryModal: React.FC<CompanyHistoryModalProps> = ({
  isOpen,
  onClose,
  language,
  initialTab = 'history',
}) => {
  const [activeTab, setActiveTab] = useState<'history' | 'ceo' | 'esg'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">corporate_fare</span>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00334d]">
                {language === 'KOR' ? '(주)MS가스 기업소개' : 'About MS GAS CO., LTD.'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                1974년 창립 이래 반세기 동안 대한민국 기간산업과 함께 성장해 온 가스 전문기업
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

        {/* Tab navigation */}
        <div className="flex border-b border-[#004b6e]/10 px-6 pt-3 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`pb-3 px-4 font-bold text-[13px] border-b-2 transition-all cursor-pointer ${
              activeTab === 'history'
                ? 'border-[#004b6e] text-[#004b6e]'
                : 'border-transparent text-[#71787f] hover:text-[#0b1e26]'
            }`}
          >
            50년 연혁 (Heritage)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ceo')}
            className={`pb-3 px-4 font-bold text-[13px] border-b-2 transition-all cursor-pointer ${
              activeTab === 'ceo'
                ? 'border-[#004b6e] text-[#004b6e]'
                : 'border-transparent text-[#71787f] hover:text-[#0b1e26]'
            }`}
          >
            CEO 인사말
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('esg')}
            className={`pb-3 px-4 font-bold text-[13px] border-b-2 transition-all cursor-pointer ${
              activeTab === 'esg'
                ? 'border-[#004b6e] text-[#004b6e]'
                : 'border-transparent text-[#71787f] hover:text-[#0b1e26]'
            }`}
          >
            ESG & 친환경 청정에너지
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {activeTab === 'history' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-[#f4faff] p-5 rounded-2xl border border-[#004b6e]/10 mb-6">
                <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider block mb-1">
                  Established 1974
                </span>
                <h4 className="text-[18px] font-bold text-[#00334d]">
                  고순도 정제 기술과 전국 특수 물류 인프라의 50년 발자취
                </h4>
                <p className="text-[13px] text-[#41484e] mt-2 leading-relaxed">
                  (주)MS가스는 1974년 고압가스 공급을 시작으로, 반도체·디스플레이용 초고순도 특수가스, 병원용 의료용 가스(KGMP),
                  그리고 미래 친환경 무탄소 벙커링까지 대한민국의 모든 기간산업 현장과 함께해 왔습니다.
                </p>
              </div>

              {/* Timeline list */}
              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#004b6e]/20">
                {COMPANY_MILESTONES.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-[#004b6e] group-hover:scale-125 transition-transform border-2 border-white"></div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-extrabold text-[16px] text-[#00639a] font-mono">
                        {item.year}
                      </span>
                      <span className="font-bold text-[15px] text-[#00334d]">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#41484e] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ceo' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00334d] to-[#004b6e] text-white">
                <span className="text-[12px] font-bold text-[#4cd6fb] uppercase tracking-wider">
                  CEO Message
                </span>
                <h4 className="text-[22px] font-bold mt-1 mb-2">
                  "보이지 않는 곳에서 변함없이 세상을 움직이는 에너지"
                </h4>
                <p className="text-[14px] text-[#d8ebf6] leading-relaxed">
                  (주)MS가스는 1974년 첫발을 내디딘 이래, '안전제일'과 '최고의 품질'이라는 타협 없는 신념으로 반세기를 달려왔습니다.
                </p>
              </div>

              <div className="text-[14px] text-[#41484e] space-y-4 leading-relaxed">
                <p>
                  산업용 가스는 철강, 반도체, 조선, 바이오, 헬스케어에 이르기까지 국가 첨단 산업의 숨은 산소이자 혈액과도 같습니다.
                  작은 불순물 하나가 공정 전체를 멈추게 할 수 있기에, 저희 MS가스는 99.9999% 초고순도 정제 기술과 24시간 실시간 스마트 관제망을 완성하였습니다.
                </p>
                <p>
                  지난 2024년 대한민국 가스안전대상에서 수훈한 <strong>은탑산업훈장</strong>은 전국 현장에서 묵묵히 땀 흘려온 임직원과 변함없는 신뢰를 보내주신 고객사 여러분의 성원 덕분입니다.
                </p>
                <p>
                  이제 MS가스는 축적된 50년의 기술을 디딤돌 삼아, 탄소중립 시대를 견인할 <strong>수소 및 청정 암모니아 해상 벙커링</strong> 등 친환경 에너지 혁신을 선도해 나가겠습니다.
                </p>
                <div className="pt-4 text-right">
                  <span className="text-[13px] text-[#71787f] block">주식회사 MS가스</span>
                  <span className="text-[16px] font-bold text-[#00334d]">대표이사 전청민</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'esg' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="bg-[#00334d] p-6 rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-2 text-[#4cd6fb]">
                  <span className="material-symbols-outlined text-[22px]">eco</span>
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    ESG Sustainability Leadership
                  </span>
                </div>
                <h4 className="text-[20px] font-bold mb-2">
                  탄소중립 2050을 향한 청정에너지 밸류체인 구축
                </h4>
                <p className="text-[13px] text-[#d8ebf6] leading-relaxed">
                  (주)MS가스는 기존 산업용 가스 공급을 넘어, 무탄소 선박 연료 벙커링 및 폐열 회수 친환경 제조 공정을 실현하고 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#f4faff] border border-[#004b6e]/10">
                  <span className="text-[13px] font-bold text-[#00334d] block mb-1">
                    울산 규제자유특구 암모니아 TTS 벙커링
                  </span>
                  <p className="text-[12px] text-[#41484e] leading-relaxed">
                    선박용 무탄소 암모니아 연료의 트럭투쉽(TTS) 공급 인프라 및 HAZOP 안전진단 실증 R&D 주관.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#f4faff] border border-[#004b6e]/10">
                  <span className="text-[13px] font-bold text-[#00334d] block mb-1">
                    충남 탄소중립 도지사 표창 수여
                  </span>
                  <p className="text-[12px] text-[#41484e] leading-relaxed">
                    당진 생산기지 고효율 대기식 기화기 전환 및 온실가스 23% 저감 에너지 선순환 체계 인정.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#004b6e]/10 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-[#004b6e] text-white font-semibold text-[13px] hover:bg-[#00639a] transition-colors cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
