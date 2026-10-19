import { GasProduct, NewsItem, NetworkHub, MsdsDoc, TelemetryNode } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeFwoQgJSGKJNkEzX9moHfqij1rL7pgYH6kbTN-8E0-vudQm7OHy8uezXNQVWmEq25MkALEceQIE24aFpYcdfTOT0ClafbqX9XVUvdw6hbjuO-Sk-_qW44w0eOBhlXoV8_e-_JA6HKfzN_2C-rj_0wMid3zD6UYQwnTO0qGUMPW4zwMCWP-D0pkpPNHEp10zvgr0urxt33C4_fcmVktoiRWjYxlCOIlONxscHtnm7HyiKhumlkg7BDag';
export const HERO_BG_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4HJ7zVfgLQydGE1iS7IF6edEM2RubHG9XmFcBifi6mukAssMilCPd63ns1S8Uk55JULoko9fcd9dwdrfQx4fT6XcT_d0bpacNe39-KBUzXEXFVl6VIoAQXO69fPUsfA_4k6YrvAOEPw1mzn54lb31OIegsT-RJQjNcdjpDfhZfgrySw1qNDFgx8UR4Ip-AxxKFeetFhgljZicvyA0YpWPOlMQgmjt4f2Zb-Qko8cbxF-ofDyA0NjWg';

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'industrial-gas',
    name: '산업용 가스',
    nameEng: 'Industrial Gas',
    category: 'industrial',
    badge: '핵심 원자재',
    badgeEng: 'Core Raw Material',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1RdtBUqWRdEDgPWUp1NtIpRuC9w1cih3cKbZ0qVHrAi6-7menPPp_qmdoJb2B_S8mRtG4pzDBbt4ZcjjkJI7xqyRwyCLPkpOTUwuPWRFKkSqzqC_duyPncMayjmd2-WCCitaVfZiOR4ERmmNFHmikkKF6y1dfNRwTnIhB1uLrlPWa8xoaXPvSlvTq33wlfWamBvOGF_vPJ5_6NAICaxuBmoCAerrY3UxFnV1-jZwnED686oO05tFh9Q',
    description: '질소(N₂), 산소(O₂), 아르곤(Ar), 탄산가스(CO₂) 등 철강, 조선, 반도체 및 첨단 화학 제조 산업의 필수적인 핵심 가스를 초저온 액화 및 고압 실린더로 제공합니다.',
    descriptionEng: 'Providing essential gases such as Nitrogen (N₂), Oxygen (O₂), Argon (Ar), and Carbon Dioxide (CO₂) in cryogenic liquid and high-pressure cylinders for steel, shipbuilding, and semiconductor industries.',
    supplyForm: '공급 형태: 튜브트레일러, 벌크탱크, 실린더',
    supplyFormEng: 'Supply: Tube Trailer, Bulk Tank, High-pressure Cylinder',
    gases: ['질소 (N₂ 99.999%)', '산소 (O₂ 99.9%)', '아르곤 (Ar 99.999%)', '탄산가스 (CO₂ 99.9%)', '수소 (H₂ 99.999%)'],
    purity: '99.9% ~ 99.999%',
    applications: ['철강 열처리 및 용접 공정', '조선 해양 플랜트 불활성화', '화학 플랜트 퍼지 및 실링', '식품 급속 냉동 및 보존'],
    specs: [
      { label: '공급 압력', value: '150 bar ~ 200 bar (실린더) / 저압 기화 공급' },
      { label: '순도 기준', value: 'KS M 1111, KS M 1112 규격 충족' },
      { label: '운송 차량', value: '초저온 액화 탱크로리 (10톤~20톤), 튜브트레일러' },
      { label: '품질 인증', value: 'ISO 9001 / ISO 14001 / KGS 승인' }
    ]
  },
  {
    id: 'fuel-gas',
    name: '연료용 가스',
    nameEng: 'Fuel Gas',
    category: 'fuel',
    badge: '청정 고효율 열원',
    badgeEng: 'Clean High-Efficiency Fuel',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclPyq8G3d0FeRf7qxlptSCx7WiEX8WOZTXdsZ98-HUOnFPYGsPYVmp6YIV24eQSTJ3wIeva7iQvvzm9AJ33V6do8k2_Y5MaTXEi2iefSuMyUi3esYhini49xzVpsnkF0nWCwfk4WNQg0ZpJZzp7Z_vYbYbBZTSPmITnBaVOxBvOQ4wH-NoXz7lMf7HoUnZwbULePGOMxMAdjY1JuRF4d0AkP6E41hWgNFG1zWsztbwFZWc3chkSCajQ',
    description: '프로판, 프라멕스, 에탄, 부탄, 이소부탄 등 청정 연소와 고발열량을 자랑하는 최적의 연료용 가스를 공급하여 플랜트 열원과 연료 절감을 돕습니다.',
    descriptionEng: 'Supplying optimal fuel gases including Propane, Flamex, Ethane, Butane, and Isobutane featuring clean combustion and high calorific value to reduce plant fuel costs.',
    supplyForm: '공급 형태: 전용 탱크로리 직공급, 봄베패키지',
    supplyFormEng: 'Supply: Dedicated Tank Lorry Direct Delivery, Bundle Cylinder Package',
    gases: ['프로판 (C₃H₈)', '부탄 (C₄H₁₀)', '프라멕스 (용단 전용)', '이소부탄 (i-C₄H₁₀)'],
    purity: '고순도 공업용 연료 등급',
    applications: ['금속 후판 절단 및 가열 가공', '산업용 열풍기 및 소성로 열원', '유리/도자기 고온 소결', '건조 플랜트 및 대형 보일러'],
    specs: [
      { label: '총 발열량', value: '24,000 ~ 28,000 kcal/Nm³' },
      { label: '공급 방식', value: '소형 저장탱크(0.5t~2.9t), 전용 탱크로리 정기 직공급' },
      { label: '안전 장치', value: '원격 잔량 검침기(CDMA), 과류차단밸브 일체형' },
      { label: '특징', value: '황(S) 함유량 제로에 가까운 친환경 저탄소 연소' }
    ]
  },
  {
    id: 'specialty-gas',
    name: '특수 가스',
    nameEng: 'Specialty Gas',
    category: 'specialty',
    badge: '반도체 6N급 순도',
    badgeEng: 'Semiconductor 6N Purity',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBft__CuLZSJ8Qil5ECMXp3abjH08PVNqE7GOVGgJzzVSy53ozR9ZXO2IHot6oE1R1oo3J6Jw5XZ_qfCrT4kohcg9Ng1CMScobbpvsFucsqjxWkHrktVyZ4h_xTOlHGpUz8gIzkQ1TO7zCEG4neXzsazMDsoC79YocUoYdJqmSbc4anLNl0ognbayfx6ZHL77uHTL_ywCyoGWgmB4kmxt3xtF9pJSut6chGqqblxBqAi5Ef0u5pKsLEMA',
    description: '고순도 특수가스 및 반도체·디스플레이 초미세 공정용 정밀 가스. 99.9999% 초고순도 정제 기술과 미량 불순물 제어 솔루션을 자랑합니다.',
    descriptionEng: 'High-purity specialty gases for semiconductor and display micro-fabrication. Leveraging 99.9999% (6N) purification and sub-ppb impurity control.',
    supplyForm: '공급 형태: SUS 클린 밸브 실린더, Y실린더',
    supplyFormEng: 'Supply: SUS Diaphragm Valve Cylinder, Y-Cylinder',
    gases: ['초고순도 수소 (6N 99.9999%)', '초고순도 헬륨 (He 6N)', '실란 (SiH₄)', '삼불화질소 (NF₃)', '암모니아 (고순도 NH₃)'],
    purity: '99.9999% (6N Grade)',
    applications: ['반도체 웨이퍼 증착(CVD) 및 식각(Etch)', 'OLED 디스플레이 박막 제조', '태양전지 셀 생산 라인', '광섬유 모재 합성'],
    specs: [
      { label: '수분(H₂O) 제어', value: '< 10 ppb 단위 정밀 제어' },
      { label: '실린더 사양', value: '내면 전해연마(EP) 알루미늄/스테인리스 스틸 실린더' },
      { label: '밸브 사양', value: 'DISS / CGA 전용 다이어프램 밸브 적용' },
      { label: '보증서', value: 'ICP-MS / GC-PDHID 성분분석 성적서 1:1 발행' }
    ]
  },
  {
    id: 'medical-gas',
    name: '의료용 가스',
    nameEng: 'Medical Gas',
    category: 'medical',
    badge: 'KGMP 인증',
    badgeEng: 'KGMP Certified',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUZI07UqwZdqQAm6myc-hOtJIOv_Jm57nc3PpLte1-N4ehsRWg9mVlwsjyrRhDG3LY_3OlmCPb_jUo7PLxvc-r6iKmQVXV5eF8taxIGnTp2hw4_2Issr2HD5ZG51s5d9OxxL_bOWoQcf4Dv2r_LQfkvYXPeWiRS_0uGRtmwQVLh2VfvftLbGW_NSDC89WqeJJXt9vUgQ6B4Irdq_J6ZaXQkHmMxLfCLacH-KTThIFVehPPgv_pwNzlTQ',
    description: '철저한 GMP(우수제조관리기준) 가이드라인을 준수하는 의료용 산소, 아산화질소, 멸균가스 및 첨단 의료기기 구동용 고청정 가스를 종합병원에 안정 공급합니다.',
    descriptionEng: 'Strict adherence to KGMP guidelines for supplying Medical Oxygen, Nitrous Oxide, Sterilization gas, and medical device operating gases to general hospitals.',
    supplyForm: '공급 형태: 원격 감시형 의료전용 초저온 탱크, 봄베',
    supplyFormEng: 'Supply: Remote Telemetry Medical Cryo Tank, Medical Cylinders',
    gases: ['의료용 산소 (O₂ KP)', '의료용 아산화질소 (N₂O KP)', '의료용 탄산가스 (CO₂ KP)', '멸균용 혼합가스 (EO/CO₂)'],
    purity: '대한민국 약전(KP) 의약품 표준 기준',
    applications: ['종합병원 중환자실(ICU) 및 수술실', '호흡기 질환 치료 및 인공호흡기 구동', '마취 및 진통 보조', '의료기기 저온 플라즈마 멸균'],
    specs: [
      { label: '의약품 인허가', value: '식품의약품안전처 KGMP 적합판정 인증' },
      { label: '모니터링', value: '24시간 무선 IoT 잔량 원격 모니터링 시스템' },
      { label: '백업 시스템', value: '비상용 듀얼 매니폴드 자동 전환 장치 지원' },
      { label: '전담 배송', value: '의료용 가스 전담 전문 운송인력 및 인증 차량 운행' }
    ]
  },
  {
    id: 'standard-gas',
    name: '표준 가스',
    nameEng: 'Standard Gas',
    category: 'standard',
    badge: '정밀 분석 교정',
    badgeEng: 'Precision Calibration',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_uSzJkFTAOuKRFm0fnKuq0gvmSyfFKcM7jKskhLJDpL1J11Iy6KKlsW5lxYMy88dVsv3a39EcExko_fRtvUwCocQdZqLnOSX066ih6O5xCrHRg9O2jgf5nldOBxa36eiWixeZ56VrSlgrYDDHyATuiRpxX0c-79k1hWtr71O-_5tJcpEr_M1P4bApSx3jOJjuRQJ3EaUYsfSpPTX8GazlDASk1l7gSCAf0agIGsG4-oC8kcBgosyA6A',
    description: '대기 환경 측정, 연구소 화학 분석기기 교정용 다성분 공인 표준가스. 엄격한 중량법 및 기체크로마토그래피 공인 검교정 성적서를 발행합니다.',
    descriptionEng: 'Multi-component standard gases for environmental monitoring and chemical instrument calibration. Certified gravimetric preparation with official calibration reports.',
    supplyForm: '공급 형태: 알루미늄 정밀 실린더, 맞춤 혼합비',
    supplyFormEng: 'Supply: Precision Aluminum Cylinder, Custom Ratio Mixing',
    gases: ['TMS 굴뚝 자동측정용 가스 (SO₂, NO, CO)', 'VOC 휘발성유기화합물 표준가스', '자동차 배출가스 검사용 표준가스', '천연가스 열량 분석용 혼합가스'],
    purity: 'ppm / ppb 오차범위 ±1% 이내 보증',
    applications: ['국가 환경 TMS 굴뚝 배출가스 측정소', '화학/바이오 기업 R&D 분석실', '자동차 연비 및 배출가스 인증소', '산업 안전 누출 감지기 영점 교정'],
    specs: [
      { label: '조제 방식', value: '초정밀 전자천칭을 이용한 중량법(Gravimetric Method)' },
      { label: '소급성', value: '한국표준과학연구원(KRISS) 표준물질 국가 소급성 유지' },
      { label: '용기 처리', value: '특수 내면 불활성화 코팅 실린더(Sulfinert/SilcoNert)' },
      { label: '유효기간', value: '12개월 ~ 36개월 안정성 보증 성적서 제공' }
    ]
  },
  {
    id: 'equipment',
    name: '공급 설비 & 장비',
    nameEng: 'Equipment',
    category: 'equipment',
    badge: '엔지니어링 일체',
    badgeEng: 'Full Engineering Turnkey',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfwHCmAMRC7HkW-SVtREM_ie6wUyz5wVpS9RCvkfP2GnRYK1IihC8E2ccul3AETebOy9cH0giLQ1-c7sc9qr5bKOeB3lrw9J-T06lcY47ye4sw8PyVybreqBrNcPPVIR0kwEMiOUz7ieplKJr1iSodz6ivSeU7yTPT1OwMHGX-5jiX6-VfJ55ek-vPwu_NXFDp_GX1A1WxdjWSSX13f9dGWz-ulEg8g01lCX2dKa-yyXo4ieSVrRMexg',
    description: '초저온 진공 단열 저장탱크, 고압 매니폴드, 기화기(Vaporizer), 안전차단 밸브 시스템 및 클린룸 전용 특수 배관 설계·시공 토탈 엔지니어링을 수행합니다.',
    descriptionEng: 'Turnkey engineering of cryogenic vacuum-insulated tanks, high-pressure manifolds, ambient vaporizers, emergency shutoff systems, and cleanroom ultra-pure piping.',
    supplyForm: '공급 형태: 턴키 시공 및 KGS 인허가 지원',
    supplyFormEng: 'Supply: Turnkey EPC & KGS Regulatory Authorization',
    gases: ['초저온 저장탱크 (CE / ASME 규격)', '대기식 알루미늄 핀 기화기', '자동 절체 고압 매니폴드 시스템', '가스 캐비닛 & 스크러버'],
    purity: '클린룸 Class 100 배관 시공 기준',
    applications: ['신축 반도체/이차전지 공장 유틸리티 배관', '기존 플랜트 가스 저장용량 증설', '병원 중앙가스 공급장치(MGPS)', '연구단지 특수 가스 배관망 구축'],
    specs: [
      { label: '엔지니어링', value: '3D 배관 모델링, 유량/압력 손실 시뮬레이션' },
      { label: '검사 인증', value: '한국가스안전공사(KGS) 완성검사 및 합격필증 일괄 대행' },
      { label: '시공 자격', value: '전문건설업 가스시설시공업 제1종 면허 보유' },
      { label: '유지 보수', value: '정기 순회 점검, 비파괴 검사, 24시간 긴급 A/S 체계' }
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: '입찰공고',
    categoryEng: 'Tender',
    date: '2025.01',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 "구축시스템 3자 안전진단 평가" 용역 입찰',
    titleEng: 'Tender: Third-Party Safety Diagnosis & Assessment for Ammonia TTS Bunkering Infrastructure in Ulsan Free Regulation Zone',
    summary: '친환경 무탄소 선박 연료 벙커링 실증 R&D 안전성 확보를 위한 전문 제3자 엔지니어링 안전진단 평가 용역을 공고합니다.',
    summaryEng: 'Announcement for professional third-party engineering safety diagnostic assessment to secure safety for eco-friendly carbon-free ship fuel bunkering demonstration R&D.',
    department: '친환경에너지기술연구소 / 구매조달팀',
    content: `1. 입찰건명: 울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 "구축시스템 3자 안전진단 평가" 용역
2. 발주기관: (주)MS가스 기술연구본부
3. 사업목적: 무탄소 선박용 암모니아 연료의 트럭투쉽(TTS) 벙커링 실증 설비에 대한 국제선급 및 안전기준 부합성 3자 공인 검증
4. 입찰방식: 제한경쟁입찰 (협상에 의한 계약)
5. 주요 과업범위:
   - TTS 벙커링 접속 계통 및 비상차단시스템(ESD) 신뢰도 검증
   - 누출 위험 시나리오별 확산 시뮬레이션 및 제3자 엔지니어링 감수
   - KGS 코드 및 IMO 가이드라인 대비 안전성 적합성 종합 보고서 발행
6. 입찰등록 마감: 2025년 2월 14일 17:00`,
    attachments: [
      { name: '제안요청서_암모니아벙커링_3자안전진단.pdf', size: '2.4 MB' },
      { name: '입찰유의서_및_서식_MS가스.hwp', size: '420 KB' }
    ]
  },
  {
    id: 'news-2',
    category: '입찰공고',
    categoryEng: 'Tender',
    date: '2024.12',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 "탱크로리를 이용한 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석" 용역 입찰',
    titleEng: 'Tender: Qualitative Risk Assessment (HAZOP) for Tank-Lorry Ammonia Bunkering System Demonstration in Ulsan Zone',
    summary: '암모니아 이송 탱크로리 및 접속 계통의 정성적 위험성 평가(HAZOP)를 통하여 공정 위험요소를 사전에 제거합니다.',
    summaryEng: 'Qualitative hazard and operability (HAZOP) study of ammonia transfer tank lorries and connection systems to eliminate process hazards in advance.',
    department: '안전환경기획팀 / 특수플랜트사업부',
    content: `1. 입찰건명: 탱크로리를 이용한 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석 용역
2. 발주기관: (주)MS가스
3. 주요 내용:
   - 고압 액화암모니아 탱크로리로부터 수소선박 연료탱크로의 이송 공정 HAZOP 워크숍 주관
   - 이상 운전 조건(유량 과다, 압력 상승, 커플링 탈락 등)에 대한 위험 분석 및 보완 대책 도출
   - SIL(Safety Integrity Level) 목표 등급 검토
4. 제안서 제출: 전자조달시스템 접수 및 본사 방문 제출
5. 문의: (주)MS가스 안전환경기획팀 (051-000-0000)`,
    attachments: [
      { name: 'HAZOP분석_과업지시서_MS가스.pdf', size: '1.8 MB' }
    ]
  },
  {
    id: 'news-3',
    category: '실증특례 고지',
    categoryEng: 'Regulatory Notice',
    date: '2024.11',
    title: '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증특례 이용자고지',
    titleEng: 'Notice on Regulatory Sandbox Demonstration of Ammonia Co-fired Marine Fuel Propulsion in Gyeongnam Zone',
    summary: '규제자유특구 및 지역특화발전특구에 관한 규제특례법 제86조에 의거하여 실증특례 이용자 및 관계자 고지사항을 안내합니다.',
    summaryEng: 'Official public notice for users and stakeholders in accordance with Article 86 of the Act on Special Cases for Free Regulation Zones.',
    department: '법무컴플라이언스실',
    content: `1. 실증특례 개요:
   - 특구명: 경남 암모니아 혼소 연료추진시스템 선박 규제자유특구
   - 실증사업명: 중소형 선박용 암모니아-디젤 혼소 연료 공급 및 벙커링 인프라 실증
   - 사업주관자: (주)MS가스 외 컨소시엄
2. 특례 적용 법령 및 내용:
   - 고압가스 안전관리법 및 선박안전법 관련 규제 특례
   - 실증 기간 중 허용된 특례 기준에 따라 철저한 안전 차단 장치 하에 테스트 운항 실시
3. 안전관리 체계 및 손해배상 방안:
   - 생산물배상책임보험 및 환경오염배상책임보험 가입 완료
   - 비상대응 매뉴얼 구비 및 관할 소방서, 해양경찰청과의 24시간 비상 핫라인 연계
4. 고지일자: 2024년 11월 20일`,
    attachments: [
      { name: '실증특례_책임보험증서_및_고지안내문.pdf', size: '3.1 MB' }
    ]
  },
  {
    id: 'news-4',
    category: '수상 소식',
    categoryEng: 'Award',
    date: '2024.10',
    title: '(주)MS가스 충남 중소기업 탄소중립 성과 확산의 날 충남도지사 유공자 표창 수여',
    titleEng: 'MS GAS Receives Governor Commendation at Chungnam Carbon Neutrality Achievement Ceremony',
    summary: '친환경 청정 에너지 산업 전환과 온실가스 저감 공정 설비 개발에 기여한 공로를 인정받아 도지사 유공 표창을 수상하였습니다.',
    summaryEng: 'Awarded Chungnam Governor Commendation in recognition of contributions to eco-friendly clean energy transition and GHG reduction facilities.',
    department: '홍보전략팀',
    content: `(주)MS가스가 2024년 10월 충청남도가 주최한 '중소기업 탄소중립 성과 확산의 날' 행사에서 충남도지사 유공자 표창을 수상하였습니다.

당사는 당진 생산기지를 중심으로 산업용 폐열 회수 시스템 도입, 고효율 기화기 설치를 통한 에너지 소비 23% 절감, 그리고 차세대 청정 암모니아/수소 밸류체인 구축에 앞장서 온 공로를 높이 평가받았습니다.

앞으로도 (주)MS가스는 국가 온실가스 감축 목표(NDC) 달성을 지원하고, 지속 가능한 친환경 에너지 솔루션 개발에 연구개발 역량을 집중하겠습니다.`,
    attachments: [
      { name: '보도자료_충남도지사표창_MS가스.pdf', size: '890 KB' }
    ]
  },
  {
    id: 'news-5',
    category: '정부 훈장',
    categoryEng: 'Government Honor',
    date: '2024.09',
    title: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈',
    titleEng: 'CEO Cheong-Min Jeon Awarded Silver Tower Order of Industrial Service Merit',
    summary: '국내 고압가스 및 특수가스 안전 인프라 선진화와 국가 첨단 기간산업 발전에 기여한 혁혁한 공로로 은탑산업훈장을 수훈하였습니다.',
    summaryEng: 'Honored with the Silver Tower Order of Industrial Service Merit for pioneering advancement of high-pressure specialty gas infrastructure.',
    department: '경영지원본부',
    content: `(주)MS가스 전청민 대표이사가 '대한민국 가스안전대상' 시상식에서 정부로부터 산업훈장 중 최고 영예인 '은탑산업훈장'을 수훈하였습니다.

[주요 수훈 공적]
1. 1974년 창립 이래 50년간 대한민국 기간산업(철강, 조선, 반도체) 현장에 무사고 연속 가스 공급체계 구축
2. 국내 최초 IoT 기반 초저온 가스 탱크로리 24시간 실시간 통합관제 시스템 도입 및 안전 표준화 주도
3. 반도체 6N급 고순도 가스 국산화 및 품질 안정성 확보를 통한 수출 경쟁력 제고
4. 미래 수소·암모니아 친환경 벙커링 신기술 연구개발 및 규제자유특구 실증 사업 주도

전청민 대표이사는 "이 영광은 지난 50년간 보이지 않는 곳에서 묵묵히 땀 흘려온 전 임직원과 변함없는 신뢰를 보내주신 고객사 여러분의 덕분"이라며 "앞으로도 국민의 일상과 산업의 근간을 지키는 든든한 에너지 동반자가 되겠다"고 소감을 밝혔습니다.`,
    attachments: [
      { name: '은탑산업훈장_수훈기념_공식성명문.pdf', size: '1.2 MB' }
    ]
  }
];

