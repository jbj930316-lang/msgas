import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatbotDrawerProps {
  language: Language;
  onOpenQuote: (prefill?: string) => void;
  onOpenLocations: () => void;
  onOpenMsds: () => void;
  onOpenTelemetry: () => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-1',
    role: 'assistant',
    content: `안녕하세요! **(주)MS가스 공식 AI 기술상담 어시스턴트**입니다.

1974년 설립 이래 반세기 동안 축적된 초고순도 가스 정제 기술과 전국 8대 광역 거점 물류 인프라를 바탕으로 최적의 솔루션을 안내해 드립니다.

궁금하신 가스 품목, 공급 규격, 플랜트 배관 시공, 또는 안전 인허가에 대해 무엇이든 편하게 물어보세요!`,
    timestamp: '방금 전',
  },
];

const SUGGESTED_PROMPTS = [
  '반도체 초고순도 6N 질소 순도 및 실린더 사양 알려줘',
  '초저온 액화가스 탱크로리 정기 공급 절차와 견적 안내',
  '병원용 의료용 산소(O₂) KGMP 인증 규격 안내',
  '울산 규제자유특구 암모니아 선박 벙커링 실증 사업',
  '정유·석유화학 플랜트 TA 질소 가스퍼지 서비스',
];

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  language,
  onOpenQuote,
  onOpenLocations,
  onOpenMsds,
  onOpenTelemetry,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || '답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);

      // Intelligent offline / fallback response generator based on key concepts
      let fallbackText = `현재 서버 통신 상태를 확인하고 있습니다. (주)MS가스의 전문 엔지니어와 즉시 상담을 원하시면 고객센터(051-311-0000) 또는 상단의 [온라인 견적 문의]를 이용해 주시기 바랍니다.`;

      if (query.includes('질소') || query.includes('산소') || query.includes('아르곤') || query.includes('탄산') || query.includes('특수가스')) {
        fallbackText = `(주)MS가스는 반도체·디스플레이용 6N급(99.9999%) 초고순도 질소, 수소, 헬륨 및 초저온 액화가스를 전국 8개 거점을 통해 공급하고 있습니다. 상세 사양서 및 견적은 [스펙시트 종합 열람]이나 [온라인 견적 문의]를 통해 확인하실 수 있습니다.`;
      } else if (query.includes('견적') || query.includes('가격') || query.includes('단가') || query.includes('비용')) {
        fallbackText = `가스 공급 단가는 공급 형태(초저온 탱크로리 직공급, 튜브트레일러, LGC 초저온용기, 고압 실린더)와 월간 사용량에 따라 최적화되어 책정됩니다. [온라인 견적 신청]을 남겨주시면 담당 영업 엔지니어가 24시간 이내 최적가를 회신드립니다.`;
      } else if (query.includes('거점') || query.includes('위치') || query.includes('본사') || query.includes('지사')) {
        fallbackText = `(주)MS가스는 부산 본사(사상구 낙동대로 1410)를 비롯하여 서울 수도권본부, 인천 초저온기지, 충남 당진 특수기지, 전북 군산, 전남 여수, 울산 실증센터, 경북 포항 등 전국 8대 광역 거점과 17개 직영망을 보유하고 있습니다.`;
      }

      const fallbackMsg: Message = {
        id: `assistant-fallback-${Date.now()}`,
        role: 'assistant',
        content: fallbackText,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00334d] text-white text-[12px] font-semibold shadow-lg border border-[#4cd6fb]/30 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#0E9F6E] animate-ping"></span>
            <span>24/7 MS가스 AI 기술상담봇</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="MS가스 AI 챗봇 열기"
          className="w-14 h-14 rounded-full bg-[#004b6e] hover:bg-[#00334d] text-white shadow-[0_4px_20px_rgba(0,75,110,0.4)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-[#4cd6fb]/40 cursor-pointer relative group"
        >
          <span className="material-symbols-outlined text-[28px] transition-transform group-hover:rotate-12">
            {isOpen ? 'close' : 'smart_toy'}
          </span>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#0E9F6E] border-2 border-white rounded-full"></span>
          )}
        </button>
      </div>

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-[#004b6e]/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#00334d] to-[#004b6e] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#4cd6fb] text-[#001f27] flex items-center justify-center font-bold relative shadow-sm">
                <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#0E9F6E] rounded-full border-2 border-white"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[15px] sm:text-[16px] leading-tight">
                    MS가스 AI 상담원
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#0E9F6E]/20 text-[#4cd6fb] text-[10px] font-bold border border-[#4cd6fb]/30">
                    실시간 지원
                  </span>
                </div>
                <p className="text-[11px] text-[#b3ebff]">
                  50년 가스 기술력 기반 엔지니어링 Q&A
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="대화 초기화"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="닫기"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Quick Action Navigation Toolbar inside Chatbot */}
          <div className="px-4 py-2 bg-[#e7f6ff] border-b border-[#004b6e]/10 flex items-center gap-2 overflow-x-auto scrollbar-none text-[11px]">
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="px-2.5 py-1 rounded-full bg-white text-[#004b6e] font-bold border border-[#004b6e]/15 shadow-sm hover:bg-[#004b6e] hover:text-white transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px]">request_quote</span>
              <span>견적 신청</span>
            </button>
            <button
              type="button"
              onClick={onOpenMsds}
              className="px-2.5 py-1 rounded-full bg-white text-[#004b6e] font-bold border border-[#004b6e]/15 shadow-sm hover:bg-[#004b6e] hover:text-white transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px]">description</span>
              <span>MSDS 자료실</span>
            </button>
            <button
              type="button"
              onClick={onOpenLocations}
              className="px-2.5 py-1 rounded-full bg-white text-[#004b6e] font-bold border border-[#004b6e]/15 shadow-sm hover:bg-[#004b6e] hover:text-white transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px]">location_on</span>
              <span>전국 거점</span>
            </button>
            <button
              type="button"
              onClick={onOpenTelemetry}
              className="px-2.5 py-1 rounded-full bg-white text-[#0E9F6E] font-bold border border-[#0E9F6E]/30 shadow-sm hover:bg-[#0E9F6E] hover:text-white transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[13px]">sensors</span>
              <span>관제 현황</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#f4faff]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#004b6e] text-white rounded-br-none'
                      : 'bg-white text-[#0b1e26] border border-[#004b6e]/10 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-line break-words">{msg.content}</div>
                </div>
                <span className="text-[10px] text-[#71787f] mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-white border border-[#004b6e]/10 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1.5 text-[#00639a]">
                  <span className="w-2 h-2 rounded-full bg-[#00639a] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#00639a] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#00639a] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[11px] font-semibold ml-1 text-[#41484e]">
                    MS가스 AI 분석 중...
                  </span>
                </div>
              </div>
            )}

            {/* Suggested Prompts if only welcome message */}
            {messages.length === 1 && (
              <div className="pt-2">
                <p className="text-[11px] font-bold text-[#00639a] uppercase tracking-wider mb-2">
                  자주 묻는 질문 추천:
                </p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSend(prompt)}
                      className="text-left px-3 py-2 rounded-xl bg-white hover:bg-[#def1fc] text-[12px] text-[#00334d] font-medium border border-[#004b6e]/10 transition-colors shadow-2xs flex items-center justify-between group cursor-pointer"
                    >
                      <span className="line-clamp-1">{prompt}</span>
                      <span className="material-symbols-outlined text-[14px] text-[#00639a] opacity-60 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-[#004b6e]/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="가스 품목, 공급 규격, 인허가 등 질문 입력..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 rounded-2xl bg-[#f4faff] border border-[#004b6e]/20 text-[13px] text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#00639a] placeholder:text-[#71787f] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="메시지 전송"
                className="w-10 h-10 rounded-2xl bg-[#004b6e] hover:bg-[#00334d] disabled:opacity-40 text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#71787f] px-1">
              <span>(주)MS가스 AI 기술상담 지원</span>
              <span>긴급 비상 핫라인: 051-311-0000</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
