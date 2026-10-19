import React, { useState } from 'react';
import { Language } from '../../types';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">feed</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#00334d]">
                {language === 'KOR' ? 'MS가스 뉴스레터 & 전자공시' : 'Newsletter & Press Room'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                분기별 공정 가스 시황, 규제 개정 고지, 안전 가이드라인
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
        <div className="p-6">
          {subscribed ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#0E9F6E]/15 text-[#0E9F6E] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
              </div>
              <h4 className="text-[18px] font-bold text-[#00334d] mb-1">
                구독 등록이 완료되었습니다.
              </h4>
              <p className="text-[13px] text-[#41484e] mb-5">
                {email} 주소로 다음 호 가스 리포트 및 중요 안전공시가 자동 발송됩니다.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#004b6e] text-white text-[13px] font-semibold hover:bg-[#00639a] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-[13px] text-[#41484e] leading-relaxed">
                글로벌 에너지 시황 분석, 규제자유특구 실증 보고서, 반도체 특수가스 최신 트렌드를 담당 엔지니어 및 구매팀 이메일로 가장 먼저 전해드립니다.
              </p>

              <div>
                <label className="block text-[12px] font-bold text-[#00334d] mb-1">
                  회사명
                </label>
                <input
                  type="text"
                  placeholder="예: (주)한국정밀화학"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#00334d] mb-1">
                  수신용 이메일 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input type="checkbox" id="consent" required className="mt-1" defaultChecked />
                <label htmlFor="consent" className="text-[11px] text-[#71787f]">
                  개인정보 수집 및 뉴스레터 발송 목적 이용에 동의합니다. (언제든지 구독 취소 가능)
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#004b6e] text-white font-bold text-[13px] hover:bg-[#00639a] transition-colors shadow cursor-pointer"
                >
                  뉴스레터 구독 신청하기
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