export const NETWORK_HUBS: NetworkHub[] = [
  {
    id: 'busan-hq',
    name: '부산 본사 및 영남 물류기지',
    nameEng: 'Busan Headquarters & Yeongnam Logistics Hub',
    role: '본사 경영총괄 / 초저온 저장 플랜트 / 남부권 핵심 배차',
    roleEng: 'Corporate HQ, Cryogenic Storage Plant, Southern Logistics Dispatch',
    region: '영남',
    address: '부산광역시 사상구 낙동대로 1410',
    addressEng: '1410 Nakdong-daero, Sasang-gu, Busan, Republic of Korea',
    tel: '051-311-0000',
    fax: '051-311-0001',
    capacity: '초저온 저장탱크 2,500톤 / 실린더 충전능력 15,000병/월',
    keyGases: ['산소(O₂)', '질소(N₂)', '아르곤(Ar)', '탄산가스(CO₂)', '의료용가스'],
    isHeadquarters: true
  },
  {
    id: 'seoul-branch',
    name: '수도권 서울본부',
    nameEng: 'Seoul Capital Region Office',
    role: '수도권 첨단산업 영업 및 프로젝트 엔지니어링 본부',
    roleEng: 'Sales & Project Engineering for Capital Metropolitan Area',
    region: '수도권',
    address: '서울특별시 영등포구 여의대로 108',
    addressEng: '108 Yeoui-daero, Yeongdeungpo-gu, Seoul',
    tel: '02-780-0000',
    fax: '02-780-0001',
    capacity: '프로젝트 총괄 수주 및 반도체 특수가스 기술영업 전담',
    keyGases: ['반도체 초고순도 가스', '표준가스', '정밀 분석용 혼합가스']
  },
  {
    id: 'incheon-plant',
    name: '인천 초저온 에어가스 기지',
    nameEng: 'Incheon Cryogenic Air Separation Terminal',
    role: '수도권 초저온 액화가스 생산 및 서해안권 공급망',
    roleEng: 'Liquid Cryogenic Production & West Coast Distribution',
    region: '수도권',
    address: '인천광역시 서구 첨단서로 45',
    addressEng: '45 Cheomdanseo-ro, Seo-gu, Incheon',
    tel: '032-560-0000',
    fax: '032-560-0001',
    capacity: '초저온 저장탱크 1,800톤 / ISO 탱크 컨테이너 터미널',
    keyGases: ['초저온 액체질소', '액체산소', '액체아르곤']
  },
  {
    id: 'dangjin-plant',
    name: '충남 당진 특수가스 생산기지',
    nameEng: 'Dangjin Specialty Gas Production Complex',
    role: '철강·화학 플랜트 대용량 파이프라인 직공급 및 특수가스 정제',
    roleEng: 'Pipeline Supply for Steel Complex & Specialty Gas Refining',
    region: '충청',
    address: '충청남도 당진시 송악읍 부곡공단로 88',
    addressEng: '88 Bugokgongdan-ro, Songak-eup, Dangjin-si, Chungcheongnam-do',
    tel: '041-355-0000',
    fax: '041-355-0001',
    capacity: '고압 배관 직공급 망 45km / 튜브트레일러 40대 동시 충전',
    keyGases: ['고압 질소 배관망', '수소(H₂)', '연료용 프로판', '특수가스']
  },
  {
    id: 'gunsan-hub',
    name: '전북 군산 광역 물류센터',
    nameEng: 'Gunsan Regional Logistics Center',
    role: '호남 서해안권 에너지 거점 및 신재생 실증기지',
    roleEng: 'Honam Energy Distribution Hub & Renewable Testing Site',
    region: '호남',
    address: '전북특별자치도 군산시 자유무역로 120',
    addressEng: '120 Jayumuyeok-ro, Gunsan-si, Jeonbuk',
    tel: '063-467-0000',
    fax: '063-467-0001',
    capacity: '벌크탱크 800톤 / 고압가스 실린더 유통 10,000병',
    keyGases: ['산업용 가스 일체', '이차전지 공정용 가스']
  },
  {
    id: 'yeosu-branch',
    name: '전남 여수 석유화학 공급소',
    nameEng: 'Yeosu Petrochemical Gas Supply Center',
    role: '여수국가산단 석유화학 공정 및 플랜트 TA 퍼지 전담 기지',
    roleEng: 'Petrochemical TA Plant Purging & Gas Chromatography Center',
    region: '호남',
    address: '전라남도 여수시 여수산단로 512',
    addressEng: '512 Yeosusandan-ro, Yeosu-si, Jeollanam-do',
    tel: '061-685-0000',
    fax: '061-685-0001',
    capacity: '초고압 질소 플랜트 퍼지 펌핑 트레일러 상시 대기',
    keyGases: ['고압 불활성 질소', '공정 교정용 표준가스', '헬륨(He)']
  },
  {
    id: 'ulsan-center',
    name: '울산 수소·암모니아 친환경 실증센터',
    nameEng: 'Ulsan Hydrogen & Ammonia Demonstration Center',
    role: '규제자유특구 TTS 벙커링 실증 연구 및 동남권 조선·중공업 공급',
    roleEng: 'TTS Marine Bunkering R&D & Heavy Industry Supply',
    region: '영남',
    address: '울산광역시 남구 용연로 210',
    addressEng: '210 Yongyeon-ro, Nam-gu, Ulsan',
    tel: '052-277-0000',
    fax: '052-277-0001',
    capacity: '선박용 암모니아 벙커링 실증 설비 / 위험물 안전 방벽 구축',
    keyGases: ['액화암모니아 (NH₃)', '청정수소', '조선용 탄산·아르곤 혼합가스']
  },
  {
    id: 'pohang-branch',
    name: '경북 포항 제철소 공급기지',
    nameEng: 'Pohang Steelworks Dedicated Supply Terminal',
    role: '포항 철강공단 24시간 연속 가스 공급 및 품질 검교정',
    roleEng: '24/7 Steel Complex Dedicated Supply & Quality Calibration',
    region: '영남',
    address: '경상북도 포항시 남구 철강로 165',
    addressEng: '165 Cheolgang-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do',
    tel: '054-282-0000',
    fax: '054-282-0001',
    capacity: '제철소 전용 대형 벌크 기지 / 레이저 가공용 초순도 산소·질소',
    keyGases: ['레이저 절단용 고순도 질소/산소', '용접용 믹스가스', '탄산가스']
  }
];

