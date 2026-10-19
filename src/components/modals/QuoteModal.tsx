import React, { useState } from 'react';
import { Language } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialServiceOrProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  language,
  initialServiceOrProduct,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    gasCategory: initialServiceOrProduct || '산업용 가스 (질소, 산소, 아르곤, 탄산 등)',
    specificGases: '',
    deliveryType: '초저온 액화 탱크로리 직공급',
    monthlyVolume: '월 50톤 ~ 100톤',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    location: '영남권 (부산/경남/울산/경북)',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#004b6e]/10 flex items-center justify-between bg-[#f4faff] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">request_quote</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#00334d]">
                {language === 'KOR' ? '온라인 가스 공급 견적 및 기술상담' : 'Gas Supply Quotation Request'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                {language === 'KOR'
                  ? '전문 엔지니어가 24시간 이내 최적의 공급 단가 및 배관 사양을 제안드립니다.'
                  : 'Our certified gas engineers will contact you within 24 hours with an optimal quote.'}
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
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#0E9F6E]/15 text-[#0E9F6E] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[36px]">task_alt</span>
              </div>
              <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
                접수 완료되었습니다
              </span>
              <h4 className="text-[22px] font-bold text-[#00334d] mt-1 mb-2">
                공급 상담 접수번호: <span className="text-[#00639a]">{referenceCode}</span>
              </h4>
              <p className="text-[14px] text-[#41484e] max-w-md mb-6 leading-relaxed">
                귀사({formData.companyName || '고객사'})의 견적 요청이 MS가스 영업본부 및 지역 물류팀에 성공적으로 접수되었습니다.
                기재해주신 연락처({formData.phone})로 담당 엔지니어가 신속히 연락드리겠습니다.
              </p>
              <div className="w-full bg-[#f4faff] p-4 rounded-xl text-left text-[13px] text-[#41484e] mb-6 border border-[#004b6e]/10">
                <div className="flex justify-between py-1 border-b border-[#004b6e]/8">
                  <span className="font-semibold text-[#00334d]">요청 품목:</span>
                  <span>{formData.gasCategory}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#004b6e]/8">
                  <span className="font-semibold text-[#00334d]">공급 방식:</span>
                  <span>{formData.deliveryType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#004b6e]/8">
                  <span className="font-semibold text-[#00334d]">예상 공급량:</span>
                  <span>{formData.monthlyVolume}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-[#00334d]">담당자:</span>
                  <span>{formData.contactPerson} ({formData.phone})</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#004b6e] text-white font-semibold text-[13px] hover:bg-[#00639a] transition-colors cursor-pointer"
              >
                확인 및 창 닫기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step Indicators */}
              <div className="flex items-center justify-between pb-3 border-b border-[#004b6e]/8">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold ${
                      step === 1 ? 'bg-[#004b6e] text-white' : 'bg-[#e7f6ff] text-[#004b6e]'
                    }`}
                  >
                    1
                  </span>
                  <span className="text-[13px] font-bold text-[#00334d]">가스 및 공급 사양</span>
                </div>
                <span className="text-gray-300">──</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold ${
                      step === 2 ? 'bg-[#004b6e] text-white' : 'bg-[#e7f6ff] text-[#004b6e]'
                    }`}
                  >
                    2
                  </span>
                  <span className="text-[13px] font-bold text-[#00334d]">고객사 및 설비 정보</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                      가스 분야 선택 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.gasCategory}
                      onChange={(e) => setFormData({ ...formData, gasCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                    >
                      <option value="산업용 가스 (질소, 산소, 아르곤, 탄산 등)">산업용 가스 (질소, 산소, 아르곤, 탄산 등)</option>
                      <option value="연료용 가스 (프로판, 프라멕스, 부탄, 이소부탄)">연료용 가스 (프로판, 프라멕스, 부탄, 이소부탄)</option>
                      <option value="특수가스 (반도체 6N급 고순도 가스, NF3, SiH4, 암모니아)">특수가스 (반도체 6N급 고순도 가스, NF3, SiH4, 암모니아)</option>
                      <option value="의료용 가스 (의료용 산소, 아산화질소 KP 인증)">의료용 가스 (의료용 산소, 아산화질소 KP 인증)</option>
                      <option value="공인 표준가스 및 시험분석용 혼합가스">공인 표준가스 및 시험분석용 혼합가스</option>
                      <option value="초저온 가스 저장탱크 및 배관 엔지니어링 시공">초저온 가스 저장탱크 및 배관 엔지니어링 시공</option>
                      <option value="플랜트 TA 질소 가스퍼지 / 핫라인 안전관리">플랜트 TA 질소 가스퍼지 / 핫라인 안전관리</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                      상세 요청 가스 및 순도 요구사항
                    </label>
                    <input
                      type="text"
                      placeholder="예: 초고순도 질소(99.999%), 액체산소 20톤 등"
                      value={formData.specificGases}
                      onChange={(e) => setFormData({ ...formData, specificGases: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        희망 공급 방식 <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.deliveryType}
                        onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      >
                        <option value="초저온 액화 탱크로리 직공급">초저온 액화 탱크로리 직공급</option>
                        <option value="고압 튜브트레일러 대량 공급">고압 튜브트레일러 대량 공급</option>
                        <option value="초저온 액화용기 (LGC 175L)">초저온 액화용기 (LGC 175L)</option>
                        <option value="고압가스 실린더 (47L / 10L)">고압가스 실린더 (47L / 10L)</option>
                        <option value="번들 봄베 패키지 (10~20병 연동)">번들 봄베 패키지 (10~20병 연동)</option>
                        <option value="현장 배관 직공급(온사이트)">현장 배관 직공급(온사이트)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        예상 월간 소요량
                      </label>
                      <select
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      >
                        <option value="월 10톤 미만 / 실린더 50병 미만">월 10톤 미만 / 실린더 50병 미만</option>
                        <option value="월 10톤 ~ 50톤">월 10톤 ~ 50톤</option>
                        <option value="월 50톤 ~ 100톤">월 50톤 ~ 100톤</option>
                        <option value="월 100톤 이상 대형 산업체">월 100톤 이상 대형 산업체</option>
                        <option value="단발성 플랜트 공사/퍼지 프로젝트">단발성 플랜트 공사/퍼지 프로젝트</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-[#004b6e] text-white font-semibold text-[13px] hover:bg-[#00639a] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>다음: 고객사 정보 입력</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        회사명 (상호) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="(주)한국엔지니어링"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        담당자 성함 및 직함 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동 팀장"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        연락처 (휴대전화) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                        이메일 주소 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                      공급 희망 지역 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                    >
                      <option value="영남권 (부산 본사 / 울산 / 경남 / 창원 / 거제 / 포항)">영남권 (부산 본사 / 울산 / 경남 / 창원 / 거제 / 포항)</option>
                      <option value="수도권 (서울 / 경기 남·북부 / 인천 물류기지)">수도권 (서울 / 경기 남·북부 / 인천 물류기지)</option>
                      <option value="충청권 (당진 특수기지 / 서산 / 천안 / 아산 / 청주)">충청권 (당진 특수기지 / 서산 / 천안 / 아산 / 청주)</option>
                      <option value="호남권 (군산 물류센터 / 여수 석유화학 / 광주 / 광양)">호남권 (군산 물류센터 / 여수 석유화학 / 광주 / 광양)</option>
                      <option value="강원 및 제주권">강원 및 제주권</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#00334d] mb-1.5">
                      기타 문의 및 현장 배관 환경
                    </label>
                    <textarea
                      rows={3}
                      placeholder="기존 가스 탱크 보유 여부, 필요 인허가 지원, 신설 라인 공사 여부 등을 적어주시면 상세히 검토해 드립니다."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#004b6e]/20 bg-white text-[14px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl text-[#41484e] hover:bg-[#e7f6ff] text-[13px] font-semibold cursor-pointer"
                    >
                      이전 단계
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-[#004b6e] text-white font-bold text-[14px] hover:bg-[#00639a] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>실시간 견적 상담 요청하기</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
