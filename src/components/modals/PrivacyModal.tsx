import React from 'react';
import { Language } from '../../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <h3 className="text-[18px] font-bold text-[#00334d]">
            {language === 'KOR' ? '개인정보처리방침' : 'Privacy Policy'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#41484e] hover:bg-[#def1fc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="p-6 text-[13px] text-[#41484e] space-y-4 leading-relaxed">
          <p>
            (주)MS가스(이하 '회사')는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하며, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
          </p>
          <h5 className="font-bold text-[#00334d]">1. 수집하는 개인정보 항목</h5>
          <p>
            온라인 견적 문의, 가스 공급 상담 및 뉴스레터 구독 시: 회사명, 담당자 성명, 연락처(전화번호), 이메일 주소, 공급 희망 지역.
          </p>
          <h5 className="font-bold text-[#00334d]">2. 개인정보의 처리 목적</h5>
          <p>
            가스 공급 상담 및 견적 산출, 제품 및 기술지원 문의 대응, 안전 및 규제 공시 안내.
          </p>
          <h5 className="font-bold text-[#00334d]">3. 개인정보의 보유 및 이용 기간</h5>
          <p>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
          </p>
          <h5 className="font-bold text-[#00334d]">4. 개인정보 보호책임자</h5>
          <p>
            성명: 개인정보보호담당관 | 소속: 경영기획본부 | 문의: 051-000-0000 (contact@msgas.co.kr)
          </p>
        </div>
        <div className="p-4 border-t border-[#004b6e]/10 bg-[#f4faff] rounded-b-3xl flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#004b6e] text-white text-[12px] font-semibold hover:bg-[#00639a] cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