export const MSDS_RECORDS: MsdsDoc[] = [
  { id: 'msds-01', chemicalName: '질소 (Nitrogen, Compressed & Cryogenic Liquid)', formula: 'N₂', casNo: '7727-37-9', unNo: 'UN 1066 (기체) / UN 1977 (액체)', hazardClass: '고압가스 / 단순질식성 가스 (Class 2.2)', purity: '99.999% ~ 99.9999%', revisedDate: '2025.01.10', category: '산업용/특수가스' },
  { id: 'msds-02', chemicalName: '산소 (Oxygen, Compressed & Medical)', formula: 'O₂', casNo: '7782-44-7', unNo: 'UN 1072 (기체) / UN 1073 (액체)', hazardClass: '고압가스 / 산화성 가스 (Class 2.2 / 5.1)', purity: '99.5% ~ 99.999%', revisedDate: '2025.01.12', category: '산업용/의료용' },
  { id: 'msds-03', chemicalName: '아르곤 (Argon, Liquid & Compressed)', formula: 'Ar', casNo: '7440-37-1', unNo: 'UN 1006 (기체) / UN 1951 (액체)', hazardClass: '고압가스 / 단순질식성 가스 (Class 2.2)', purity: '99.999%', revisedDate: '2024.12.18', category: '산업용/특수가스' },
  { id: 'msds-04', chemicalName: '이산화탄소 (Carbon Dioxide)', formula: 'CO₂', casNo: '124-38-9', unNo: 'UN 1013 (기체) / UN 2187 (액체)', hazardClass: '고압가스 / 질식성 가스 (Class 2.2)', purity: '99.9% ~ 99.99%', revisedDate: '2024.11.05', category: '산업용/식음료' },
  { id: 'msds-05', chemicalName: '수소 (Hydrogen, Compressed)', formula: 'H₂', casNo: '1333-74-0', unNo: 'UN 1049', hazardClass: '고압가스 / 인화성 가스 (Class 2.1)', purity: '99.999% ~ 99.9999%', revisedDate: '2025.01.15', category: '특수가스/친환경에너지' },
  { id: 'msds-06', chemicalName: '헬륨 (Helium, Compressed & Liquid)', formula: 'He', casNo: '7440-59-7', unNo: 'UN 1046 (기체) / UN 1963 (액체)', hazardClass: '고압가스 / 불활성 가스 (Class 2.2)', purity: '99.9999% (6N)', revisedDate: '2024.10.22', category: '특수가스/연구용' },
  { id: 'msds-07', chemicalName: '프로판 (Propane)', formula: 'C₃H₈', casNo: '74-98-6', unNo: 'UN 1978', hazardClass: '고압가스 / 인화성 가스 (Class 2.1)', purity: '고발열량 연료 등급', revisedDate: '2024.09.30', category: '연료용가스' },
  { id: 'msds-08', chemicalName: '암모니아 (Ammonia, Anhydrous)', formula: 'NH₃', casNo: '7664-41-7', unNo: 'UN 1005', hazardClass: '독성 / 부식성 / 가연성 (Class 2.3 / 8)', purity: '99.99% ~ 99.9999%', revisedDate: '2025.01.05', category: '특수가스/선박벙커링' },
  { id: 'msds-09', chemicalName: '아산화질소 (Nitrous Oxide, Medical)', formula: 'N₂O', casNo: '10024-97-2', unNo: 'UN 1070', hazardClass: '고압가스 / 산화성 / 마취성 (Class 2.2 / 5.1)', purity: '99.5% 이상 (KP)', revisedDate: '2024.12.01', category: '의료용가스' },
  { id: 'msds-10', chemicalName: '삼불화질소 (Nitrogen Trifluoride, NF₃)', formula: 'NF₃', casNo: '7783-54-2', unNo: 'UN 2451', hazardClass: '고압가스 / 산화성 / 독성 (Class 2.2 / 5.1)', purity: '99.999% (반도체 클리닝용)', revisedDate: '2024.11.15', category: '반도체특수가스' }
];

