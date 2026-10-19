import React, { useState } from 'react';
import { Language } from '../types';

interface ServicesSectionProps {
  language: Language;
  onOpenQuote: (servicePrefill?: string) => void;
  onOpenTelemetry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onOpenQuote,
  onOpenTelemetry,
}) => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'analysis',
      icon: 'biotech',
      title: '가스분석 서비스',
      titleEng: 'Gas Analysis & Purity Testing',
      action: '정밀 시험분석 지원',
      actionEng: 'Precision Analysis Support',
      description:
        '최첨단 가스 크로마토그래피(GC), 노점계, 미량 산소·수분 분석기를 통한 성분 정밀 정량 분석 및 국가공인 성적서 발급.',
      descriptionEng:
        'Sub-ppb precision quantitative analysis using state-of-the-art GC-MS, trace moisture/oxygen analyzers, and issuing certified test reports.',
      details: [
        '기체 크로마토그래피(GC) 미량 불순물 검출',
        '노점(Dew Point) 및 수분(H₂O) 연속 측정',
        '국가기술표준원 KOLAS 공인 시험 성적서 교부',
        '의료용/식품용 가스 정기 위생검사 대행',
      ],
    },
    {
      id: 'purge',
      icon: 'mode_fan',
      title: '가스퍼지 서비스',
      titleEng: 'Plant Gas Purging Service',
      action: '플랜트 퍼지 작업',
      actionEng: 'Plant TA Purging Operations',
      description:
        '정유 및 석유화학 플랜트 대정비(TA), 신규 배관 시운전 시 불활성 고압 질소를 이용한 완벽한 가연성 가스 치환 및 기밀시험.',
      descriptionEng:
        'Complete combustible gas displacement and helium leak testing utilizing high-pressure inert nitrogen during refinery turnaround (TA) and commissioning.',
      details: [
        '정유·석유화학 플랜트 대정비(TA) 질소 공급',
        '신설 파이프라인 고압 기밀시험 및 건조 작업',
        '대용량 고압 펌핑 트레일러 현장 배치',
        '화재·폭발 위험 원천 차단 불활성화 공정',
      ],
    },
    {
      id: 'import-export',
      icon: 'flight_takeoff',
      title: '수출입 서비스',
      titleEng: 'Global Import & Export Logistics',
      action: '글로벌 물류 인허가',
      actionEng: 'Global Dangerous Goods Logistics',
      description:
        'ISO 탱크 컨테이너를 활용한 글로벌 특수가스 수출입, 국제 위험물 운송 규정(IMDG Code) 준수 및 신속한 화학물질 인허가 대행.',
      descriptionEng:
        'Specialty gas import & export utilizing international ISO tank containers in compliance with IMDG Code, chemical registration, and dangerous goods clearance.',
      details: [
        'ISO 탱크 컨테이너(T75) 해상 및 육상 복합 운송',
        '국제해사기구(IMDG) 위험물 선적 승인 대행',
        '화학물질관리법(화관법) 및 화평법 수입 인허가',
        '글로벌 직수입 가스 안정 재고 비축 기지 운영',
      ],
    },
    {
      id: 'safety',
      icon: 'verified_user',
      title: '안전관리 서비스',
      titleEng: 'Safety & Compliance Consulting',
      action: '24/7 안전관제 핫라인',
      actionEng: '24/7 Emergency Safety Hotline',
      description:
        '고압가스안전관리법에 따른 법정 정기점검 대행, 긴급 누출 대응 핫라인 운영, 사업장 맞춤형 방재 교육 및 안전진단 컨설팅.',
      descriptionEng:
        'Statutory safety inspections under high-pressure gas regulations, 24/7 emergency response dispatch, customized disaster training, and safety audits.',
      details: [
        '고압가스 저장 및 제조시설 법정 완성/정기검사 대행',
        '24시간 비상 긴급출동 비상대응팀(ERT) 상시대기',
        '사업장 맞춤형 가스 누출 방재 훈련 및 교육',
        '안전성 향상 계획서(SMS) 및 PSM 컨설팅 지원',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#def1fc] py-20 lg:py-24 border-t border-[#004b6e]/10" id="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Intro Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
              MS Gas Specialized Services
            </span>
            <h2 className="text-[30px] sm:text-[38px] text-[#00334d] font-bold tracking-tight mt-2 mb-4">
              {language === 'KOR'
                ? '전국적인 가스 운송능력을 지닌 기업'
                : 'Pioneering Nationwide Gas Logistics & Precision Services'}
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#41484e] leading-relaxed">
              {language === 'KOR'
                ? '(주)MS가스는 전국을 아우르는 고도화된 운송 인프라와 실시간 모니터링 시스템을 통해, 언제 어디서나 안정적이고 효율적인 가스 공급을 실현합니다.'
                : 'Through state-of-the-art transportation fleets and continuous IoT monitoring, MS GAS delivers stable, zero-defect gas logistics nationwide anytime, anywhere.'}
            </p>
          </div>

          <div
            onClick={onOpenTelemetry}
            className="lg:col-span-5 flex flex-col gap-3 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-sm border border-[#004b6e]/10 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#00334d]">
                <span className="material-symbols-outlined text-[26px] text-[#00639a] group-hover:scale-110 transition-transform">
                  gps_fixed
                </span>
                <span className="text-[18px] font-bold">
                  {language === 'KOR' ? '24시간 스마트 배차 & 관제' : '24/7 Smart Telemetry Fleet Control'}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#0E9F6E] bg-[#0E9F6E]/15 px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F6E] animate-pulse"></span>
                실시간 연동
              </span>
            </div>
            <p className="text-[14px] text-[#41484e] leading-relaxed">
              {language === 'KOR'
                ? '모든 탱크로리와 특수 운송 트레일러에 정밀 IoT 압력·온도 센서 및 GPS 위치 관제 시스템을 장착하여 위험 요소를 사전에 차단합니다.'
                : 'Every tanker and cryogenic trailer is outfitted with IoT pressure/temperature sensors and GPS telematics, preemptively neutralizing risks.'}
            </p>
            <div className="pt-2 flex items-center gap-1 text-[12px] font-semibold text-[#00639a] group-hover:text-[#00334d]">
              <span>실시간 관제 콘솔 열기</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* 4 Specialized Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all border border-[#004b6e]/8"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e7f6ff] flex items-center justify-center text-[#00334d] mb-6 group-hover:bg-[#00334d] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[26px]">{svc.icon}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] text-[#00334d] font-bold mb-3">
                  {language === 'KOR' ? svc.title : svc.titleEng}
                </h3>
                <p className="text-[14px] text-[#41484e] leading-relaxed mb-6">
                  {language === 'KOR' ? svc.description : svc.descriptionEng}
                </p>

                {/* Sub-bullets */}
                <ul className="space-y-1.5 mb-6 text-[12px] text-[#41484e]/90 border-t border-[#004b6e]/8 pt-3">
                  {svc.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[#00639a] text-[14px] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenQuote(svc.title)}
                className="pt-4 border-t border-[#004b6e]/8 flex items-center justify-between text-[#00639a] text-[13px] font-bold group-hover:text-[#00334d] transition-colors cursor-pointer w-full text-left"
              >
                <span>{language === 'KOR' ? svc.action : svc.actionEng}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
