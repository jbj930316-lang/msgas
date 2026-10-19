import React, { useState } from 'react';
import { TELEMETRY_NODES } from '../../data/mockData';
import { Language, TelemetryNode } from '../../types';

interface TelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const TelemetryModal: React.FC<TelemetryModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [nodes, setNodes] = useState<TelemetryNode[]>(TELEMETRY_NODES);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastRefreshedTime, setLastRefreshedTime] = useState<string>('방금 전 (실시간 송출 중)');

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setNodes((prev) =>
        prev.map((n) => ({
          ...n,
          pressureBar: +(n.pressureBar + (Math.random() * 0.4 - 0.2)).toFixed(1),
          flowRateNm3h: +(n.flowRateNm3h + (Math.random() * 6 - 3)).toFixed(1),
        }))
      );
      setLastRefreshedTime(new Date().toLocaleTimeString('ko-KR'));
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00334d]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#00334d] text-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#4cd6fb]/30 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-[#004b6e]/80 rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#4cd6fb] text-[#001f27] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">sensors</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white">
                  {language === 'KOR'
                    ? 'MS가스 전국 스마트 안전관제 현황판'
                    : 'MS GAS Nationwide Smart Telemetry Console'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0E9F6E]/20 text-[#0E9F6E] border border-[#0E9F6E]/40 text-[11px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F6E] animate-ping"></span>
                  정상 가동 (ALL NORMAL)
                </span>
              </div>
              <p className="text-[12px] text-[#96ccff] mt-0.5">
                전국 8개 광역 거점 및 17개 영업소 IoT 압력·온도·유량 센서 실시간 24시간 감시 시스템
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* 4 Summary Stat Tiles */}
        <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-white/10 bg-[#00283d]">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] font-semibold text-[#96ccff] uppercase">관제소 연동 현황</span>
            <div className="text-[26px] font-extrabold text-white mt-1">17 / 17</div>
            <span className="text-[11px] text-[#0E9F6E] font-bold">100% 정상 연결</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] font-semibold text-[#96ccff] uppercase">운행 중 특수차량</span>
            <div className="text-[26px] font-extrabold text-[#4cd6fb] mt-1">142 대</div>
            <span className="text-[11px] text-[#96ccff]">탱크로리 및 트레일러</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] font-semibold text-[#96ccff] uppercase">실시간 비상 알림</span>
            <div className="text-[26px] font-extrabold text-[#0E9F6E] mt-1">0 건</div>
            <span className="text-[11px] text-[#0E9F6E] font-bold">위험 징후 없음</span>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] font-semibold text-[#96ccff] uppercase">데이터 갱신 주기</span>
            <div className="text-[24px] font-extrabold text-white mt-1">1.0 초</div>
            <span className="text-[11px] text-[#96ccff]">초정밀 IoT 텔레메트리</span>
          </div>
        </div>

        {/* Nodes Telemetry Table */}
        <div className="p-6 overflow-x-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] font-bold text-[#b3ebff]">
              주요 생산기지 및 초저온 저장설비 센서 데이터 ({nodes.length}개 노드)
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#96ccff]">최근 갱신: {lastRefreshedTime}</span>
              <button
                type="button"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#004b6e] hover:bg-[#00639a] text-white text-[12px] font-semibold transition-colors cursor-pointer disabled:opacity-50"
              >
                <span className={`material-symbols-outlined text-[14px] ${isRefreshing ? 'animate-spin' : ''}`}>
                  refresh
                </span>
                <span>새로고침</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-inner bg-white/5">
            <table className="w-full text-left text-[12px]">
              <thead className="bg-[#004b6e] text-[#b3ebff] font-semibold border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">설비명 / 위치</th>
                  <th className="py-3 px-3">가동 상태</th>
                  <th className="py-3 px-3">내부 압력 (bar)</th>
                  <th className="py-3 px-3">내부 온도 (°C)</th>
                  <th className="py-3 px-3">공급 유량 (Nm³/h)</th>
                  <th className="py-3 px-3">순도 모니터링</th>
                  <th className="py-3 px-3 text-right">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {nodes.map((node) => (
                  <tr key={node.id} className="hover:bg-white/10 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">{node.name}</div>
                      <div className="text-[11px] text-[#96ccff]">{node.location}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 text-[#0E9F6E] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E9F6E]"></span>
                        정상 (NORMAL)
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[#4cd6fb] font-bold">
                      {node.pressureBar.toFixed(1)} bar
                    </td>
                    <td className="py-3 px-3 font-mono text-white">
                      {node.temperatureC.toFixed(1)} °C
                    </td>
                    <td className="py-3 px-3 font-mono text-[#85bae3]">
                      {node.flowRateNm3h.toLocaleString()}
                    </td>
                    <td className="py-3 px-3 font-mono text-[#0E9F6E] font-bold">
                      {node.purityPercent}%
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="px-2 py-0.5 rounded bg-[#0E9F6E]/20 text-[#0E9F6E] font-semibold text-[11px]">
                        안전
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-[#00283d] rounded-b-3xl flex items-center justify-between">
          <span className="text-[11px] text-[#96ccff]">
            * 본 데이터는 한국가스안전공사(KGS) 기준 통합 관제 지침에 따라 24시간 원격 기록됩니다.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[13px] font-semibold transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