export const TELEMETRY_NODES: TelemetryNode[] = [
  { id: 'node-01', name: '부산 사상 본사 1호 초저온 LOX 저장탱크', location: '부산 사상', status: 'NORMAL', pressureBar: 16.4, temperatureC: -183.1, flowRateNm3h: 420.5, purityPercent: 99.96, lastUpdated: '방금 전' },
  { id: 'node-02', name: '부산 사상 2호 초저온 LIN 저장탱크', location: '부산 사상', status: 'NORMAL', pressureBar: 18.2, temperatureC: -195.8, flowRateNm3h: 890.0, purityPercent: 99.9995, lastUpdated: '방금 전' },
  { id: 'node-03', name: '인천 서구 LAr 초저온 저장설비', location: '인천 서구', status: 'NORMAL', pressureBar: 15.8, temperatureC: -185.6, flowRateNm3h: 310.2, purityPercent: 99.9992, lastUpdated: '방금 전' },
  { id: 'node-04', name: '충남 당진 수소 튜브트레일러 충전 배관망', location: '충남 당진', status: 'NORMAL', pressureBar: 198.5, temperatureC: 18.2, flowRateNm3h: 1250.0, purityPercent: 99.9998, lastUpdated: '방금 전' },
  { id: 'node-05', name: '울산 남구 TTS 암모니아 벙커링 실증 라인', location: '울산 남구', status: 'NORMAL', pressureBar: 8.6, temperatureC: -33.4, flowRateNm3h: 180.4, purityPercent: 99.998, lastUpdated: '방금 전' },
  { id: 'node-06', name: '전남 여수 플랜트 TA 초고압 질소 부스터', location: '전남 여수', status: 'NORMAL', pressureBar: 245.0, temperatureC: 22.0, flowRateNm3h: 3400.0, purityPercent: 99.999, lastUpdated: '방금 전' },
  { id: 'node-07', name: '전북 군산 이차전지 특수가스 캐비닛', location: '전북 군산', status: 'NORMAL', pressureBar: 142.0, temperatureC: 20.5, flowRateNm3h: 65.2, purityPercent: 99.9999, lastUpdated: '방금 전' },
  { id: 'node-08', name: '경북 포항 제철소 전용 산소 기화설비', location: '경북 포항', status: 'NORMAL', pressureBar: 28.0, temperatureC: 15.0, flowRateNm3h: 2100.0, purityPercent: 99.95, lastUpdated: '방금 전' }
];

