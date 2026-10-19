import React from 'react';
import { Language } from '../../types';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CareersModal: React.FC<CareersModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const positions = [
    { title: '초저온 가스 플랜트 엔지니어 (경력)', dept: '플랜트기술본부 (부산/당진)', type: '정규직', tag: 'D-14' },
    { title: '반도체 특수가스 분석 연구원 (석/박사)', dept: '기술연구소 (수도권)', type: '정규직', tag: '상시채용' },
    { title: '위험물 안전관리자 및 인허가 담당자', dept: '안전환경팀 (영남/호남)', type: '정규직', tag: '채용중' },
    { title: '특수 탱크로리 전문 물류 운송 기사', dept: '물류운송본부 (전국)', type: '정규직', tag: '상시채용' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div>
            <h3 className="text-[18px] font-bold text-[#00334d]">
              {language === 'KOR' ? '(주)MS가스 인재채용 안내' : 'Careers at MS GAS'}
            </h3>
            <p className="text-[12px] text-[#41484e]">
              대한민국의 보이지 않는 에너지를 움직일 최고의 가스 엔지니어와 전문가를 모십니다.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#41484e] hover:bg-[#def1fc] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-3">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#f4faff] border border-[#004b6e]/10 flex items-center justify-between hover:bg-[#def1fc] transition-colors"
              >
                <div>
                  <span className="text-[14px] font-bold text-[#00334d] block mb-1">
                    {pos.title}
                  </span>
                  <div className="flex items-center gap-2 text-[12px] text-[#41484e]">
                    <span>{pos.dept}</span>
                    <span>•</span>
                    <span>{pos.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#004b6e]/10 text-[#004b6e] text-[11px] font-bold">
                    {pos.tag}
                  </span>
                  <a
                    href="mailto:recruit@msgas.co.kr"
                    className="px-3 py-1.5 rounded-xl bg-[#004b6e] text-white text-[12px] font-semibold hover:bg-[#00639a] transition-colors"
                  >
                    지원하기
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#e7f6ff] p-4 rounded-xl text-[12px] text-[#41484e] border border-[#004b6e]/10">
            <strong>채용 문의 및 입사지원서 접수:</strong> recruit@msgas.co.kr (경영지원본부 인사팀)
          </div>
        </div>

        <div className="p-4 border-t border-[#004b6e]/10 bg-[#f4faff] rounded-b-3xl flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#004b6e] text-white text-[12px] font-semibold hover:bg-[#00639a] cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
