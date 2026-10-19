import React from 'react';
import { Language } from '../../types';

interface GlobalPartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GlobalPartnersModal: React.FC<GlobalPartnersModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const partners = [
    { country: '미국 (USA)', flag: '🇺🇸', field: '초고순도 헬륨(He) 직수입 및 반도체 공정가스 기술제휴' },
    { country: '독일 (Germany)', flag: '🇩🇪', field: '초저온 진공단열 ISO 탱크 컨테이너 및 고압 안전밸브 라이선스' },
    { country: '일본 (Japan)', flag: '🇯🇵', field: '6N급 반도체 특수가스 분석 장비 및 sub-ppb 정밀 정제 기술 협력' },
    { country: '네덜란드 (Netherlands)', flag: '🇳🇱', field: '친환경 암모니아 해상 벙커링 인프라 및 항만 안전 기준 공동 연구' },
    { country: '프랑스 (France)', flag: '🇫🇷', field: '초저온 액화가스 기화기 및 극저온 펌핑 부스터 기술 도입' },
    { country: '싱가포르 (Singapore)', flag: '🇸🇬', field: '아시아-태평양 특수가스 환적 물류 허브 네트워크 구축' },
    { country: '노르웨이 (Norway)', flag: '🇳🇴', field: '국제해사기구(IMO) 기준 친환경 대체선박 벙커링 표준화 협력' },
    { country: '스위스 (Switzerland)', flag: '🇨🇭', field: '국가 소급성 초정밀 중량법 분석기기 및 검교정 장비 제휴' },
    { country: '대만 (Taiwan)', flag: '🇹🇼', field: '첨단 반도체 파운드리 특수가스 공급 체계 벤치마킹 및 교류' },
    { country: '영국 (UK)', flag: '🇬🇧', field: '플랜트 HAZOP 정성적 위험도 평가 및 SIL 기능안전 컨설팅' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">public</span>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00334d]">
                {language === 'KOR'
                  ? '글로벌 10개국 파트너십 네트워크'
                  : 'Global 10-Nation Partnership Network'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                해외 원소재 공급선 다변화 및 선진 엔지니어링 기술 제휴로 공급 안정성을 극대화합니다.
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

        {/* Content */}
        <div className="p-6 space-y-3">
          {partners.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#f4faff] border border-[#004b6e]/10 flex items-start gap-3 hover:bg-[#e7f6ff] transition-colors"
            >
              <span className="text-[24px] leading-none">{item.flag}</span>
              <div>
                <span className="text-[14px] font-bold text-[#00334d] block mb-0.5">
                  {item.country}
                </span>
                <p className="text-[12px] text-[#41484e]">{item.field}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#004b6e]/10 bg-[#f4faff] rounded-b-3xl flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#004b6e] text-white text-[13px] font-semibold hover:bg-[#00639a] transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