export const COMPANY_MILESTONES = [
  { year: '1974', title: 'MS가스 창립', description: '부산 사상에서 고압가스 충전 및 판매 사업 출범. 지역 기간제조업 공급망 구축.' },
  { year: '1985', title: '초저온 액화가스 플랜트 준공', description: '영남권 최초 민간 대형 초저온 진공단열 저장탱크 및 탱크로리 직배송 체계 가동.' },
  { year: '1998', title: '의료용 가스 KGMP 최초 인증', description: '식품의약품안전처 우수의약품 제조기준(KGMP) 적합 인증 획득, 대학병원 납품 개시.' },
  { year: '2006', title: '특수가스 정제 및 표준가스 기술연구소 설립', description: '반도체·디스플레이용 6N급 초고순도 가스 정제 라인 및 KRISS 소급 공인 교정기관 승인.' },
  { year: '2015', title: '전국 8대 광역 거점 및 17개 직영망 완성', description: '수도권(서울/인천), 충청(당진), 호남(군산/여수), 영남(부산/울산/포항)을 잇는 직송 배송망 구축.' },
  { year: '2020', title: 'IoT 스마트 가스 통합관제 시스템 오픈', description: '전국 탱크로리 및 저장탱크 압력/온도/위치 실시간 24시간 모니터링 시스템 전면 가동.' },
  { year: '2024', title: '은탑산업훈장 수훈 & 친환경 벙커링 선도', description: '가스안전관리 공로 은탑산업훈장 수훈 및 울산/경남 암모니아·수소 규제자유특구 실증 R&D 주관.' },
  { year: '2025', title: '미래 100년을 향한 지속가능 친환경 도약', description: '탄소중립 시대에 발맞춘 무탄소 선박 연료 벙커링 및 글로벌 고부가 가스 밸류체인 확장.' }
];
