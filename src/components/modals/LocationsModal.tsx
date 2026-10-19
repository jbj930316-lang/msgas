import React, { useState } from 'react';
import { NETWORK_HUBS } from '../../data/mockData';
import { Language, NetworkHub } from '../../types';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const LocationsModal: React.FC<LocationsModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [selectedHub, setSelectedHub] = useState<NetworkHub>(NETWORK_HUBS[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const regions = ['전체', '영남', '수도권', '충청', '호남'];

  const filteredHubs =
    selectedRegion === '전체'
      ? NETWORK_HUBS
      : NETWORK_HUBS.filter((h) => h.region === selectedRegion);

  const handleCopy = (address: string, id: string) => {
    navigator.clipboard?.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#004b6e]/15 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#004b6e]/10 bg-[#f4faff] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004b6e] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">location_on</span>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00334d]">
                {language === 'KOR'
                  ? '전국 8대 광역 거점 및 오시는 길'
                  : 'Nationwide 8 Strategic Hubs & Logistics Grid'}
              </h3>
              <p className="text-[12px] text-[#41484e]">
                전국 8개 광역 거점 인프라와 17개 직영 네트워크로 365일 무정전 가스 공급을 수행합니다.
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

        {/* Modal Content Split: Hub Selector & Interactive Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Region filter & Hub list */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {/* Region Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {regions.map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#004b6e] text-white'
                      : 'bg-[#f4faff] text-[#41484e] hover:bg-[#def1fc] border border-[#004b6e]/10'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Hubs List */}
            <div className="space-y-2 max-h-[450px] overflow-y-auto pr-1">
              {filteredHubs.map((hub) => (
                <div
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    selectedHub.id === hub.id
                      ? 'bg-[#e7f6ff] border-[#00639a] shadow-sm'
                      : 'bg-white border-[#004b6e]/10 hover:bg-[#f4faff]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[14px] font-bold text-[#00334d]">
                      {hub.name}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#004b6e]/10 text-[#004b6e]">
                      {hub.region}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#41484e] truncate">{hub.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Selected Hub Detailed Blueprint */}
          <div className="md:col-span-7 flex flex-col justify-between bg-[#f4faff] rounded-2xl p-6 border border-[#004b6e]/10">
            <div>
              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00639a] text-white text-[11px] font-bold">
                  {selectedHub.region}권역 거점
                </span>
                {selectedHub.isHeadquarters && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0E9F6E] text-white text-[11px] font-bold">
                    본사 (HQ)
                  </span>
                )}
              </div>
              <h4 className="text-[22px] font-bold text-[#00334d] mb-1">
                {selectedHub.name}
              </h4>
              <p className="text-[12px] text-[#71787f] uppercase font-semibold mb-4">
                {selectedHub.nameEng}
              </p>

              {/* Role & Mission */}
              <div className="bg-white p-4 rounded-xl border border-[#004b6e]/10 mb-4">
                <span className="text-[12px] font-bold text-[#00639a] block mb-1">
                  거점 역할 및 핵심 기능
                </span>
                <p className="text-[13px] text-[#0b1e26] font-medium leading-relaxed">
                  {selectedHub.role}
                </p>
              </div>

              {/* Facilities Specs */}
              <div className="space-y-2 text-[13px] mb-5">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#00639a] text-[18px] shrink-0">
                    factory
                  </span>
                  <div>
                    <span className="font-semibold text-[#00334d]">설비 저장 용량: </span>
                    <span className="text-[#41484e]">{selectedHub.capacity}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#00639a] text-[18px] shrink-0">
                    call
                  </span>
                  <div>
                    <span className="font-semibold text-[#00334d]">대표 전화: </span>
                    <span className="text-[#00639a] font-semibold">{selectedHub.tel}</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span className="font-semibold text-[#00334d]">FAX: </span>
                    <span className="text-[#41484e]">{selectedHub.fax}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#00639a] text-[18px] shrink-0">
                    place
                  </span>
                  <div className="flex-1">
                    <span className="font-semibold text-[#00334d]">도로명 주소: </span>
                    <span className="text-[#41484e]">{selectedHub.address}</span>
                  </div>
                </div>
              </div>

              {/* Main Handled Gases */}
              <div>
                <span className="text-[12px] font-bold text-[#00334d] block mb-2">
                  거점 상시 비축 가스 품목
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHub.keyGases.map((gas, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white text-[#004b6e] text-[12px] font-semibold border border-[#004b6e]/15 shadow-sm"
                    >
                      {gas}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#004b6e]/10 mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleCopy(selectedHub.address, selectedHub.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#004b6e] border border-[#004b6e]/20 text-[12px] font-bold hover:bg-[#def1fc] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copiedId === selectedHub.id ? '주소 복사됨!' : '주소 복사'}</span>
              </button>

              <a
                href={`tel:${selectedHub.tel}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#004b6e] text-white text-[12px] font-bold hover:bg-[#00639a] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
                <span>거점 직통 전화 연결</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
