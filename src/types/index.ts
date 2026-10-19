export type Language = 'KOR' | 'ENG';

export interface GasProduct {
  id: string;
  name: string;
  nameEng: string;
  category: 'industrial' | 'fuel' | 'specialty' | 'medical' | 'standard' | 'equipment';
  badge: string;
  badgeEng: string;
  imageUrl: string;
  description: string;
  descriptionEng: string;
  supplyForm: string;
  supplyFormEng: string;
  gases: string[];
  purity: string;
  applications: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface NewsItem {
  id: string;
  category: '입찰공고' | '실증특례 고지' | '수상 소식' | '정부 훈장' | '공지사항';
  categoryEng: 'Tender' | 'Regulatory Notice' | 'Award' | 'Government Honor' | 'Notice';
  date: string;
  title: string;
  titleEng: string;
  summary: string;
  summaryEng: string;
  content: string;
  contentEng?: string;
  department?: string;
  attachments?: {
    name: string;
    size: string;
  }[];
}

export interface NetworkHub {
  id: string;
  name: string;
  nameEng: string;
  role: string;
  roleEng: string;
  region: '영남' | '수도권' | '충청' | '호남';
  address: string;
  addressEng: string;
  tel: string;
  fax: string;
  capacity: string;
  keyGases: string[];
  isHeadquarters?: boolean;
}

export interface MsdsDoc {
  id: string;
  chemicalName: string;
  formula: string;
  casNo: string;
  unNo: string;
  hazardClass: string;
  purity: string;
  revisedDate: string;
  category: string;
}

export interface TelemetryNode {
  id: string;
  name: string;
  location: string;
  status: 'NORMAL' | 'WARNING' | 'MAINTENANCE';
  pressureBar: number;
  temperatureC: number;
  flowRateNm3h: number;
  purityPercent: number;
  lastUpdated: string;
}
